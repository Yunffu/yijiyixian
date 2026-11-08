# 一季一鲜 · 助农电商平台（v1 · 小组项目）

> 产地直连的助农认养电商 Web 应用：用户浏览产地与农产品 → 认养果园 / 农田 / 海域 → 下单认养；
> 配套产地地图与数据可视化。
>
> **本仓库是 v1 版本（小组合作完成时的状态快照），用于存档原始形态。**
> 后续的缺陷修复与工程化改造在 [`Yunffu/yijiyixian-v2`](https://github.com/Yunffu/yijiyixian-v2) 进行。

| | |
|---|---|
| 项目名称 | 一季一鲜 · 助农电商平台 |
| 项目性质 | **小组项目（2 名成员共同完成）** |
| 参赛经历 | **计算机设计大赛**参赛作品 |
| 仓库归属 | **本仓库由两位作者共同拥有（co-owned）**，任何一方不得单独转让或商用 |
| 开发周期 | 2026.09 – 2026.11 |
| 团队成员 | **Yunffu**（`@Yunffu`） · **<!-- TODO: 填队友昵称 -->**（`<!-- TODO: 填队友 GitHub ID -->`） |
| 仓库 | [`Yunffu/yijiyixian`](https://github.com/Yunffu/yijiyixian)（v1 存档） · [`Yunffu/yijiyixian-v2`](https://github.com/Yunffu/yijiyixian-v2)（完善版） · [`Yunffu/yijiyixian-qa`](https://github.com/Yunffu/yijiyixian-qa)（测试工程） |

---

## 1. 团队成员与分工

| 成员 | 负责内容 |
|---|---|
| **Yunffu** | 产品定义与交互设计、前端全部页面与动效实现、数据可视化（GSAP / D3 v7）、前端 API 封装层 `js/api.js` |
| **<!-- TODO: 填队友昵称 -->** | **<!-- TODO: 填队友负责的部分 -->** |

> ⚠️ **口径说明（写简历 / 面试时用）**
> 本项目为**两人小组合作完成**，后端实现借助了 AI 辅助生成，前端交互、视觉与产品设计由成员主导完成。
> 表述时写「负责产品交互与前端设计，独立定义数据模型与接口契约」，
> **不写「独立实现后端」**；涉及小组成果时明确写明「小组项目（2 人）」。

---

## 2. 技术栈

| 层 | 技术 |
|---|---|
| 前端 | 原生 HTML / CSS / JavaScript（无框架）、GSAP 动效、D3 v7 数据可视化、原生 `fetch` |
| 后端 | Node.js + Express 4、SQLite（`sqlite3`）、JWT（`jsonwebtoken`）、bcrypt（`bcryptjs`）、CORS |
| 静态资源 | 视频 / 字体 / 图片素材（`素材/`） |
| 端口 | 后端 `3001`，前端由 Express 静态托管（同源） |

---

## 3. 功能模块

| 模块 | 页面 | 说明 |
|---|---|---|
| 首页 | `index.html` | 专区分区、认养入口、滚动动效 |
| 商品列表 | `products.html` | 按产区 / 专区 / 品类 / 搜索词筛选 |
| 商品详情 | `product-detail.html` | 认养下单、收货信息填写 |
| 认养农场 | `farm-adopt.html` / `farm-detail.html` | 农场认养项目（6 个） |
| 滞销批发 | `whole-sale.html` / `whole-sale-detail.html` | 滞销农产品批发下单 |
| 店铺 | `store.html` | 合作社 / 农户店铺 |
| 个人中心 | `profile.html` | 我的订单、收藏、关注农户、地址管理 |
| 数据可视化 | `map.html` / `dataviz_v8.html` | 产地地图、订单与产量统计 |

### 后端接口

`backend/server.js` 注册 **22 个 REST 接口** + 1 个页面路由：

```
认证   POST /api/auth/register   POST /api/auth/login   GET /api/auth/me
用户   GET|PUT /api/user/address   GET|PUT /api/user/location
商品   GET /api/products   GET /api/products/:id
订单   POST /api/orders   GET /api/orders   PATCH /api/orders/:id/cancel
收藏   GET /api/favorites   GET /api/favorites/count   POST /api/favorites
       DELETE /api/favorites/:productId   GET /api/favorites/check/:productId
关注   GET /api/farmer-follows   POST /api/farmer-follows
       DELETE /api/farmer-follows/:farmerId   GET /api/farmer-follows/check/:farmerId
可视化 GET /api/viz/stats
```

数据库 5 张表：`users` / `products` / `orders` / `favorites` / `farmer_follows`。

---

## 4. 目录结构

```
源代码/
├── index.html / products.html / product-detail.html   # 核心页面
├── farm-adopt.html / farm-detail.html
├── whole-sale.html / whole-sale-detail.html
├── store.html / profile.html / join.html
├── map.html / dataviz_v8.html                          # 可视化
├── css/                                                # 样式
├── js/
│   ├── api.js                    # 前端 API 封装层（token / 统一错误处理）
│   ├── farm-detail.js
│   └── wholesale.js / wholesale-detail.js
├── data.js                       # 267 条商品常量（前端与后端共用同一份数据源）
├── farm-detail-1/                # 认养项目数据
├── 素材/                          # 视频 / 字体 / 图片
└── backend/
    ├── server.js                 # Express 路由 + authMiddleware
    ├── database.js               # SQLite 建表
    └── package.json
```

---

## 5. 本地运行

```bash
cd backend
npm install
npm start          # → http://localhost:3001
```

数据库会在首次启动时自动创建并由 `initProducts()`（`backend/server.js:639`）从 `data.js` 灌入 267 条商品，
无需手动准备 `.sqlite` 文件。

> 前端 `js/api.js` 中的 `API_BASE` 目前硬编码为 `http://localhost:3001/api`；
> 若部署到其他地址需改为同源相对路径 `/api`。

---

## 6. v1 已知问题（v2 修复）

本仓库作为存档版本，保留以下已定位的问题。修复过程与验证见
[`Yunffu/yijiyixian-v2`](https://github.com/Yunffu/yijiyixian-v2) 与
[`Yunffu/yijiyixian-qa`](https://github.com/Yunffu/yijiyixian-qa)。

| # | 问题 | 位置 |
|---|---|---|
| 1 | `quantity` 无正整数校验，传负数会令库存虚增 | `backend/server.js:329 / 377` |
| 2 | `total_price` 返回单价而非「单价 × 数量」，且 `price` 为 TEXT 类型 | `backend/server.js:387` |
| 3 | 库存扣减是「读-判-写」且未 await / 无事务 → 并发超卖 | `backend/server.js:329 / 377` |
| 4 | 商品列表页 `products.html` 仍读 `data.js` 静态常量，未接后端 | `products.html:416` |

---

## 7. 版权与使用声明

> **本项目为计算机设计大赛参赛作品，由两位作者共同创作并共同拥有。**

**版权归属**
- 本作品的**创意构思、产品定位、文案、视觉设计、交互方案、代码与全部素材**，
  著作权及其他相关权利**归两位作者共同所有**，任何一方不得单独主张或转让。
- 两位作者对本项目享有平等的署名与共同所有权；任何一方在对外发布、
  授权、转让或商业使用时，**须事先取得另一位作者的书面同意**。

**禁止事项（严禁）**
1. **禁止任何形式的商业使用**，包括但不限于：直接售卖、搭建商业站点接单、
   用于任何盈利性产品或服务、以本作品为基础提供付费服务。
2. **禁止抄袭创意**：不得复制、模仿、改写本作品的创意构思、产品定位、
   视觉与交互表达、文案内容，不得以任何形式冒充为本人原创作品。
3. **禁止转载本仓库内容**（含代码、素材、文案、文档）到其他仓库或平台，
   未经两位作者共同许可的任何转载、镜像、爬取、二次分发均属侵权。

**允许范围**
- 仅供**学习、研究、非商业的展示与评价**使用；
- 引用或二次创作须**显著标注原作者与出处**，并保留本声明；
- 商业化利用须经**两位作者共同书面授权**。

**免责声明**
本作品按「现状」提供，作者不对因使用或无法使用本作品而产生的任何直接或间接损失承担责任。
作者对作品中的第三方素材（字体、视频、图片）遵循其各自许可证。

---

## 8. License

**保留所有权利（All Rights Reserved）。** 见上文《版权与使用声明》。
本仓库不授予任何默认的商用、转载或再分发许可。
