/**
 * 滞销物批发详情页 JavaScript
 * 一季一鲜 · Wholesale Detail
 */

(function() {
  'use strict';

  // ═══════════════════════════════
  // 数据模拟
  // ═══════════════════════════════
  const wholesaleProducts = {
    'ws001': {
      id: 'ws001',
      name: '云南高原苹果',
      category: '水果',
      region: '云南',
      location: '云南·昆明',
      origin: { lat: 25.04, lng: 102.71 },
      shelf_life: 7,
      storage_type: 'cold',
      dist: 32,
      price: 6.8,
      originalPrice: 12,
      discount: 43,
      stagnantStart: '2026-03-30',
      storageMethod: '常温保存3天 / 冷藏7天，果品新鲜度良好',
      moq: 10,
      stock: 300,
      totalStock: 500,
      stale: 3,
      isFresh: false,
      isRemote: true,
      deliveryDays: 2,
      tags: ['滞销特价', '43%OFF'],
      image: '素材/滞销/苹果2.jpg',
      images: ['素材/滞销/苹果2.jpg', '素材/滞销/苹果1.jpg', '素材/滞销/苹果地.jpg'],
      farmer: {
        name: '云南果农老王',
        avatar: '',
        trustScore: 4.7,
        certified: true,
        productCount: 3,
        totalSales: 2100,
        fans: 532
      },
      description: '云南高原苹果，因物流受阻滞销，果品完好',
      specifications: {
        规格: '大果直径80mm+',
        产地: '云南省昆明市',
        品种: '红富士',
        储存: '冷库2-8℃',
        包装: '纸箱'
      },
      reviews: [
        { name: '张老板', qualityRating: 5, packageRating: 4, deliveryRating: 4, date: '2025-03-15', content: '苹果很甜，水分足，会回购！' },
        { name: '李女士', qualityRating: 4, packageRating: 5, deliveryRating: 3, date: '2025-03-14', content: '包装完好，就是快递慢了2天' },
        { name: '餐饮王', qualityRating: 5, packageRating: 4, deliveryRating: 5, date: '2025-03-10', content: '我们餐厅采购的，客户反馈很好' }
      ]
    },
    'ws002': {
      id: 'ws002',
      name: '山东大棚番茄',
      category: '蔬菜',
      region: '山东',
      location: '山东·寿光',
      origin: { lat: 36.85, lng: 118.79 },
      shelf_life: 5,
      storage_type: 'cold',
      dist: 8,
      price: 2.6,
      originalPrice: 4,
      discount: 35,
      stagnantStart: '2026-03-30',
      storageMethod: '常温3天 / 冷藏5天，避免阳光直射',
      moq: 10,
      stock: 800,
      totalStock: 1000,
      stale: 10,
      isFresh: true,
      isRemote: false,
      deliveryDays: 1,
      tags: ['滞销特价', '35%OFF'],
      image: '素材/滞销/番茄1.jpg',
      images: ['素材/滞销/番茄1.jpg', '素材/滞销/番茄2.jpg', '素材/滞销/番茄树.jpg'],
      farmer: {
        name: '山东菜农老李',
        avatar: '',
        trustScore: 4.5,
        certified: true,
        productCount: 5,
        totalSales: 3800,
        fans: 428
      },
      description: '山东大棚番茄，新鲜采摘，因物流受阻滞销',
      specifications: {
        规格: '中等果',
        产地: '山东省寿光市',
        品种: '大红番茄',
        储存: '常温',
        包装: '筐装'
      },
      reviews: [
        { name: '赵阿姨', qualityRating: 4, packageRating: 4, deliveryRating: 4, date: '2025-03-14', content: '番茄很新鲜，酸甜适中' },
        { name: '超市采购', qualityRating: 3, packageRating: 3, deliveryRating: 3, date: '2025-03-13', content: '有几斤压坏了，整体还行' },
        { name: '食堂张', qualityRating: 4, packageRating: 4, deliveryRating: 4, date: '2025-03-11', content: '做菜用的，性价比高' }
      ]
    },
    'ws003': {
      id: 'ws003',
      name: '内蒙古草原羊肉',
      category: '肉',
      region: '内蒙古',
      location: '内蒙古·锡盟',
      origin: { lat: 43.93, lng: 116.03 },
      shelf_life: 90,
      storage_type: 'frozen',
      dist: 120,
      price: 32,
      originalPrice: 45,
      discount: 28,
      stagnantStart: '2026-03-30',
      storageMethod: '冷冻90天 / 冷藏3天',
      moq: 10,
      stock: 150,
      totalStock: 200,
      stale: 10,
      isFresh: true,
      isRemote: true,
      deliveryDays: 3,
      tags: ['滞销特价', '28%OFF', '新鲜宰杀'],
      image: '素材/滞销/羊1.jpg',
      images: ['素材/滞销/羊3.jpg', '素材/滞销/羊4.jpg', '素材/滞销/羊6.jpg'],
      farmer: {
        name: '锡盟牧民合作社',
        avatar: '',
        trustScore: 4.9,
        certified: true,
        productCount: 2,
        totalSales: 5600,
        fans: 1200
      },
      description: '内蒙古草原羊肉，新鲜宰杀，因物流受阻滞销',
      specifications: {
        规格: '带骨羊肉',
        产地: '内蒙古锡林郭勒盟',
        品种: '草原羊',
        储存: '-18℃冷冻',
        包装: '真空包装'
      },
      reviews: [
        { name: '火锅店刘', qualityRating: 5, packageRating: 5, deliveryRating: 5, date: '2025-03-15', content: '羊肉非常正宗，火锅店专用' },
        { name: '马海鲜', qualityRating: 5, packageRating: 4, deliveryRating: 5, date: '2025-03-14', content: '化冻后很新鲜，不变色' },
        { name: '牧民老马', qualityRating: 4, packageRating: 4, deliveryRating: 4, date: '2025-03-12', content: '品质没问题，就是肥肉少了点' }
      ]
    },
    'ws004': {
      id: 'ws004',
      name: '舟山带鱼',
      category: '水产',
      region: '浙江',
      location: '浙江·舟山',
      origin: { lat: 29.99, lng: 122.21 },
      shelf_life: 7,
      storage_type: 'frozen',
      dist: 45,
      price: 14,
      originalPrice: 28,
      discount: 52,
      stagnantStart: '2026-03-30',
      storageMethod: '冰鲜1天 / 冷冻7天',
      moq: 10,
      stock: 200,
      totalStock: 300,
      stale: 4,
      isFresh: true,
      isRemote: true,
      deliveryDays: 2,
      tags: ['滞销特价', '52%OFF', '海鲜'],
      image: '素材/滞销/带鱼2.jpg',
      images: ['素材/滞销/带鱼2.jpg', '素材/滞销/带鱼1.jpg', '素材/滞销/带鱼3.jpg'],
      farmer: {
        name: '舟山渔民老张',
        avatar: '',
        trustScore: 4.6,
        certified: true,
        productCount: 4,
        totalSales: 4200,
        fans: 680
      },
      description: '舟山带鱼，新鲜捕获，因销路受阻滞销',
      specifications: {
        规格: '中等带鱼',
        产地: '浙江省舟山市',
        品种: '东海带鱼',
        储存: '冰鲜',
        包装: '泡沫箱加冰'
      },
      reviews: [
        { name: '海鲜商', qualityRating: 4, packageRating: 4, deliveryRating: 4, date: '2025-03-13', content: '带鱼很新鲜，冰袋也够' },
        { name: '码头老王', qualityRating: 3, packageRating: 3, deliveryRating: 3, date: '2025-03-11', content: '有两条断头了' },
        { name: '鱼丸陈', qualityRating: 4, packageRating: 4, deliveryRating: 4, date: '2025-03-09', content: '做鱼丸很合适，划算' }
      ]
    },
    'ws005': {
      id: 'ws005',
      name: '东北优质大豆',
      category: '其它',
      region: '黑龙江',
      location: '黑龙江·哈尔滨',
      origin: { lat: 45.80, lng: 126.53 },
      shelf_life: 180,
      storage_type: 'room',
      dist: 280,
      price: 3.8,
      originalPrice: 6.2,
      discount: 38,
      stagnantStart: '2026-03-25',
      storageMethod: '干燥通风180天 / 冷藏90天',
      moq: 10,
      stock: 1500,
      totalStock: 2000,
      stale: 180,
      isFresh: false,
      isRemote: true,
      deliveryDays: 4,
      tags: ['滞销特价', '38%OFF', '非转基因'],
      image: '素材/滞销/大豆1.jpg',
      images: ['素材/滞销/大豆1.jpg', '素材/滞销/大豆2.jpg', '素材/滞销/大豆3.jpg'],
      farmer: {
        name: '东北粮农老赵',
        avatar: '',
        trustScore: 4.8,
        certified: true,
        productCount: 3,
        totalSales: 7800,
        fans: 956
      },
      description: '东北优质大豆，因批发商取消订单滞销',
      specifications: {
        规格: '一等品',
        产地: '黑龙江省哈尔滨市',
        品种: '黄大豆',
        储存: '干燥通风',
        包装: '麻袋'
      },
      reviews: [
        { name: '豆腐坊', qualityRating: 5, packageRating: 5, deliveryRating: 5, date: '2025-03-12', content: '做豆腐出浆率高，好评' },
        { name: '粮油店', qualityRating: 5, packageRating: 5, deliveryRating: 4, date: '2025-03-10', content: '颗粒饱满，颜色金黄' },
        { name: '豆浆店', qualityRating: 4, packageRating: 4, deliveryRating: 4, date: '2025-03-08', content: '新鲜度没问题，回购中' }
      ]
    },
    'ws006': {
      id: 'ws006',
      name: '四川耙耙柑',
      category: '水果',
      region: '四川',
      location: '四川·成都',
      dist: 18,
      price: 3.2,
      originalPrice: 5.8,
      discount: 45,
      stagnantStart: '2026-03-27',
      storageMethod: '常温7天 / 冷藏14天',
      moq: 10,
      stock: 400,
      totalStock: 500,
      stale: 5,
      isFresh: false,
      isRemote: false,
      deliveryDays: 1,
      origin: { lat: 30.57, lng: 104.07 },
      shelf_life: 14,
      storage_type: 'cold',
      tags: ['滞销特价', '45%OFF', '时令水果'],
      image: '素材/滞销/耙耙柑1.jpg',
      images: ['素材/滞销/耙耙柑1.jpg', '素材/滞销/耙耙柑2.jpg', '素材/滞销/耙耙柑树.jpg'],
      farmer: {
        name: '四川果农老陈',
        avatar: '',
        trustScore: 4.4,
        certified: true,
        productCount: 4,
        totalSales: 1900,
        fans: 320
      },
      description: '四川耙耙柑，时令水果，因物流受阻滞销',
      specifications: {
        规格: '中果70-80mm',
        产地: '四川省成都市',
        品种: '耙耙柑',
        储存: '常温',
        包装: '纸箱'
      },
      reviews: [
        { name: '水果商', qualityRating: 4, packageRating: 4, deliveryRating: 4, date: '2025-03-13', content: '柑子很甜，水分多' },
        { name: '橘农老周', qualityRating: 3, packageRating: 3, deliveryRating: 3, date: '2025-03-11', content: '有几个有点干，水分不足' },
        { name: '零食铺', qualityRating: 4, packageRating: 4, deliveryRating: 4, date: '2025-03-08', content: '做水果茶用，不错' }
      ]
    },
    'ws007': {
      id: 'ws007',
      name: '河北鸡蛋批发',
      category: '蛋',
      region: '河北',
      location: '河北·邯郸',
      dist: 55,
      price: 5.5,
      originalPrice: 7.3,
      discount: 25,
      stagnantStart: '2026-03-30',
      storageMethod: '常温10天 / 冷藏20天',
      moq: 60,
      stock: 800,
      totalStock: 1000,
      stale: 10,
      isFresh: true,
      isRemote: true,
      deliveryDays: 2,
      origin: { lat: 36.61, lng: 114.54 },
      shelf_life: 20,
      storage_type: 'cold',
      tags: ['滞销特价', '25%OFF', '新鲜鸡蛋'],
      image: '素材/滞销/鸡蛋2.jpg',
      images: ['素材/滞销/鸡蛋2.jpg', '素材/滞销/鸡蛋1.jpg', '素材/滞销/鸡蛋3.jpg'],
      farmer: {
        name: '河北养殖户老王',
        avatar: '',
        trustScore: 4.6,
        certified: true,
        productCount: 2,
        totalSales: 5600,
        fans: 720
      },
      description: '河北鸡蛋，新鲜土鸡蛋，因物流受阻滞销',
      specifications: {
        规格: '土鸡蛋',
        产地: '河北省邯郸市',
        品种: '农家土鸡',
        储存: '阴凉15℃',
        包装: '纸盘'
      },
      reviews: [
        { name: '早餐店', qualityRating: 5, packageRating: 5, deliveryRating: 4, date: '2025-03-14', content: '鸡蛋很新鲜，蛋黄颜色深' },
        { name: '蛋糕房', qualityRating: 4, packageRating: 4, deliveryRating: 4, date: '2025-03-13', content: '做蛋糕用的，效果好' },
        { name: '家庭主妇', qualityRating: 4, packageRating: 4, deliveryRating: 4, date: '2025-03-11', content: '比超市便宜，质量也不错' }
      ]
    },
    'ws008': {
      id: 'ws008',
      name: '江苏大闸蟹',
      category: '水产',
      region: '江苏',
      location: '江苏·苏州',
      dist: 95,
      price: 28,
      originalPrice: 46,
      discount: 40,
      stagnantStart: '2026-03-30',
      storageMethod: '充氧1天 / 冷冻2天',
      moq: 10,
      stock: 80,
      totalStock: 100,
      stale: 10,
      isFresh: true,
      isRemote: true,
      deliveryDays: 1,
      origin: { lat: 31.30, lng: 120.59 },
      shelf_life: 2,
      storage_type: 'frozen',
      tags: ['滞销特价', '40%OFF', '鲜活水产'],
      image: '素材/滞销/螃蟹1.jpg',
      images: ['素材/滞销/螃蟹1.jpg', '素材/滞销/螃蟹2.jpg', '素材/滞销/螃蟹3.jpg'],
      farmer: {
        name: '苏州蟹农老周',
        avatar: '',
        trustScore: 4.7,
        certified: true,
        productCount: 3,
        totalSales: 3200,
        fans: 560
      },
      description: '江苏大闸蟹，阳澄湖产区，因季节性滞销',
      specifications: {
        规格: '公蟹3-4两',
        产地: '江苏省苏州市',
        品种: '阳澄湖大闸蟹',
        储存: '充氧',
        包装: '泡沫箱加冰'
      },
      reviews: [
        { name: '海鲜楼', qualityRating: 5, packageRating: 5, deliveryRating: 4, date: '2025-03-14', content: '蟹黄饱满，肉质鲜美' },
        { name: '酒楼老郑', qualityRating: 4, packageRating: 4, deliveryRating: 4, date: '2025-03-13', content: '做醉蟹用的，质量不错' },
        { name: '吃货小王', qualityRating: 5, packageRating: 5, deliveryRating: 4, date: '2025-03-11', content: '鲜活到家，非常满意' }
      ]
    }
  };

  // ═══════════════════════════════
  // 用户定位状态
  // ═══════════════════════════════
  let userLocation = null;  // { lat, lng }

  // ═══════════════════════════════
  // 地理计算工具
  // ═══════════════════════════════

  /**
   * Haversine公式：计算两个坐标间的球面距离（km）
   */
  function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371;  // 地球半径(km)
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLng = (lng2 - lng1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
              Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
              Math.sin(dLng/2) * Math.sin(dLng/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    return R * c;
  }

  /**
   * 根据储存类型和距离估算配送天数
   * cold: 冷链 50km/天
   * room: 常温 150km/天
   * frozen: 冷冻 40km/天
   */
  function estimateDeliveryDays(storageType, distanceKm) {
    const speedMap = {
      'cold': 50,
      'room': 150,
      'frozen': 40
    };
    const speed = speedMap[storageType] || 100;
    return Math.ceil(distanceKm / speed);
  }

  /**
   * 估算剩余保质期（天）
   * 剩余 = 总保质期 - 已滞留天数
   */
  function getRemainingShelfLife(product) {
    return (product.shelf_life || 7) - (product.stale || 0);
  }

  /**
   * 风险等级判断
   * 返回: 'danger'(危险) | 'warning'(警告) | 'safe'(安全)
   */
  function checkFreshnessRisk(product, deliveryDays) {
    const remaining = getRemainingShelfLife(product);
    if (remaining <= 0) return 'danger';       // 已无保质期
    if (deliveryDays > remaining) return 'danger';  // 配送时间超过保质期
    if (deliveryDays * 1.2 >= remaining) return 'warning';  // 配送时间接近保质期
    return 'safe';
  }

  /**
   * 获取用户真实位置
   */
  function getUserLocation(callback) {
    if (!navigator.geolocation) {
      showToast('您的浏览器不支持定位功能');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        showToast('定位成功');
        if (callback) callback(userLocation);
      },
      (error) => {
        switch(error.code) {
          case error.PERMISSION_DENIED:
            showToast('定位权限被拒绝，请开启定位权限');
            break;
          case error.POSITION_UNAVAILABLE:
            showToast('无法获取位置信息');
            break;
          case error.TIMEOUT:
            showToast('定位请求超时');
            break;
          default:
            showToast('定位失败');
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  }

  // ═══════════════════════════════
  // DOM 元素
  // ═══════════════════════════════
  const breadcrumbName = document.getElementById('breadcrumbName');
  const productTitle = document.getElementById('productTitle');
  const productRegion = document.getElementById('productRegion');
  const farmerName = document.getElementById('farmerName');
  const stagnantTime = document.getElementById('stagnantTime');
  const stagnantDuration = document.getElementById('stagnantDuration');
  const storageMethod = document.getElementById('storageMethod');
  const productPrice = document.getElementById('productPrice');
  const originalPrice = document.getElementById('originalPrice');
  const priceDiscount = document.getElementById('priceDiscount');
  const moqValue = document.getElementById('moqValue');
  const stockCount = document.getElementById('stockCount');
  const stockProgressFill = document.getElementById('stockProgressFill');
  const soldPercent = document.getElementById('soldPercent');
  const totalStock = document.getElementById('totalStock');
  const detailTable = document.getElementById('detailTable');
  const shopDetailAvatar = document.getElementById('shopDetailAvatar');
  const shopDetailName = document.getElementById('shopDetailName');
  const shopDetailScore = document.getElementById('shopDetailScore');
  const shopDetailBadge = document.getElementById('shopDetailBadge');
  const shopProductCount = document.getElementById('shopProductCount');
  const shopTotalSales = document.getElementById('shopTotalSales');
  const shopFans = document.getElementById('shopFans');
  const shopDetailBtn = document.getElementById('detailShopBtn');
  const reviewList = document.getElementById('reviewList');
  const addCartBtn = document.getElementById('addCartBtn');
  const buyNowBtn = document.getElementById('buyNowBtn');
  const favoriteBtn = document.getElementById('favoriteBtn');
  const purchaseModal = document.getElementById('purchaseModal');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  const modalImg = document.getElementById('modalImg');
  const modalTitle = document.getElementById('modalTitle');
  const modalPrice = document.getElementById('modalPrice');
  const qtyInput = document.getElementById('qtyInput');
  const qtyMinus = document.getElementById('qtyMinus');
  const qtyPlus = document.getElementById('qtyPlus');
  const modalMoqValue = document.getElementById('modalMoqValue');
  const modalStockFill = document.getElementById('modalStockFill');
  const modalStockText = document.getElementById('modalStockText');
  const modalTotalPrice = document.getElementById('modalTotalPrice');
  const modalSubmit = document.getElementById('modalSubmit');
  const modalReceiverName = document.getElementById('modalReceiverName');
  const modalReceiverPhone = document.getElementById('modalReceiverPhone');
  const modalReceiverAddress = document.getElementById('modalReceiverAddress');
  const modalRiskHint = document.getElementById('modalRiskHint');
  const toast = document.getElementById('toast');
  const riskModal = document.getElementById('riskModal');
  const riskModalOverlay = document.getElementById('riskModalOverlay');
  const riskModalBtn = document.getElementById('riskModalBtn');
  const riskTag = document.getElementById('riskTag');
  const riskBanner = document.getElementById('riskBanner');
  const riskBannerText = document.getElementById('riskBannerText');
  const guaranteeSection = document.getElementById('guaranteeSection');
  const deliverySection = document.getElementById('deliverySection');
  const qualityScore = document.getElementById('qualityScore');
  const packageScore = document.getElementById('packageScore');
  const deliveryScore = document.getElementById('deliveryScore');
  const avgScore = document.getElementById('avgScore');
  const avgStars = document.getElementById('avgStars');
  const qualityStars = document.getElementById('qualityStars');
  const packageStars = document.getElementById('packageStars');
  const deliveryStars = document.getElementById('deliveryStars');
  const previewModal = document.getElementById('previewModal');
  const previewClose = document.getElementById('previewClose');
  const previewPrev = document.getElementById('previewPrev');
  const previewNext = document.getElementById('previewNext');
  const previewCounter = document.getElementById('previewCounter');
  const zoomBtn = document.getElementById('zoomBtn');

  // 购物车弹窗相关
  const cartModal = document.getElementById('cartModal');
  const cartModalOverlay = document.getElementById('cartModalOverlay');
  const cartModalClose = document.getElementById('cartModalClose');
  const cartModalImg = document.getElementById('cartModalImg');
  const cartModalTitle = document.getElementById('cartModalTitle');
  const cartModalPrice = document.getElementById('cartModalPrice');
  const cartQtyInput = document.getElementById('cartQtyInput');
  const cartQtyMinus = document.getElementById('cartQtyMinus');
  const cartQtyPlus = document.getElementById('cartQtyPlus');
  const cartModalMoqValue = document.getElementById('cartModalMoqValue');
  const cartModalStockFill = document.getElementById('cartModalStockFill');
  const cartModalStockText = document.getElementById('cartModalStockText');
  const cartModalTotalPrice = document.getElementById('cartModalTotalPrice');
  const cartModalBtnAdd = document.getElementById('cartModalBtnAdd');

  // 缩略图相关
  const mediaThumbs = document.getElementById('mediaThumbs');
  const mediaPlaceholder = document.getElementById('mediaPlaceholder');
  const mediaPlaceholderText = document.getElementById('mediaPlaceholderText');

  // 当前图片索引
  let currentImageIndex = 0;
  const totalImages = 3;

  // 是否为购物车模式（加入待付款 vs 直接购买）
  let isCartMode = false;

  // ═══════════════════════════════
  // 缩略图切换
  // ═══════════════════════════════
  // 状态管理 - 图片
  // ═══════════════════════════════
  let imageState = {
    currentIndex: 0,
    images: [],
    totalImages: 3
  };

  // ═══════════════════════════════
  function initThumbnails() {
    const product = getCurrentProduct();
    if (!product || !mediaThumbs) return;

    // 从数据获取images数组
    imageState.images = product.images && product.images.length > 0 
      ? product.images 
      : [product.image || '', product.image || '', product.image || ''];
    imageState.currentIndex = 0;
    imageState.totalImages = imageState.images.length;

    // 动态渲染缩略图 - 显示实际缩略图
    mediaThumbs.innerHTML = imageState.images.map((imgSrc, index) => `
      <button class="thumb-item ${index === 0 ? 'active' : ''}" data-index="${index}">
        <img src="${imgSrc}" alt="图${index + 1}" style="width:100%;height:100%;object-fit:cover;">
      </button>
    `).join('');

    // 更新主图显示
    updateMainImage();

    // 点击缩略图切换
    const thumbs = document.querySelectorAll('.thumb-item');
    thumbs.forEach((thumb, index) => {
      thumb.addEventListener('click', () => {
        imageState.currentIndex = index;
        
        // 更新缩略图选中状态
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        
        // 更新主图显示
        updateMainImage();
      });
    });
  }

  // 更新主图显示（显示实际商品图片）
  function updateMainImage() {
    const product = getCurrentProduct();
    if (!product || !mediaPlaceholder) return;

    // 显示实际图片 - 撑满整个区域
    const imgSrc = imageState.images[imageState.currentIndex] || product.image;
    mediaPlaceholder.innerHTML = `<img src="${imgSrc}" alt="${product.name}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;">`;

    // 更新计数器
    if (previewCounter) {
      previewCounter.textContent = `${imageState.currentIndex + 1} / ${imageState.totalImages}`;
    }
  }

  // ═══════════════════════════════
  // 图片预览
  // ═══════════════════════════════
  function initPreviewModal() {
    function openPreview() {
      const product = getCurrentProduct();
      if (!product || !previewModal) return;
      
      previewModal.classList.add('active');
      
      // 显示实际图片 - 与farm-detail预览大小一致
      const previewImg = document.getElementById('previewImg');
      const imgSrc = imageState.images[imageState.currentIndex] || product.image;
      if (previewImg) {
        previewImg.innerHTML = `<img src="${imgSrc}" alt="${product.name}" style="max-width:90vw;max-height:80vh;width:auto;height:auto;object-fit:contain;display:block;border-radius:16px;box-shadow:0 8px 32px rgba(0,0,0,0.4);">`;
      }
      
      // 更新计数器
      if (previewCounter) {
        previewCounter.textContent = `${imageState.currentIndex + 1} / ${imageState.totalImages}`;
      }
    }

    function closePreview() {
      if (previewModal) {
        previewModal.classList.remove('active');
      }
    }

    function prevImage() {
      imageState.currentIndex = (imageState.currentIndex - 1 + imageState.totalImages) % imageState.totalImages;
      updatePreviewImage();
    }

    function nextImage() {
      imageState.currentIndex = (imageState.currentIndex + 1) % imageState.totalImages;
      updatePreviewImage();
    }

    function updatePreviewImage() {
      const previewImg = document.getElementById('previewImg');
      const product = getCurrentProduct();
      
      if (previewImg && product) {
        // 显示实际图片 - 与farm-detail预览大小一致
        const imgSrc = imageState.images[imageState.currentIndex] || product.image;
        previewImg.innerHTML = `<img src="${imgSrc}" alt="${product.name}" style="max-width:90vw;max-height:80vh;width:auto;height:auto;object-fit:contain;display:block;border-radius:16px;box-shadow:0 8px 32px rgba(0,0,0,0.4);">`;
      }
      
      if (previewCounter) {
        previewCounter.textContent = `${imageState.currentIndex + 1} / ${imageState.totalImages}`;
      }
    }

    // 绑定事件
    if (zoomBtn) {
      zoomBtn.addEventListener('click', openPreview);
    }
    if (previewClose) {
      previewClose.addEventListener('click', closePreview);
    }
    if (previewPrev) {
      previewPrev.addEventListener('click', prevImage);
    }
    if (previewNext) {
      previewNext.addEventListener('click', nextImage);
    }
    if (previewModal) {
      previewModal.addEventListener('click', (e) => {
        if (e.target === previewModal) {
          closePreview();
        }
      });
    }

    // 键盘导航
    document.addEventListener('keydown', (e) => {
      if (!previewModal || !previewModal.classList.contains('active')) return;

      if (e.key === 'Escape') {
        closePreview();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    });
  }

  // ═══════════════════════════════
  // 工具函数
  // ═══════════════════════════════
  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
  }

  function formatPrice(price) {
    return `¥${price.toFixed(1)}`;
  }

  function getDiscountPercent(price, original) {
    if (!original || original === 0) return 0;
    // 折扣 = (现价 / 原价) × 10，如 6.8/12×10 = 5.7折
    const discountVal = (price / original) * 10;
    return Math.round(discountVal * 10) / 10;
  }

  function getStagnantDays(startDate) {
    const start = new Date(startDate);
    const now = new Date();
    const diffTime = Math.abs(now - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  }

  function getAvatarColor(name) {
    const colors = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
    ];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  }

  // 渲染函数
  function renderProduct(product) {
    if (!product) return;

    const discount = getDiscountPercent(product.price, product.originalPrice);
    const stagnantDays = getStagnantDays(product.stagnantStart);
    const soldPercentVal = 100 - Math.round((product.stock / product.totalStock) * 100);

    // 面包屑
    breadcrumbName.textContent = product.name;

    // 商品基本信息
    productTitle.textContent = product.name;
    productRegion.textContent = product.region;
    farmerName.textContent = product.farmer.name;

    // 滞销时间 - 显示更详细的信息
    stagnantTime.textContent = product.stagnantStart;
    stagnantDuration.textContent = `已滞销 ${stagnantDays} 天`;

    // 存储方式 - 显示具体的建议
    storageMethod.textContent = product.storageMethod || '建议尽快食用';

    // 计算动态配送信息
    let dynamicDist = product.dist;
    let dynamicDeliveryDays = product.deliveryDays;
    let riskLevel = 'safe';

    if (userLocation && product.origin) {
      dynamicDist = Math.round(calculateDistance(
        userLocation.lat, userLocation.lng,
        product.origin.lat, product.origin.lng
      ));
      dynamicDeliveryDays = estimateDeliveryDays(product.storage_type, dynamicDist);
      riskLevel = checkFreshnessRisk(product, dynamicDeliveryDays);
    }

    // 风险标签 - 外地商品显示
    if (product.isRemote && riskTag) {
      riskTag.style.display = 'flex';
      if (riskLevel === 'danger') {
        riskTag.querySelector('span').textContent = `⚠️ 外地货品存在保质期风险，预计${dynamicDeliveryDays}天送达，可能坏果`;
        riskTag.className = 'risk-tag danger';
      } else if (riskLevel === 'warning') {
        riskTag.querySelector('span').textContent = `⚠️ 外地货品临近保质期，预计${dynamicDeliveryDays}天送达，建议尽快食用`;
        riskTag.className = 'risk-tag warning';
      } else {
        riskTag.querySelector('span').textContent = `外地货品存在农产品变质风险，预计${dynamicDeliveryDays}天送达`;
        riskTag.className = 'risk-tag';
      }
    } else if (riskTag) {
      riskTag.style.display = 'none';
    }

    // 顶部风险条
    if (product.isRemote && riskBanner) {
      riskBanner.style.display = 'flex';
      if (riskBannerText) {
        if (riskLevel === 'danger') {
          riskBannerText.textContent = `外地货品预计${dynamicDeliveryDays}天送达，保质期可能不足！`;
        } else if (riskLevel === 'warning') {
          riskBannerText.textContent = `外地货品预计${dynamicDeliveryDays}天送达，请尽快食用`;
        } else {
          riskBannerText.textContent = `外地货品预计${dynamicDeliveryDays}天送达，请尽快食用`;
        }
      }
    } else if (riskBanner) {
      riskBanner.style.display = 'none';
    }

    // 价格
    productPrice.textContent = product.price.toFixed(1);
    originalPrice.textContent = `¥${Number(product.originalPrice).toFixed(1)}/件`;
    priceDiscount.textContent = `${discount}折`;

    // 起批件数
    moqValue.textContent = product.moq;

    // 库存
    stockCount.textContent = product.stock;
    stockProgressFill.style.width = `${soldPercentVal}%`;
    soldPercent.textContent = soldPercentVal;
    totalStock.textContent = product.totalStock;

    // 商品详情表格
    let tableHTML = '';
    for (const [key, value] of Object.entries(product.specifications)) {
      tableHTML += `<tr><td>${key}</td><td>${value}</td></tr>`;
    }
    detailTable.innerHTML = tableHTML;

    // 店铺信息
    const avatarChar = product.farmer.name.charAt(0);
    shopDetailAvatar.innerHTML = avatarChar;
    shopDetailAvatar.style.background = getAvatarColor(product.farmer.name);
    shopDetailName.textContent = product.farmer.name;
    shopDetailScore.textContent = product.farmer.trustScore;
    shopDetailBadge.textContent = product.farmer.certified ? '已认证' : '待认证';
    shopProductCount.textContent = product.farmer.productCount;
    shopTotalSales.textContent = product.farmer.totalSales;
    shopFans.textContent = product.farmer.fans;

    // 进店逛逛按钮点击事件
    if (shopDetailBtn) {
      shopDetailBtn.addEventListener('click', () => {
        window.location.href = 'store.html?farmer=' + encodeURIComponent(product.farmer.name) + '&from=wholesale&id=' + encodeURIComponent(product.id);
      });
    }

    // 弹窗库存
    modalMoqValue.textContent = product.moq;
    modalStockFill.style.width = `${soldPercentVal}%`;
    modalStockText.textContent = `剩余 ${product.stock} 件`;

    // 弹窗风险提示 - 显示配送天数（使用动态计算）
    if (modalRiskHint) {
      if (product.isRemote) {
        let dynDist = product.dist || 0;
        let dynDeliveryDays = product.deliveryDays || 1;
        let riskLevel = 'safe';

        if (userLocation && product.origin) {
          dynDist = Math.round(calculateDistance(
            userLocation.lat, userLocation.lng,
            product.origin.lat, product.origin.lng
          ));
          dynDeliveryDays = estimateDeliveryDays(product.storage_type, dynDist);
          riskLevel = checkFreshnessRisk(product, dynDeliveryDays);
        }

        modalRiskHint.style.display = 'block';
        if (riskLevel === 'danger') {
          modalRiskHint.textContent = `⚠️ 保质期风险：配送${dynDeliveryDays}天，商品可能已变质！`;
        } else if (riskLevel === 'warning') {
          modalRiskHint.textContent = `⚠️ 外地货品预计${dynDeliveryDays}天送达，请尽快食用`;
        } else {
          modalRiskHint.textContent = `⚠️ 外地货品预计${dynDeliveryDays}天送达，请尽快食用`;
        }
      } else {
        modalRiskHint.style.display = 'none';
      }
    }

    // 根据商品类型设置不同的背景色
    updateProductBackground(product);
  }

  // 根据商品类型更新背景色（统一使用绿色渐变，与farm-detail保持一致）
  function updateProductBackground(product) {
    if (!product || !mediaPlaceholder) return;

    // 统一使用绿色渐变背景
    const bg = `linear-gradient(135deg, #4A7A38 0%, #2A5A18 100%)`;
    mediaPlaceholder.style.background = bg;
  }

  // 渲染商品主图
  function renderProductImage(product) {
    if (!product || !mediaPlaceholder) return;
    
    // 显示实际图片 - 撑满整个区域
    const imgSrc = product.image || '';
    mediaPlaceholder.innerHTML = `<img src="${imgSrc}" alt="${product.name}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;">`;
  }

  // 渲染售后保障
  function renderGuarantee(product) {
    if (!product || !guaranteeSection) return;

    const cat = product.category || '';
    const name = product.name || '';

    // 判断是否是水果蔬菜或肉蛋奶水产
    let isFruitVeg = cat.includes('水果') || cat.includes('蔬菜') || name.includes('果') || name.includes('菜');
    let isMeatFish = cat.includes('肉') || cat.includes('蛋') || cat.includes('奶') || cat.includes('水产') || name.includes('鱼') || name.includes('虾') || name.includes('蟹') || name.includes('肉') || name.includes('蛋');

    let guaranteeHTML = '';
    if (isFruitVeg) {
      guaranteeHTML = `
        <div class="guarantee-label">售后保障</div>
        <div class="guarantee-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          <span>到货24h内坏果包赔 · 按比例退款</span>
        </div>
        <div class="guarantee-note">请保留凭证联系客服处理</div>
      `;
    } else if (isMeatFish) {
      guaranteeHTML = `
        <div class="guarantee-label">售后保障</div>
        <div class="guarantee-item warning">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" stroke-width="2">
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          <span>水产生鲜特殊处理，不支持无理由退货</span>
        </div>
      `;
    } else {
      // 其他产品（大豆等）
      guaranteeHTML = `
        <div class="guarantee-label">售后保障</div>
        <div class="guarantee-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
          <span>到货24h内坏果包赔 · 按比例退款</span>
        </div>
        <div class="guarantee-note">请保留凭证联系客服处理</div>
      `;
    }

    guaranteeSection.innerHTML = guaranteeHTML;
  }

  // 渲染物流预估 (普通文字)
  function renderDelivery(product) {
    if (!product || !deliverySection) return;

    let dist = product.dist || 0;
    let deliveryDays = product.deliveryDays || 1;

    // 如果有用户定位，使用真实距离计算
    if (userLocation && product.origin) {
      dist = Math.round(calculateDistance(
        userLocation.lat, userLocation.lng,
        product.origin.lat, product.origin.lng
      ));
      deliveryDays = estimateDeliveryDays(product.storage_type, dist);
    }

    let deliveryText = '';
    if (dist <= 50) {
      deliveryText = `距您 ${dist}km · 预计明天送达`;
    } else if (dist <= 150) {
      deliveryText = `距您 ${dist}km · 预计${deliveryDays}-${deliveryDays+1}天送达`;
    } else {
      deliveryText = `距您 ${dist}km · 预计${deliveryDays}-${deliveryDays+1}天送达`;
    }

    deliverySection.innerHTML = `
      <span class="delivery-text">${deliveryText}</span>
    `;
  }

  function renderReviews() {
    const product = getCurrentProduct();
    const productReviews = product && product.reviews ? product.reviews : [];

    if (productReviews.length === 0) {
      reviewList.innerHTML = '<div class="review-empty">暂无评价</div>';
      return;
    }

    // 生成半星或全星的HTML
    function generateStars(rating) {
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating - fullStars >= 0.5;
      let starsHTML = '';
      
      // 添加满星
      for (let i = 0; i < fullStars; i++) {
        starsHTML += '<span class="star filled">★</span>';
      }
      // 添加半星
      if (hasHalfStar) {
        starsHTML += '<span class="star half">★</span>';
      }
      // 添加空星
      const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
      for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<span class="star empty">★</span>';
      }
      return starsHTML;
    }

    // 计算单条评价的综合评分
    function calcReviewAvg(review) {
      if (review.qualityRating !== undefined && review.packageRating !== undefined && review.deliveryRating !== undefined) {
        return ((review.qualityRating + review.packageRating + review.deliveryRating) / 3);
      }
      return review.rating || 5;
    }

    const listHTML = productReviews.map(review => {
      const avgRating = calcReviewAvg(review);
      const avgRatingStr = avgRating.toFixed(1);
      
      // 分别显示质量、包装、物流评分
      let detailScores = '';
      if (review.qualityRating !== undefined) {
        detailScores = `<div class="review-detail-scores">
          <span class="detail-score">质量 ${review.qualityRating}</span>
          <span class="detail-score">包装 ${review.packageRating}</span>
          <span class="detail-score">物流 ${review.deliveryRating}</span>
        </div>`;
      }
      
      return `
      <div class="review-item">
        <div class="review-header">
          <div class="review-avatar">${review.name.charAt(0)}</div>
          <div class="review-user">
            <div class="review-name">${review.name}</div>
            <div class="review-date">${review.date}</div>
          </div>
          <div class="review-stars">
            ${generateStars(avgRating)}
            <span class="review-avg-score">${avgRatingStr}</span>
          </div>
        </div>
        <div class="review-body">${review.content}</div>
        ${detailScores}
      </div>
    `}).join('');
    reviewList.innerHTML = listHTML;

    // 计算商品整体评分 - 从所有评价中综合计算
    if (productReviews.length > 0 && avgScore) {
      let totalQuality = 0, totalPackage = 0, totalDelivery = 0;
      let validCount = 0;
      
      productReviews.forEach(r => {
        if (r.qualityRating !== undefined) {
          // 累加各维度评分
          totalQuality += r.qualityRating;
          totalPackage += r.packageRating;
          totalDelivery += r.deliveryRating;
          validCount++;
        }
      });
      
      let overallAvg, qualityAvg, packageAvg, deliveryAvg;
      
      if (validCount > 0) {
        // 各维度评分：直接取该维度的平均
        qualityAvg = (totalQuality / validCount).toFixed(1);
        packageAvg = (totalPackage / validCount).toFixed(1);
        deliveryAvg = (totalDelivery / validCount).toFixed(1);
        
        // 综合评分 = (质量平均 + 包装平均 + 物流平均) / 3
        overallAvg = ((parseFloat(qualityAvg) + parseFloat(packageAvg) + parseFloat(deliveryAvg)) / 3).toFixed(1);
      } else {
        // 兼容旧的单一评分格式
        const totalRating = productReviews.reduce((sum, r) => sum + (r.rating || 5), 0);
        overallAvg = (totalRating / productReviews.length).toFixed(1);
        qualityAvg = packageAvg = deliveryAvg = overallAvg;
      }
      
      avgScore.textContent = overallAvg;
      if (qualityScore) qualityScore.textContent = qualityAvg;
      if (packageScore) packageScore.textContent = packageAvg;
      if (deliveryScore) deliveryScore.textContent = deliveryAvg;

      // 动态生成星星显示
      if (avgStars) avgStars.innerHTML = generateStars(parseFloat(overallAvg));
      if (qualityStars) qualityStars.innerHTML = generateStars(parseFloat(qualityAvg));
      if (packageStars) packageStars.innerHTML = generateStars(parseFloat(packageAvg));
      if (deliveryStars) deliveryStars.innerHTML = generateStars(parseFloat(deliveryAvg));

      // 更新进度条宽度
      const qualityDimBar = document.querySelector('#qualityScore')?.closest('.score-dim')?.querySelector('.dim-bar span');
      const packageDimBar = document.querySelector('#packageScore')?.closest('.score-dim')?.querySelector('.dim-bar span');
      const deliveryDimBar = document.querySelector('#deliveryScore')?.closest('.score-dim')?.querySelector('.dim-bar span');
      if (qualityDimBar) qualityDimBar.style.width = (parseFloat(qualityAvg) * 20) + '%';
      if (packageDimBar) packageDimBar.style.width = (parseFloat(packageAvg) * 20) + '%';
      if (deliveryDimBar) deliveryDimBar.style.width = (parseFloat(deliveryAvg) * 20) + '%';
    }
  }

  // 存放说明 - 根据产品类别显示对应的存放方法
  function renderStorageInfo() {
    const product = getCurrentProduct();
    if (!product) return;

    const storageInfoCard = document.getElementById('storageInfoCard');
    if (!storageInfoCard) return;

    // 根据产品类别或名称显示对应的存放说明
    let storageContent = '';
    const cat = product.category || '';
    const name = product.name || '';

    // 判断产品类型 - 根据中文类别名或产品名判断
    let storageType = 'fruit'; // 默认
    if (cat.includes('蔬菜') || name.includes('菜') || name.includes('蔬')) {
      storageType = 'vegetable';
    } else if (cat.includes('肉') || name.includes('鸡') || name.includes('鸭') || name.includes('鹅') || name.includes('羊肉') || name.includes('牛肉')) {
      storageType = 'meat';
    } else if (cat.includes('蛋') || name.includes('蛋')) {
      storageType = 'egg';
    } else if (cat.includes('水产') || name.includes('鱼') || name.includes('虾') || name.includes('蟹') || name.includes('海鲜')) {
      storageType = 'fish';
    } else if (cat.includes('粮油') || name.includes('米') || name.includes('油') || name.includes('大豆') || name.includes('面粉')) {
      storageType = 'grain';
    }

    const storageTexts = {
      'fruit': {
        title: '水果类',
        content: '请及时分拣，剔除受损果实。耐储品种置于阴凉通风处保存；娇嫩鲜果需冷藏，避免常温久放导致腐烂变质。'
      },
      'vegetable': {
        title: '蔬菜类',
        content: '叶菜、菌菇类请及时冷藏；根茎瓜果类可阴凉存放。批量堆放需通风散热，防止闷捂发黄、腐烂。'
      },
      'meat': {
        title: '肉类',
        content: '鲜品建议尽快冷冻储存，短期使用可冷藏。避免常温放置与反复解冻，防止肉质变质、发黏、产生异味。'
      },
      'egg': {
        title: '蛋类',
        content: '置于阴凉干燥或冷藏环境，避免高温、潮湿与剧烈晃动。按先进先出周转，防止散黄、变质。'
      },
      'fish': {
        title: '水产类',
        content: '冰鲜及冷冻水产收货后立即冷冻，不可常温久放。解冻后不宜再次冷冻，以免肉质变差、腐坏发臭。'
      },
      'grain': {
        title: '粮油类',
        content: '存放于干燥通风、防潮避光处，密封保存。防止受潮结块、生虫、霉变及油脂氧化变质。'
      }
    };

    const storage = storageTexts[storageType] || storageTexts['fruit'];
    storageContent = `
      <div class="storage-section">
        <div class="storage-title">${storage.title}</div>
        <p class="storage-text">${storage.content}</p>
      </div>
    `;
    storageInfoCard.innerHTML = storageContent;
  }

  // ═══════════════════════════════
  // 渲染店铺认证
  // ═══════════════════════════════
  function renderShopCertifications() {
    const product = getCurrentProduct();
    if (!product) return;

    const shopCertifications = document.getElementById('shopCertifications');
    if (!shopCertifications) return;

    // 根据农户信息生成认证标签
    const farmer = product.farmer;
    const certifications = [];

    if (farmer.certified) {
      certifications.push({
        icon: '[OK]',
        text: '认证农户'
      });
    }

    if (farmer.trustScore >= 4.5) {
      certifications.push({
        icon: '[Star]',
        text: '信誉商家'
      });
    }

    if (farmer.totalSales >= 5000) {
      certifications.push({
        icon: '[Sale]',
        text: '销量担当'
      });
    }

    if (farmer.fans >= 500) {
      certifications.push({
        icon: '[Heart]',
        text: '粉丝信赖'
      });
    }

    const certHTML = certifications.map(cert => `
      <span class="shop-cert-tag">
        <span>${cert.icon}</span>
        <span>${cert.text}</span>
      </span>
    `).join('');

    shopCertifications.innerHTML = certHTML;
  }

  function updateModalTotal() {
    const product = getCurrentProduct();
    if (!product) return;

    const qty = parseInt(qtyInput.value) || 1;
    const total = product.price * qty;
    modalTotalPrice.textContent = `¥${total.toFixed(1)}`;
  }

  function getCurrentProduct() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id') || 'ws001';
    return wholesaleProducts[id];
  }

  // ═══════════════════════════════
  // 弹窗功能
  // ═══════════════════════════════
  function openPurchaseModal(isCart = false) {
    isCartMode = isCart;
    // 检查是否登录
    if (!window.AuthAPI?.isLoggedIn()) {
      showToast('请先登录');
      setTimeout(() => window.location.href = 'profile.html', 1000);
      return;
    }
    // 检查收货地址
    (async () => {
      try {
        const addrData = await window.UserAPI.getAddress();
        if (!addrData.receiver_name || !addrData.receiver_phone || !addrData.receiver_address) {
          showToast('请先到"我的-账户设置"填写完整收货地址');
          setTimeout(() => window.location.href = 'http://localhost:3001/profile.html#section-settings', 5000);
          return;
        }
      } catch (e) {
        const saved = localStorage.getItem('receiverInfo');
        if (saved) {
          try {
            const info = JSON.parse(saved);
            if (!info.name || !info.phone || !info.address) {
              showToast('请先到"我的-账户设置"填写完整收货地址');
              setTimeout(() => window.location.href = 'http://localhost:3001/profile.html#section-settings', 5000);
              return;
            }
          } catch (e2) {
            showToast('请先到"我的-账户设置"填写完整收货地址');
            setTimeout(() => window.location.href = 'http://localhost:3001/profile.html#section-settings', 5000);
            return;
          }
        } else {
          showToast('请先到"我的-账户设置"填写完整收货地址');
          setTimeout(() => window.location.href = 'http://localhost:3001/profile.html#section-settings', 5000);
          return;
        }
      }
      const product = getCurrentProduct();
      if (!product) return;

      // 设置商品图片 - 撑满整个区域
      if (modalImg) {
        const product = getCurrentProduct();
        const imgSrc = product.image || '';
        modalImg.innerHTML = `<img src="${imgSrc}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;display:block;">`;
      }

      modalTitle.textContent = product.name;
      modalPrice.textContent = formatPrice(product.price);
      qtyInput.value = product.moq;
      updateModalTotal();

      // 控制弹窗顶部风险提示显示（使用动态配送计算）
      const modalTopHint = document.getElementById('modalTopHint');
      const modalTopHintText = document.getElementById('modalTopHintText');

      if (product.isRemote) {
        // 外地商品显示风险提示
        let dynDeliveryDays = product.deliveryDays || 1;
        let riskLevel = 'safe';

        if (userLocation && product.origin) {
          dynDeliveryDays = estimateDeliveryDays(product.storage_type,
            Math.round(calculateDistance(userLocation.lat, userLocation.lng, product.origin.lat, product.origin.lng))
          );
          riskLevel = checkFreshnessRisk(product, dynDeliveryDays);
        }

        if (modalTopHint) {
          modalTopHint.style.display = 'flex';
          if (modalTopHintText) {
            if (riskLevel === 'danger') {
              modalTopHintText.textContent = `⚠️ 保质期不足：配送${dynDeliveryDays}天，商品可能已变质！`;
            } else if (riskLevel === 'warning') {
              modalTopHintText.textContent = `⚠️ 外地滞留货，预计${dynDeliveryDays}天送达，请尽快食用`;
            } else {
              modalTopHintText.textContent = `⚠️ 外地滞留货，预计${dynDeliveryDays}天送达，请尽快食用`;
            }
          }
        }
      } else {
        // 本地商品隐藏提示
        if (modalTopHint) {
          modalTopHint.style.display = 'none';
        }
      }

      purchaseModal.classList.add('active');

      // 根据模式显示不同按钮文字
      if (modalSubmit) {
        modalSubmit.textContent = isCartMode ? '加入待付款' : '确认购买';
      }

      // 加载保存的收货地址
      loadSavedAddress();
    })();
  }

  // 加载收货地址
  async function loadSavedAddress() {
    if (!window.AuthAPI?.isLoggedIn()) return;

    try {
      const data = await window.UserAPI.getAddress();
      modalReceiverName.value = data.receiver_name || '';
      modalReceiverPhone.value = data.receiver_phone || '';
      modalReceiverAddress.value = data.receiver_address || '';
    } catch (e) {
      // 如果获取失败，尝试从本地存储加载
      const saved = localStorage.getItem('receiverInfo');
      if (saved) {
        try {
          const info = JSON.parse(saved);
          modalReceiverName.value = info.name || '';
          modalReceiverPhone.value = info.phone || '';
          modalReceiverAddress.value = info.address || '';
        } catch (e2) {}
      }
    }
  }

  // 保存收货地址
  function saveReceiverInfo(name, phone, address) {
    localStorage.setItem('receiverInfo', JSON.stringify({
      name: name,
      phone: phone,
      address: address
    }));
    // 同时保存到服务器
    window.UserAPI?.updateAddress(name, phone, address);
  }

  function closePurchaseModal() {
    purchaseModal.classList.remove('active');
  }

  function showRiskModal() {
    if (riskModal) {
      riskModal.classList.add('active');
    }
  }

  function hideRiskModal() {
    if (riskModal) {
      riskModal.classList.remove('active');
    }
  }

  // ═══════════════════════════════
  // 购物车弹窗功能
  // ═══════════════════════════════
  function updateCartModalTotal() {
    const product = getCurrentProduct();
    if (!product || !cartQtyInput || !cartModalTotalPrice) return;

    const qty = parseInt(cartQtyInput.value) || 1;
    const total = product.price * qty;
    cartModalTotalPrice.textContent = `¥${total.toFixed(1)}`;
  }

  function openCartModal() {
    const product = getCurrentProduct();
    if (!product) return;

    // 设置商品信息
    if (cartModalTitle) cartModalTitle.textContent = product.name;
    if (cartModalPrice) cartModalPrice.textContent = formatPrice(product.price);
    if (cartQtyInput) cartQtyInput.value = product.moq;
    if (cartModalMoqValue) cartModalMoqValue.textContent = product.moq;

    // 设置库存信息
    const soldPercentVal = 100 - Math.round((product.stock / product.totalStock) * 100);
    if (cartModalStockFill) cartModalStockFill.style.width = `${soldPercentVal}%`;
    if (cartModalStockText) cartModalStockText.textContent = `剩余 ${product.stock} 件`;

    // 设置商品图片 - 撑满整个区域
    if (cartModalImg) {
      const product = getCurrentProduct();
      const imgSrc = product.image || '';
      cartModalImg.innerHTML = `<img src="${imgSrc}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;display:block;">`;
    }

    updateCartModalTotal();
    cartModal.classList.add('active');
  }

  function closeCartModal() {
    if (cartModal) {
      cartModal.classList.remove('active');
    }
  }

  function initCartModalQuantity() {
    const product = getCurrentProduct();
    if (!product || !cartQtyMinus || !cartQtyPlus || !cartQtyInput) return;

    cartQtyMinus.addEventListener('click', () => {
      const current = parseInt(cartQtyInput.value);
      if (current > product.moq) {
        cartQtyInput.value = current - 1;
        updateCartModalTotal();
      }
    });

    cartQtyPlus.addEventListener('click', () => {
      const current = parseInt(cartQtyInput.value);
      if (current < product.stock) {
        cartQtyInput.value = current + 1;
        updateCartModalTotal();
      }
    });

    cartQtyInput.addEventListener('input', updateCartModalTotal);
  }

  // ═══════════════════════════════
  // Tab 切换
  // ═══════════════════════════════
  function initTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetTab = tab.dataset.tab;

        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        document.getElementById(`tab-${targetTab}`).classList.add('active');
      });
    });
  }

  // ═══════════════════════════════
  // 数量控制
  // ═══════════════════════════════
  function initQuantityControl() {
    const product = getCurrentProduct();
    if (!product) return;

    qtyMinus.addEventListener('click', () => {
      const current = parseInt(qtyInput.value);
      if (current > product.moq) {
        qtyInput.value = current - 1;
        updateModalTotal();
      }
    });

    qtyPlus.addEventListener('click', () => {
      const current = parseInt(qtyInput.value);
      if (current < product.stock) {
        qtyInput.value = current + 1;
        updateModalTotal();
      }
    });

    qtyInput.addEventListener('input', updateModalTotal);
  }

  // 检查并设置初始收藏状态
  async function checkFavoriteStatus() {
    if (!window.AuthAPI?.isLoggedIn()) return;
    try {
      const { favorited } = await window.FavoriteAPI.check(product.id);
      favoriteBtn.style.color = favorited ? '#E85A5A' : 'rgba(44,44,42,0.4)';
    } catch (e) {}
  }

  // ═══════════════════════════════
  // 初始化
  // ═══════════════════════════════
  function init() {
    // 从 localStorage 恢复用户定位
    const savedLocation = localStorage.getItem('userLocation');
    if (savedLocation) {
      try {
        userLocation = JSON.parse(savedLocation);
      } catch (e) {
        // ignore
      }
    }

    const product = getCurrentProduct();
    
    if (product) {
      renderProduct(product);
      renderProductImage(product);
      renderReviews();
      renderStorageInfo();
      renderGuarantee(product);
      renderDelivery(product);
      renderShopCertifications();
      initQuantityControl();
      initTabs();
      initThumbnails();
      initPreviewModal();

      // 检查并设置初始收藏状态
      checkFavoriteStatus();

      // 绑定购买按钮
      addCartBtn.addEventListener('click', () => openPurchaseModal(true));

      buyNowBtn.addEventListener('click', () => openPurchaseModal(false));

      favoriteBtn.addEventListener('click', async () => {
        if (!window.AuthAPI?.isLoggedIn()) {
          showToast('请先登录');
          return;
        }
        try {
          const result = await window.FavoriteAPI.toggle(product.id);
          favoriteBtn.style.color = result.favorited ? '#E85A5A' : 'rgba(44,44,42,0.4)';
          showToast(result.favorited ? '已收藏' : '取消收藏');
          // 更新 profile 页面的收藏数
          localStorage.setItem('favoriteCountUpdate', JSON.stringify({ delta: result.favorited ? 1 : -1, time: Date.now() }));
        } catch (e) {
          showToast('操作失败');
        }
      });

      // 购物车弹窗事件
      if (cartModalOverlay) {
        cartModalOverlay.addEventListener('click', closeCartModal);
      }
      if (cartModalClose) {
        cartModalClose.addEventListener('click', closeCartModal);
      }
      if (cartModalBtnAdd) {
        cartModalBtnAdd.addEventListener('click', async () => {
          // 检查是否登录
          if (!window.AuthAPI?.isLoggedIn()) {
            showToast('请先登录');
            setTimeout(() => window.location.href = 'profile.html', 1000);
            return;
          }
          // 检查收货地址
          try {
            const addrData = await window.UserAPI.getAddress();
            if (!addrData.receiver_name || !addrData.receiver_phone || !addrData.receiver_address) {
              showToast('请先到"我的-账户设置"填写完整收货地址');
              setTimeout(() => window.location.href = 'http://localhost:3001/profile.html#section-settings', 5000);
              return;
            }
          } catch (e) {
            const saved = localStorage.getItem('receiverInfo');
            if (saved) {
              try {
                const info = JSON.parse(saved);
                if (!info.name || !info.phone || !info.address) {
                  showToast('请先到"我的-账户设置"填写完整收货地址');
                  setTimeout(() => window.location.href = 'http://localhost:3001/profile.html#section-settings', 5000);
                  return;
                }
              } catch (e2) {
                showToast('请先到"我的-账户设置"填写完整收货地址');
                setTimeout(() => window.location.href = 'http://localhost:3001/profile.html#section-settings', 5000);
                return;
              }
            } else {
              showToast('请先到"我的-账户设置"填写完整收货地址');
              setTimeout(() => window.location.href = 'http://localhost:3001/profile.html#section-settings', 5000);
              return;
            }
          }
          const qty = parseInt(cartQtyInput.value) || 1;
          const product = getCurrentProduct();
          const quantity = qty;
          const receiverName = modalReceiverName?.value?.trim() || '';
          const receiverPhone = modalReceiverPhone?.value?.trim() || '';
          const receiverAddress = modalReceiverAddress?.value?.trim() || '';

          // 添加到待付款（创建订单）
          try {
            await window.OrderAPI.create({
              product_id: product.id,
              quantity: quantity,
              receiver_name: receiverName,
              receiver_phone: receiverPhone,
              receiver_address: receiverAddress
            });
            showToast(`已加入待付款 ${qty} 件`);
          } catch (err) {
            showToast('添加失败：' + err.message);
          }
          closeCartModal();
        });
      }

      // 初始化购物车弹窗数量控制
      initCartModalQuantity();

      // 弹窗事件
      if (modalOverlay) modalOverlay.addEventListener('click', closePurchaseModal);
      if (modalClose) modalClose.addEventListener('click', closePurchaseModal);
      if (modalSubmit) {
        modalSubmit.addEventListener('click', async () => {
          const receiverName = modalReceiverName.value.trim();
          const receiverPhone = modalReceiverPhone.value.trim();
          const receiverAddress = modalReceiverAddress.value.trim();

          if (!receiverName || !receiverPhone || !receiverAddress) {
            showToast('请填写完整的收货信息');
            return;
          }

          // 检查是否登录
          if (!window.AuthAPI?.isLoggedIn()) {
            showToast('请先登录');
            setTimeout(() => window.location.href = 'profile.html', 1000);
            return;
          }

          const product = getCurrentProduct();
          const quantity = parseInt(qtyInput.value) || 1;

          // 保存收货信息用于待付款结算
          saveReceiverInfo(receiverName, receiverPhone, receiverAddress);

          if (isCartMode) {
            // 加入待付款（创建订单）
            try {
              await window.OrderAPI.create({
                product_id: product.id,
                quantity: quantity,
                receiver_name: receiverName,
                receiver_phone: receiverPhone,
                receiver_address: receiverAddress
              });
              closePurchaseModal();
              showToast('已加入待付款');
            } catch (err) {
              showToast('添加失败：' + err.message);
            }
          } else {
            // 直接购买
            closePurchaseModal();
            showToast('支付功能正在开发中');
          }
        });
      }

      // 风险提示弹窗
      if (riskModalOverlay) {
        riskModalOverlay.addEventListener('click', hideRiskModal);
      }
      if (riskModalBtn) {
        riskModalBtn.addEventListener('click', hideRiskModal);
      }
    }

    // 滚动浮现动画 - 添加错误处理
    try {
      if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // 详情内容区
        gsap.from('.detail-content', {
          scrollTrigger: {
            trigger: '.detail-content',
            start: 'top 80%',
            toggleActions: 'play none none play'
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out'
        });

        // 店铺详情板块
        gsap.from('.shop-detail-section', {
          scrollTrigger: {
            trigger: '.shop-detail-section',
            start: 'top 85%',
            toggleActions: 'play none none play'
          },
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: 'power2.out'
        });

        // 用户评价列表项
        gsap.utils.toArray('.review-item').forEach((item, i) => {
          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
              toggleActions: 'play none none play'
            },
            y: 20,
            opacity: 0,
            duration: 0.5,
            delay: i * 0.1,
            ease: 'power2.out'
          });
        });
      }
    } catch(e) {
    }
  }

  // 页面加载完成后初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // 错误处理 - 调试用
  window.onerror = function(msg, url, lineNo, columnNo, error) {
    return false;
  };

})();