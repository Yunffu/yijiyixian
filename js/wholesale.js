    gsap.registerPlugin(ScrollTrigger);

    /* ══════════════════════════════
       数据
       上线后替换为 fetch('/api/wholesale/products')
    ══════════════════════════════ */
    const mockProducts = [
      { id: 'ws001', name: '云南高原苹果', cat: 'fruit', dist: 32, stale: 3, discount: 43, minQty: 10, price: 6.8, original: 12, storage: '冷库保存，建议5日内提货', location: '云南·昆明', origin: { lat: 25.04, lng: 102.71 }, image: '素材/滞销/苹果2.jpg' },
      { id: 'ws002', name: '山东大棚番茄', cat: 'vegetable', dist: 8, stale: 2, discount: 35, minQty: 10, price: 2.6, original: 4, storage: '常温保存，需尽快运输', location: '山东·寿光', origin: { lat: 36.85, lng: 118.79 }, image: '素材/滞销/番茄1.jpg' },
      { id: 'ws003', name: '内蒙古草原羊肉', cat: 'meat', dist: 120, stale: 1, discount: 28, minQty: 10, price: 32, original: 45, storage: '冷链运输，-18℃冷冻保存', location: '内蒙古·锡盟', origin: { lat: 43.93, lng: 116.03 }, image: '素材/滞销/羊1.jpg' },
      { id: 'ws004', name: '舟山带鱼', cat: 'fish', dist: 45, stale: 4, discount: 52, minQty: 10, price: 14, original: 28, storage: '冰鲜运输，冷水保存', location: '浙江·舟山', origin: { lat: 29.99, lng: 122.21 }, image: '素材/滞销/带鱼2.jpg' },
      { id: 'ws005', name: '东北优质大豆', cat: 'other', dist: 280, stale: 7, discount: 38, minQty: 10, price: 3.8, original: 6.2, storage: '干燥通风，避免受潮', location: '黑龙江·哈尔滨', origin: { lat: 45.80, lng: 126.53 }, image: '素材/滞销/大豆1.jpg' },
      { id: 'ws006', name: '四川耙耙柑', cat: 'fruit', dist: 18, stale: 5, discount: 45, minQty: 10, price: 3.2, original: 5.8, storage: '常温保存，避光通风', location: '四川·成都', origin: { lat: 30.57, lng: 104.07 }, image: '素材/滞销/耙耙柑1.jpg' },
      { id: 'ws007', name: '河北鸡蛋批发', cat: 'meat', dist: 55, stale: 2, discount: 25, minQty: 60, price: 5.5, original: 7.3, storage: '阴凉保存，15℃以下', location: '河北·邯郸', origin: { lat: 36.61, lng: 114.54 }, image: '素材/滞销/鸡蛋2.jpg' },
      { id: 'ws008', name: '江苏大闸蟹', cat: 'fish', dist: 95, stale: 2, discount: 40, minQty: 10, price: 28, original: 46, storage: '鲜活运输，充氧包装', location: '江苏·苏州', origin: { lat: 31.30, lng: 120.59 }, image: '素材/滞销/螃蟹1.jpg' },
    ];

    let currentCat = 'all';
    let currentSort = 'distance';
    let selectedProduct = null;

    // ══════════════════════════════
    // 地理计算工具
    // ══════════════════════════════
    function calculateDistance(lat1, lng1, lat2, lng2) {
      const R = 6371;
      const dLat = (lat2 - lat1) * Math.PI / 180;
      const dLng = (lng2 - lng1) * Math.PI / 180;
      const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
                Math.sin(dLng/2) * Math.sin(dLng/2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      return R * c;
    }

    // 获取商品的真实距离（如果有用户定位）
    function getProductDistance(product) {
      const savedLocation = localStorage.getItem('userLocation');
      if (savedLocation && product.origin) {
        try {
          const userLoc = JSON.parse(savedLocation);
          return Math.round(calculateDistance(userLoc.lat, userLoc.lng, product.origin.lat, product.origin.lng));
        } catch (e) {
          return product.dist;
        }
      }
      return product.dist;
    }

    /* ══════════════════════════════
       渲染
    ══════════════════════════════ */
    function getFiltered() {
      let list = currentCat === 'all' ? mockProducts : mockProducts.filter(p => p.cat === currentCat);
      if (currentSort === 'distance') {
        list.sort((a, b) => getProductDistance(a) - getProductDistance(b));
      }
      else if (currentSort === 'discount') list.sort((a, b) => b.discount - a.discount);
      else if (currentSort === 'newest') list.sort((a, b) => a.stale - b.stale);
      return list;
    }

    function renderProducts() {
      const grid = document.getElementById('prodGrid');
      grid.innerHTML = '';
      const list = getFiltered();
      document.getElementById('totalCount').textContent = list.length;
      list.forEach((p, i) => {
        const card = document.createElement('div');
        card.className = 'prod-card';
        card.dataset.cat = p.cat;
        // 使用真实距离计算
        const realDist = getProductDistance(p);
        // 外地商品风险标签（基于真实距离）
        const riskBadge = realDist > 60 ? '<span class="badge-risk">⚠️ 外地货源 · 变质风险中</span>' : '';
        const shelfTip = '';
        // 构建图片 HTML
        const imgHtml = p.image 
          ? `<img src="${p.image}" alt="${p.name}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" />`
          : `<span>${p.location} ${p.name}</span>`;
        
        card.innerHTML = `
          <div class="prod-img-wrap">
            <div class="prod-img-placeholder">${imgHtml}</div>
            <div class="prod-badges">
              <span class="badge-urgent">已滞留 ${p.stale} 天</span>
              <span class="badge-discount">低 ${p.discount}%</span>
              <span class="badge-dist">📍 距您 ${realDist}km</span>
              ${riskBadge}
            </div>
          </div>
          <div class="prod-card-body">
            <h3 class="prod-name">${p.name}</h3>
            <div class="prod-meta">
              <span class="prod-meta-item">📍 ${p.location}</span>
              <span class="prod-meta-dist">🚗 距您 ${realDist}km</span>
            </div>
            <div class="prod-stale">⚠️ 已滞留 ${p.stale} 天</div>
            <p class="prod-storage">${p.storage}</p>
            ${shelfTip}
            <div class="prod-price-row">
              <span class="prod-price-original">¥${p.original}/斤</span>
              <span class="prod-price">¥${p.price} <small>/${p.id === 'ws007' ? '枚' : '斤'}</small></span>
            </div>
            <p class="prod-min">起批：${p.minQty}${p.id === 'ws007' ? '枚' : '斤'}</p>
            <button class="prod-add-btn" onclick="event.stopPropagation();viewDetail('${p.id}')">查看详情</button>
          </div>`;
        card.addEventListener('click', () => {
          // 点击卡片跳转到详情页
          window.location.href = 'whole-sale-detail.html?id=' + p.id;
        });
        card.querySelector('.prod-add-btn').addEventListener('click', function(e) {
          e.stopPropagation();
          // 跳转到详情页
          window.location.href = 'whole-sale-detail.html?id=' + p.id;
        });
        grid.appendChild(card);
        gsap.to(card, {
          opacity: 1, y: 0, duration: 0.45, ease: 'power2.out', delay: i * 0.07,
          scrollTrigger: { trigger: card, start: 'top 92%', once: true }
        });
      });
    }

    /* ══════════════════════════════
       筛选 & 排序
    ══════════════════════════════ */
    document.getElementById('prodFilters').addEventListener('click', e => {
      if (!e.target.classList.contains('prod-filter')) return;
      document.querySelectorAll('.prod-filter').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      currentCat = e.target.dataset.cat;
      renderProducts();
    });

    document.getElementById('sortSelect').addEventListener('change', e => {
      currentSort = e.target.value;
      renderProducts();
    });

    /* ══════════════════════════════
       弹窗
    ══════════════════════════════ */
    function viewDetail(id) {
      window.location.href = 'whole-sale-detail.html?id=' + id;
    }

    function hideModal() { document.getElementById('modal').classList.remove('show'); }

    function doOrder() {
      hideModal();
      showToast('下单成功！');
    }

    function showRiskModal(p) {
      selectedProduct = p;
      document.getElementById('riskModal').classList.add('show');
    }

    function hideRiskModal() { document.getElementById('riskModal').classList.remove('show'); }

    function checkNearby(position) {
      hideRiskModal();
      document.getElementById('locationBar').classList.remove('warn');
      document.getElementById('locationBar').classList.add('ok');

      // 保存用户位置到 localStorage
      if (position) {
        localStorage.setItem('userLocation', JSON.stringify({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }));
        document.getElementById('locationText').textContent = '📍 定位成功，已切换至周边货源';
      } else {
        document.getElementById('locationText').textContent = '📍 当前展示您附近 50km 内的滞留物货源';
      }

      document.querySelector('.location-btn').style.display = 'none';
      showToast('已切换至周边货源');

      // 触发页面重新渲染（如果需要按距离筛选）
      if (typeof renderProducts === 'function') {
        renderProducts();
      }
    }

    /* ══════════════════════════════
       定位
    ══════════════════════════════ */
    function enableLocation() {
      if (!navigator.geolocation) {
        showToast('您的浏览器不支持定位功能');
        return;
      }

      showToast('正在获取定位...');

      navigator.geolocation.getCurrentPosition(
        (position) => {
          checkNearby(position);
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
          // 定位失败时也切换状态
          checkNearby(null);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 60000
        }
      );
    }

    // 页面加载时检查是否有已保存的定位
    function initLocationFromStorage() {
      const saved = localStorage.getItem('userLocation');
      if (saved) {
        try {
          const location = JSON.parse(saved);
          // 恢复定位状态
          document.getElementById('locationBar').classList.remove('warn');
          document.getElementById('locationBar').classList.add('ok');
          document.getElementById('locationText').textContent = '📍 已恢复上次的定位信息';
          document.querySelector('.location-btn').style.display = 'none';
        } catch (e) {
          // ignore
        }
      }
    }

    /* ══════════════════════════════
       搜索
    ══════════════════════════════ */
    document.getElementById('searchInput').addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        const q = e.target.value.trim();
        if (q) window.location.href = `products.html#q=${encodeURIComponent(q)}`;
      }
    });

    /* ══════════════════════════════
       Toast
    ══════════════════════════════ */
    function showToast(msg) {
      const toast = document.getElementById('toast');
      toast.textContent = msg;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2000);
    }

    /* ══════════════════════════════
       Hero 动效
    ══════════════════════════════ */
    window.addEventListener('load', () => {
      // 恢复已保存的定位状态
      initLocationFromStorage();

      const tl = gsap.timeline({ delay: 0.2 });
      tl.to('.hero-label', { opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power2.out' })
        .to('.hero-title',  { opacity: 1, filter: 'blur(0px)', duration: 0.8, ease: 'power2.out' }, '-=0.2')
        .to('.hero-sub',    { opacity: 1, filter: 'blur(0px)', duration: 0.5, ease: 'power2.out' }, '-=0.3');

      gsap.to('.hero-scroll-hint', { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', delay: 1.5 });
      gsap.to('.prod-title', {
        opacity: 1, filter: 'blur(0px)', duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: '.prod-header', start: 'top 85%', once: true }
      });
      setTimeout(() => ScrollTrigger.refresh(), 200);
    });

    /* ══════════════════════════════
       搜索框
    ══════════════════════════════ */
    var searchInputWholesale = document.getElementById('searchInput');
    searchInputWholesale.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        var q = this.value.trim();
        if (q) {
          window.location.href = 'products.html#q=' + encodeURIComponent(q);
        }
      }
    });
    document.getElementById('searchBtn').addEventListener('click', function() {
      var q = searchInputWholesale.value.trim();
      if (q) {
        window.location.href = 'products.html#q=' + encodeURIComponent(q);
      }
    });

    /* ══════════════════════════════
       初始化
    ══════════════════════════════ */
    renderProducts();
