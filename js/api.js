/**
 * API 工具函数
 * 一季一鲜 · 前端调用后端接口的统一封装
 */

const API_BASE = 'http://localhost:3001/api';

// 获取本地存储的 token
function getToken() {
  return localStorage.getItem('token') || '';
}

// 获取本地存储的用户信息
function getUser() {
  const u = localStorage.getItem('user');
  return u ? JSON.parse(u) : null;
}

// 通用请求封装
async function request(url, options = {}) {
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers
  };

  const token = getToken();
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(`${API_BASE}${url}`, {
    ...options,
    headers
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.error || '请求失败');
  }

  return data;
}

// ═══════════════════════════════
// 认证 API
// ═══════════════════════════════

const AuthAPI = {
  // 注册
  async register(username, password, nickname) {
    const data = await request('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ username, password, nickname })
    });
    // 保存 token 和用户信息
    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    }
    return data;
  },

  // 登录
  async login(username, password) {
    const data = await request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password })
    });
    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
    }
    return data;
  },

  // 获取当前用户
  async me() {
    return request('/auth/me');
  },

  // 登出
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  // 检查是否已登录
  isLoggedIn() {
    return !!getToken();
  },

  // 获取用户信息
  getUser() {
    return getUser();
  },

  // 获取Token
  getToken() {
    return getToken();
  }
};

// ═══════════════════════════════
// 用户地址 API
// ═══════════════════════════════
const UserAPI = {
  // 获取收货地址
  async getAddress() {
    return request('/user/address');
  },

  // 更新收货地址
  async updateAddress(receiver_name, receiver_phone, receiver_address) {
    return request('/user/address', {
      method: 'PUT',
      body: JSON.stringify({ receiver_name, receiver_phone, receiver_address })
    });
  },

  // 获取用户定位
  async getLocation() {
    return request('/user/location');
  },

  // 更新用户定位
  async updateLocation(latitude, longitude, location_name) {
    return request('/user/location', {
      method: 'PUT',
      body: JSON.stringify({ latitude, longitude, location_name })
    });
  }
};

// ═══════════════════════════════
// 商品 API
// ═══════════════════════════════

const ProductAPI = {
  // 商品列表
  async list(params = {}) {
    const qs = new URLSearchParams(params).toString();
    return request(`/products${qs ? '?' + qs : ''}`);
  },

  // 商品详情
  async detail(id) {
    return request(`/products/${id}`);
  }
};

// ═══════════════════════════════
// 订单 API
// ═══════════════════════════════

const OrderAPI = {
  // 下单
  async create(orderData) {
    return request('/orders', {
      method: 'POST',
      body: JSON.stringify(orderData)
    });
  },

  // 我的订单
  async list() {
    return request('/orders');
  },

  // 取消订单
  async cancel(orderId) {
    return request(`/orders/${orderId}/cancel`, {
      method: 'PATCH'
    });
  }
};

// ═══════════════════════════════
// 生长日志 API（统一管理日志的获取和同步）
// ═══════════════════════════════

const GrowthLogAPI = {
  // 从 localStorage 加载日志
  loadLogs() {
    try {
      return JSON.parse(localStorage.getItem('farmGrowthLogs') || '{}');
    } catch (e) { return {}; }
  },

  // 保存日志到 localStorage
  saveLogs(logs) {
    try {
      localStorage.setItem('farmGrowthLogs', JSON.stringify(logs));
    } catch (e) {}
  },

  // 格式化日期为 YYYY-MM-DD
  formatDateStr(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  },

  // 计算两个日期之间的天数
  daysBetween(startStr, endStr) {
    const [y1, m1, d1] = startStr.split('-').map(Number);
    const [y2, m2, d2] = endStr.split('-').map(Number);
    const start = new Date(y1, m1 - 1, d1);
    const end = new Date(y2, m2 - 1, d2);
    return Math.floor((end - start) / (1000 * 60 * 60 * 24));
  },

  // 获取公共数据的日志
  getPublicLogs(productId) {
    const unifiedProduct = window.FarmAdoptData?.getProjectById(productId);
    return unifiedProduct?.growthLogs || [];
  },

  // 获取产品的生长阶段数据
  getProductStages(productId) {
    // 优先使用 farm-detail.js 中定义的 stages
    if (window.productGrowthStages && window.productGrowthStages[productId]) {
      return window.productGrowthStages[productId].stages;
    }
    // 默认使用 fa001 的阶段
    if (window.productGrowthStages && window.productGrowthStages['fa001']) {
      return window.productGrowthStages['fa001'].stages;
    }
    // 如果都不可用（profile.html 等页面），返回通用默认阶段
    // 这些阶段是通用农事活动，适用于大多数作物
    return [
      { title: '日常养护', contents: ['进行日常田间管理，查看作物生长状况。', '作物生长良好，继续做好管理工作。', '本周田间管理已完成，作物长势正常。'] },
      { title: '浇水施肥', contents: ['进行浇水和施肥作业，保证作物养分供应。', '水肥管理到位，作物生长环境良好。', '根据土壤墒情进行灌溉和施肥。'] },
      { title: '病虫害防治', contents: ['进行病虫害巡查，提前预防病虫害发生。', '作物健康，无病虫害迹象。', '持续关注作物健康状况。'] },
      { title: '生长观察', contents: ['观察作物生长情况，记录生长数据。', '作物已进入新生长阶段。', '生长状况良好，发育正常。'] },
      { title: '除草松土', contents: ['进行除草松土作业，改善土壤通透性。', '田间杂草已清理，土壤松软透气。', '除草工作完成，利于根系发育。'] },
      { title: '农事记录', contents: ['记录本周农事活动，完善种植档案。', '本周农事工作已记录存档。', '日常农事管理记录完成。'] }
    ];
  },

  // 检查并同步日志（根据每周≥2次的规则：约3-4天应有一次更新）
  // 这是统一的同步入口，无论是详情页还是认养中心都应该调用此函数
  checkAndSync(productId) {
    const logs = this.loadLogs();
    let productLogs = logs[productId] || [];

    const publicLogs = this.getPublicLogs(productId);
    const stages = this.getProductStages(productId);

    const now = new Date();
    now.setHours(23, 59, 59, 999);
    const todayStr = this.formatDateStr(now);

    // 保存本地已读状态（在合并之前）
    const localReadDates = new Set();
    productLogs.forEach(log => {
      if (log.hasNew === false) {
        localReadDates.add(log.date);
      }
    });

    // 合并现有日志：以 productLogs 为基础，补充 publicLogs 中没有的日志
    // 如果 publicLogs 和 productLogs 都有同一日期的日志，优先保留 productLogs 的（保留 hasNew 状态）
    const mergedLogsMap = new Map();
    publicLogs.forEach(log => {
      mergedLogsMap.set(log.date, { ...log }); // 浅拷贝
    });
    productLogs.forEach(log => {
      if (mergedLogsMap.has(log.date)) {
        // 已存在，保留 productLogs 的 hasNew 状态
        const existing = mergedLogsMap.get(log.date);
        existing.hasNew = log.hasNew;
      } else {
        mergedLogsMap.set(log.date, { ...log });
      }
    });
    let mergedLogs = Array.from(mergedLogsMap.values());
    mergedLogs.sort((a, b) => new Date(a.date) - new Date(b.date));

    // 获取最新日志日期
    const visibleLogs = mergedLogs.filter(log => new Date(log.date) <= now);
    if (visibleLogs.length === 0) return;

    const lastLogDate = visibleLogs[visibleLogs.length - 1].date;
    const daysSinceUpdate = this.daysBetween(lastLogDate, todayStr);

    // 如果超过3天没更新，一次性生成2-3条日志（模拟农户一次性上传多日记录）
    let newLogAdded = false;
    const lastVisibleLog = visibleLogs.length > 0 ? visibleLogs[visibleLogs.length - 1] : null;
    const lastLogDateStr = lastVisibleLog ? lastVisibleLog.date : null;

    if (lastLogDateStr && daysSinceUpdate >= 3) {
      const startDate = new Date(lastLogDateStr);
      startDate.setDate(startDate.getDate() + 1); // 从上次日志的下一天开始
      const today = new Date();
      today.setHours(23, 59, 59, 999);

      // 计算间隔天数
      const intervalDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
      if (intervalDays < 3) return;

      // 随机生成2-3条日志
      const logCount = 2 + Math.floor(Math.random() * 2); // 2或3
      const addedDates = [];

      for (let i = 0; i < logCount; i++) {
        let randomDays;
        if (i === 0) {
          // 第一条：在间隔的前半部分随机
          randomDays = Math.floor(Math.random() * Math.floor(intervalDays / 2));
        } else {
          // 后续：尽量分散，避免太近
          let attempts = 0;
          do {
            randomDays = Math.floor(Math.random() * intervalDays);
            attempts++;
          } while (addedDates.some(d => Math.abs(d - randomDays) < 2) && attempts < 10);
        }

        if (addedDates.includes(randomDays)) continue;
        addedDates.push(randomDays);

        const logDate = new Date(startDate);
        logDate.setDate(logDate.getDate() + randomDays);
        const logDateStr = this.formatDateStr(logDate);

        const monthProgress = (logDate.getMonth() + 1 - 3) / 9;
        const stageIndex = Math.min(Math.floor(monthProgress * stages.length), stages.length - 1);
        const stage = stages[stageIndex];
        const stageContent = stage.contents[Math.floor(Math.random() * stage.contents.length)];

        const newLog = {
          date: logDateStr,
          title: stage.title,
          content: stageContent,
          hasNew: true,
          images: []
        };

        mergedLogs.push(newLog);
        newLogAdded = true;
      }

      if (newLogAdded) {
        mergedLogs.sort((a, b) => new Date(a.date) - new Date(b.date));
        // 重新标记最新生成的几条为未读
        const generatedDates = addedDates.map(d => {
          const dt = new Date(startDate);
          dt.setDate(dt.getDate() + d);
          return this.formatDateStr(dt);
        });
        mergedLogs.forEach(log => {
          if (generatedDates.includes(log.date)) {
            log.hasNew = true;
          }
        });
      }
    }

    // 重新获取可见日志
    const updatedVisibleLogs = mergedLogs.filter(log => new Date(log.date) <= now);

    // 判断是否为新产品（本地没有日志数据）
    const isNewProduct = productLogs.length === 0;

    // 为所有可见日志设置 hasNew 状态
    if (isNewProduct) {
      // 新产品：直接使用 publicLogs 的 hasNew 值（已正确设置最新2条为未读）
      // 不需要重新计算
    } else {
      // 已有产品：重新计算 hasNew，保留已读状态
      updatedVisibleLogs.forEach((log, i) => {
        if (localReadDates.has(log.date)) {
          log.hasNew = false; // 保留本地已读状态
        } else {
          // 其他日志默认最新2条为未读
          log.hasNew = i >= updatedVisibleLogs.length - 2;
        }
      });
    }

    // 如果有新日志加入，确保它被标记为未读
    if (newLogAdded) {
      const todayLog = mergedLogs.find(log => log.date === todayStr);
      if (todayLog) {
        todayLog.hasNew = true;
      }
    }

    logs[productId] = mergedLogs;
    this.saveLogs(logs);
  },

  // 对所有已认养的产品检查并同步日志
  checkAndSyncAll() {
    const adoptedOrders = JSON.parse(localStorage.getItem('myAdoptOrders') || '[]');
    adoptedOrders.forEach(order => {
      this.checkAndSync(order.id);
    });
  }
};

// ═══════════════════════════════
// 收藏 API
// ═══════════════════════════════

const FavoriteAPI = {
  // 获取我的收藏列表
  async list() {
    return request('/favorites');
  },

  // 获取收藏数量
  async count() {
    return request('/favorites/count');
  },

  // 添加收藏
  async add(productId) {
    return request('/favorites', {
      method: 'POST',
      body: JSON.stringify({ product_id: productId })
    });
  },

  // 取消收藏
  async remove(productId) {
    return request(`/favorites/${productId}`, {
      method: 'DELETE'
    });
  },

  // 检查是否已收藏
  async check(productId) {
    return request(`/favorites/check/${productId}`);
  },

  // 切换收藏状态（添加或取消）
  async toggle(productId) {
    const { favorited } = await this.check(productId);
    if (favorited) {
      await this.remove(productId);
      return { favorited: false };
    } else {
      await this.add(productId);
      return { favorited: true };
    }
  }
};

// 暴露到全局
window.AuthAPI = AuthAPI;
window.ProductAPI = ProductAPI;
window.OrderAPI = OrderAPI;
window.UserAPI = UserAPI;
window.GrowthLogAPI = GrowthLogAPI;
window.FavoriteAPI = FavoriteAPI;

// ═══════════════════════════════
// 关注农户 API
// ═══════════════════════════════

const FarmerFollowAPI = {
  // 获取我关注的农户列表
  async list() {
    return request('/farmer-follows');
  },

  // 关注农户
  async follow(farmerId, farmerName) {
    return request('/farmer-follows', {
      method: 'POST',
      body: JSON.stringify({ farmer_id: farmerId, farmer_name: farmerName })
    });
  },

  // 取消关注
  async unfollow(farmerId) {
    return request(`/farmer-follows/${farmerId}`, {
      method: 'DELETE'
    });
  },

  // 检查是否已关注
  async check(farmerId) {
    return request(`/farmer-follows/check/${farmerId}`);
  },

  // 切换关注状态
  async toggle(farmerId, farmerName) {
    const { followed } = await this.check(farmerId);
    if (followed) {
      await this.unfollow(farmerId);
      return { followed: false };
    } else {
      await this.follow(farmerId, farmerName);
      return { followed: true };
    }
  }
};

window.FarmerFollowAPI = FarmerFollowAPI;
