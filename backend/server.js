/**
 * 一季一鲜 · 最小化后端服务器
 * Node.js + Express + SQLite + JWT
 */

const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const path = require('path');
const fs = require('fs');

const db = require('./database');

const app = express();
const PORT = 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'YOUR_JWT_SECRET_HERE';

// 中间件
app.use(cors());
app.use(express.json());

// 静态文件服务（前端页面）
app.use(express.static(path.join(__dirname, '..')));

// 处理 /products 路径（对应 products.html）
app.get('/products', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'products.html'));
});

// ═══════════════════════════════
// 辅助函数
// ═══════════════════════════════

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: '未授权，请先登录' });
  }
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.userId;
    req.username = decoded.username;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Token无效或已过期' });
  }
}

function asyncHandler(fn) {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

// ═══════════════════════════════
// 认证接口
// ═══════════════════════════════

// 注册
app.post('/api/auth/register', asyncHandler(async (req, res) => {
  const { username, password, nickname } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: '用户名和密码不能为空' });
  }

  if (password.length < 6) {
    return res.status(400).json({ error: '密码至少6位' });
  }

  // 检查用户是否存在
  const exist = await new Promise((resolve, reject) => {
    db.get('SELECT id FROM users WHERE username = ?', [username], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });

  if (exist) {
    return res.status(409).json({ error: '用户名已存在' });
  }

  // 加密密码
  const password_hash = await bcrypt.hash(password, 10);

  // 创建用户
  const result = await new Promise((resolve, reject) => {
    db.run(
      'INSERT INTO users (username, password_hash, nickname) VALUES (?, ?, ?)',
      [username, password_hash, nickname || username],
      function(err) {
        if (err) reject(err);
        else resolve(this);
      }
    );
  });

  // 生成Token
  const token = jwt.sign({ userId: result.lastID, username }, JWT_SECRET, { expiresIn: '7d' });

  res.json({
    message: '注册成功',
    token,
    user: { id: result.lastID, username, nickname: nickname || username }
  });
}));

// 登录
app.post('/api/auth/login', asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: '用户名和密码不能为空' });
  }

  // 查找用户
  const user = await new Promise((resolve, reject) => {
    db.get('SELECT * FROM users WHERE username = ?', [username], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });

  if (!user) {
    return res.status(401).json({ error: '用户名或密码错误' });
  }

  // 验证密码
  const valid = await bcrypt.compare(password, user.password_hash);
  if (!valid) {
    return res.status(401).json({ error: '用户名或密码错误' });
  }

  // 生成Token
  const token = jwt.sign({ userId: user.id, username: user.username }, JWT_SECRET, { expiresIn: '7d' });

  res.json({
    message: '登录成功',
    token,
    user: {
      id: user.id,
      username: user.username,
      nickname: user.nickname,
      receiver_name: user.receiver_name || '',
      receiver_phone: user.receiver_phone || '',
      receiver_address: user.receiver_address || ''
    }
  });
}));

// 获取当前用户信息
app.get('/api/auth/me', authMiddleware, asyncHandler(async (req, res) => {
  const user = await new Promise((resolve, reject) => {
    db.get('SELECT id, username, nickname, created_at FROM users WHERE id = ?', [req.userId], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });

  if (!user) {
    return res.status(404).json({ error: '用户不存在' });
  }

  res.json({ user });
}));

// 获取收货地址
app.get('/api/user/address', authMiddleware, asyncHandler(async (req, res) => {
  const user = await new Promise((resolve, reject) => {
    db.get('SELECT receiver_name, receiver_phone, receiver_address FROM users WHERE id = ?', [req.userId], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });

  res.json({
    receiver_name: user?.receiver_name || '',
    receiver_phone: user?.receiver_phone || '',
    receiver_address: user?.receiver_address || ''
  });
}));

// 更新收货地址
app.put('/api/user/address', authMiddleware, asyncHandler(async (req, res) => {
  const { receiver_name, receiver_phone, receiver_address } = req.body;

  await new Promise((resolve, reject) => {
    db.run(
      'UPDATE users SET receiver_name = ?, receiver_phone = ?, receiver_address = ? WHERE id = ?',
      [receiver_name || '', receiver_phone || '', receiver_address || '', req.userId],
      function(err) {
        if (err) reject(err);
        else resolve();
      }
    );
  });

  res.json({ message: '地址更新成功' });
}));

// 获取用户定位
app.get('/api/user/location', authMiddleware, asyncHandler(async (req, res) => {
  const user = await new Promise((resolve, reject) => {
    db.get('SELECT latitude, longitude, location_name FROM users WHERE id = ?', [req.userId], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });

  res.json({
    latitude: user?.latitude || null,
    longitude: user?.longitude || null,
    location_name: user?.location_name || ''
  });
}));

// 更新用户定位
app.put('/api/user/location', authMiddleware, asyncHandler(async (req, res) => {
  const { latitude, longitude, location_name } = req.body;

  if (latitude == null || longitude == null) {
    return res.status(400).json({ error: '经纬度不能为空' });
  }

  await new Promise((resolve, reject) => {
    db.run(
      'UPDATE users SET latitude = ?, longitude = ?, location_name = ? WHERE id = ?',
      [latitude, longitude, location_name || '', req.userId],
      function(err) {
        if (err) reject(err);
        else resolve();
      }
    );
  });

  res.json({ message: '定位更新成功' });
}));

// ═══════════════════════════════
// 商品接口
// ═══════════════════════════════

// 商品列表（支持筛选）
app.get('/api/products', asyncHandler(async (req, res) => {
  const { category, region, search } = req.query;

  let sql = 'SELECT * FROM products WHERE 1=1';
  const params = [];

  if (category && category !== 'all') {
    sql += ' AND cat = ?';
    params.push(category);
  }

  if (region && region !== 'all') {
    sql += ' AND region = ?';
    params.push(region);
  }

  if (search) {
    sql += ' AND (name LIKE ? OR loc LIKE ? OR farmer LIKE ?)';
    const s = `%${search}%`;
    params.push(s, s, s);
  }

  sql += ' ORDER BY id';

  const products = await new Promise((resolve, reject) => {
    db.all(sql, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });

  res.json({ products, total: products.length });
}));

// 商品详情
app.get('/api/products/:id', asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await new Promise((resolve, reject) => {
    db.get('SELECT * FROM products WHERE id = ?', [id], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });

  if (!product) {
    return res.status(404).json({ error: '商品不存在' });
  }

  res.json({ product });
}));

// ═══════════════════════════════
// 订单接口
// ═══════════════════════════════

// 下单
app.post('/api/orders', authMiddleware, asyncHandler(async (req, res) => {
  const { product_id, quantity = 1, receiver_name, receiver_phone, receiver_address } = req.body;

  if (!product_id) {
    return res.status(400).json({ error: '商品ID不能为空' });
  }

  if (!receiver_name || !receiver_phone || !receiver_address) {
    return res.status(400).json({ error: '收货信息不完整' });
  }

  // 检查商品是否存在
  const product = await new Promise((resolve, reject) => {
    db.get('SELECT * FROM products WHERE id = ?', [product_id], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });

  if (!product) {
    return res.status(404).json({ error: '商品不存在' });
  }

  // 检查库存
  if (product.stock < quantity) {
    return res.status(400).json({ error: '库存不足' });
  }

  // 检查是否有相同的待付款订单，如果有则累加数量
  const existingOrder = await new Promise((resolve, reject) => {
    db.get(
      'SELECT * FROM orders WHERE user_id = ? AND product_id = ? AND status = ?',
      [req.userId, product_id, 'pending'],
      (err, row) => {
        if (err) reject(err);
        else resolve(row);
      }
    );
  });

  let orderResult;

  if (existingOrder) {
    // 累加数量
    const newQuantity = existingOrder.quantity + quantity;
    // 检查库存是否足够（新增的数量）
    if (product.stock < quantity) {
      return res.status(400).json({ error: '库存不足' });
    }
    await new Promise((resolve, reject) => {
      db.run(
        'UPDATE orders SET quantity = ?, receiver_name = ?, receiver_phone = ?, receiver_address = ? WHERE id = ?',
        [newQuantity, receiver_name, receiver_phone, receiver_address, existingOrder.id],
        (err) => {
          if (err) reject(err);
          else resolve();
        }
      );
    });
    // 扣减库存（只扣减新增的数量）
    db.run('UPDATE products SET stock = stock - ? WHERE id = ?', [quantity, product_id]);
    orderResult = { lastID: existingOrder.id, quantity: newQuantity };
  } else {
    // 创建新订单
    orderResult = await new Promise((resolve, reject) => {
      db.run(
        `INSERT INTO orders (user_id, product_id, quantity, receiver_name, receiver_phone, receiver_address, status)
         VALUES (?, ?, ?, ?, ?, ?, 'pending')`,
        [req.userId, product_id, quantity, receiver_name, receiver_phone, receiver_address],
        function(err) {
          if (err) reject(err);
          else resolve(this);
        }
      );
    });
    // 扣减库存
    db.run('UPDATE products SET stock = stock - ? WHERE id = ?', [quantity, product_id]);
  }

  res.json({
    message: '下单成功',
    order_id: orderResult.lastID,
    order: {
      id: orderResult.lastID,
      product_id,
      quantity: orderResult.quantity,
      status: 'pending',
      total_price: product.price
    }
  });
}));

// 我的订单
app.get('/api/orders', authMiddleware, asyncHandler(async (req, res) => {
  const orders = await new Promise((resolve, reject) => {
    db.all(
      `SELECT o.*, p.name as product_name, p.price as product_price, p.loc as product_loc
       FROM orders o
       LEFT JOIN products p ON o.product_id = p.id
       WHERE o.user_id = ?
       ORDER BY o.created_at DESC`,
      [req.userId],
      (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      }
    );
  });

  res.json({ orders });
}));

// 取消订单
app.patch('/api/orders/:id/cancel', authMiddleware, asyncHandler(async (req, res) => {
  const { id } = req.params;

  const order = await new Promise((resolve, reject) => {
    db.get('SELECT * FROM orders WHERE id = ? AND user_id = ?', [id, req.userId], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });

  if (!order) {
    return res.status(404).json({ error: '订单不存在' });
  }

  if (order.status !== 'pending') {
    return res.status(400).json({ error: '当前状态无法取消' });
  }

  // 更新订单状态并恢复库存
  db.run('UPDATE orders SET status = "cancelled" WHERE id = ?', [id]);
  db.run('UPDATE products SET stock = stock + ? WHERE id = ?', [order.quantity, order.product_id]);

  res.json({ message: '订单已取消' });
}));

// ═══════════════════════════════
// 收藏接口
// ═══════════════════════════════

// 获取我的收藏列表
app.get('/api/favorites', authMiddleware, asyncHandler(async (req, res) => {
  const favorites = await new Promise((resolve, reject) => {
    db.all(
      `SELECT f.id, f.product_id, f.created_at, p.name as product_name, p.price as product_price, p.loc as product_loc, p.cat as cat, p.tag as tag
       FROM favorites f
       LEFT JOIN products p ON f.product_id = p.id
       WHERE f.user_id = ?
       ORDER BY f.created_at DESC`,
      [req.userId],
      (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      }
    );
  });

  res.json({ favorites, total: favorites.length });
}));

// 获取收藏数量
app.get('/api/favorites/count', authMiddleware, asyncHandler(async (req, res) => {
  const result = await new Promise((resolve, reject) => {
    db.get('SELECT COUNT(*) as count FROM favorites WHERE user_id = ?', [req.userId], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });

  res.json({ count: result.count });
}));

// 添加收藏
app.post('/api/favorites', authMiddleware, asyncHandler(async (req, res) => {
  const { product_id } = req.body;

  if (!product_id) {
    return res.status(400).json({ error: '商品ID不能为空' });
  }

  // 检查商品是否存在
  const product = await new Promise((resolve, reject) => {
    db.get('SELECT id FROM products WHERE id = ?', [product_id], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });

  if (!product) {
    return res.status(404).json({ error: '商品不存在' });
  }

  // 检查是否已收藏
  const exist = await new Promise((resolve, reject) => {
    db.get('SELECT id FROM favorites WHERE user_id = ? AND product_id = ?', [req.userId, product_id], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });

  if (exist) {
    return res.json({ message: '已收藏' });
  }

  // 添加收藏
  await new Promise((resolve, reject) => {
    db.run(
      'INSERT INTO favorites (user_id, product_id) VALUES (?, ?)',
      [req.userId, product_id],
      function(err) {
        if (err) reject(err);
        else resolve();
      }
    );
  });

  res.json({ message: '收藏成功' });
}));

// 取消收藏
app.delete('/api/favorites/:productId', authMiddleware, asyncHandler(async (req, res) => {
  const { productId } = req.params;

  await new Promise((resolve, reject) => {
    db.run('DELETE FROM favorites WHERE user_id = ? AND product_id = ?', [req.userId, productId], function(err) {
      if (err) reject(err);
      else resolve();
    });
  });

  res.json({ message: '已取消收藏' });
}));

// 检查是否已收藏
app.get('/api/favorites/check/:productId', authMiddleware, asyncHandler(async (req, res) => {
  const { productId } = req.params;

  const exist = await new Promise((resolve, reject) => {
    db.get('SELECT id FROM favorites WHERE user_id = ? AND product_id = ?', [req.userId, productId], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });

  res.json({ favorited: !!exist });
}));

// ═══════════════════════════════
// 关注农户接口
// ═══════════════════════════════

// 获取我关注的农户列表
app.get('/api/farmer-follows', authMiddleware, asyncHandler(async (req, res) => {
  const follows = await new Promise((resolve, reject) => {
    db.all(
      `SELECT * FROM farmer_follows WHERE user_id = ? ORDER BY created_at DESC`,
      [req.userId],
      (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      }
    );
  });

  res.json({ follows, total: follows.length });
}));

// 关注农户
app.post('/api/farmer-follows', authMiddleware, asyncHandler(async (req, res) => {
  const { farmer_id, farmer_name } = req.body;

  if (!farmer_id) {
    return res.status(400).json({ error: '农户ID不能为空' });
  }

  // 检查是否已关注
  const exist = await new Promise((resolve, reject) => {
    db.get('SELECT id FROM farmer_follows WHERE user_id = ? AND farmer_id = ?', [req.userId, farmer_id], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });

  if (exist) {
    return res.json({ message: '已关注' });
  }

  // 添加关注
  await new Promise((resolve, reject) => {
    db.run(
      'INSERT INTO farmer_follows (user_id, farmer_id, farmer_name) VALUES (?, ?, ?)',
      [req.userId, farmer_id, farmer_name || ''],
      function(err) {
        if (err) reject(err);
        else resolve();
      }
    );
  });

  res.json({ message: '关注成功' });
}));

// 取消关注农户
app.delete('/api/farmer-follows/:farmerId', authMiddleware, asyncHandler(async (req, res) => {
  const { farmerId } = req.params;

  await new Promise((resolve, reject) => {
    db.run('DELETE FROM farmer_follows WHERE user_id = ? AND farmer_id = ?', [req.userId, farmerId], function(err) {
      if (err) reject(err);
      else resolve();
    });
  });

  res.json({ message: '已取消关注' });
}));

// 检查是否已关注农户
app.get('/api/farmer-follows/check/:farmerId', authMiddleware, asyncHandler(async (req, res) => {
  const { farmerId } = req.params;

  const exist = await new Promise((resolve, reject) => {
    db.get('SELECT id FROM farmer_follows WHERE user_id = ? AND farmer_id = ?', [req.userId, farmerId], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });

  res.json({ followed: !!exist });
}));

// ═══════════════════════════════
// 数据初始化（从 data.js 导入）
// ═══════════════════════════════

function initProducts() {
  // 读取 data.js
  const dataPath = path.join(__dirname, '..', 'data.js');
  if (!fs.existsSync(dataPath)) {
    return;
  }

  // 检查是否已有数据
  db.get('SELECT COUNT(*) as count FROM products', (err, row) => {
    if (err) {
      return;
    }

    if (row.count > 0) {
    }

    // 动态执行 data.js 获取 PRODUCTS
    let PRODUCTS;
    try {
      const dataContent = fs.readFileSync(dataPath, 'utf-8');
      const productMatch = dataContent.match(/const PRODUCTS = \[([\s\S]*?)\];/);
      if (!productMatch) {
        return;
      }

      // 使用 eval 获取 PRODUCTS（仅含简单对象）
      const evalFunc = new Function('module', 'exports', productMatch[0] + '; return PRODUCTS;');
      PRODUCTS = evalFunc({}, {});


      const stmt = db.prepare(`
        INSERT OR IGNORE INTO products (id, name, region, loc, desc, price, tag, tagZone, cat, quantity, farmer, rating, stock, total_stock)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `);

      let imported = 0;
      PRODUCTS.forEach(p => {
        stmt.run(
          p.id, p.name, p.region, p.loc, p.desc,
          p.price, p.tag, p.tagZone, p.cat,
          p.quantity || 100,
          p.farmer || '平台自营',
          p.rating || '4.5',
          p.quantity || 100,
          p.quantity || 100,
          (err) => {
            if (err) {
            } else {
              imported++;
            }
          }
        );
      });

      stmt.finalize(() => {
      });

    } catch (err) {
    }
  });
}

// ═══════════════════════════════
// 数据可视化统计接口（供 map.html 使用）
// ═══════════════════════════════

function buildDATA() {
  const cats = ['fruit', 'veg', 'meat', 'fish', 'other'];
  const catLabels = { fruit: '水果', veg: '蔬菜', meat: '蛋奶肉', fish: '水产', other: '其它' };

  const data = {};
  cats.forEach(c => { data[c] = { label: catLabels[c], items: [] }; });

  // 读取 data.js 中的 PRODUCTS 并聚合成 map 格式
  const dataPath = path.join(__dirname, '..', 'data.js');
  if (!fs.existsSync(dataPath)) {
    return data;
  }

  try {
    const dataContent = fs.readFileSync(dataPath, 'utf-8');
    const productMatch = dataContent.match(/const PRODUCTS = \[([\s\S]*?)\];/);
    if (!productMatch) return data;

    const evalFunc = new Function('module', 'exports', productMatch[0] + '; return PRODUCTS;');
    const PRODUCTS = evalFunc({}, {});

    const nameMap = {};
    PRODUCTS.forEach(p => {
      if (!nameMap[p.name]) {
        nameMap[p.name] = { name: p.name, cat: p.cat, total: 0, regions: { 东北: 0, 华北: 0, 华东: 0, 华中: 0, 华南: 0, 西南: 0, 西北: 0 } };
      }
      nameMap[p.name].regions[p.region] = (nameMap[p.name].regions[p.region] || 0) + (p.quantity || 1);
      nameMap[p.name].total += (p.quantity || 1);
    });

    Object.values(nameMap).forEach(item => {
      if (data[item.cat]) data[item.cat].items.push(item);
    });
  } catch (err) {
  }

  return data;
}

app.get('/api/viz/stats', (req, res) => {
  const data = buildDATA();
  res.json(data);
});

// ═══════════════════════════════
// 启动服务器
// ═══════════════════════════════

app.listen(PORT, () => {

  // 初始化商品数据
  initProducts();
});
