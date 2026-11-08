/**
 * 认养农场详情页 JavaScript
 * 一季一鲜 · Farm Adopt Detail
 */

(function() {
  'use strict';

  // ═══════════════════════════════
  // 所有产品数据（使用公共数据）
  // ═══════════════════════════════
  const allProducts = window.FarmAdoptData.projects;

  // ═══════════════════════════════
// 自动数据生成和存储系统
// ═══════════════════════════════

// 各产品的生长阶段标题和内容（用于随机生成日志）- 同一阶段多个不同内容
// 暴露到 window，供 GrowthLogAPI 统一调用
window.productGrowthStages = {
  'fa001': { // 烟台红富士苹果
    stages: [
      { title: '休眠期', contents: [
        '果树进入休眠期，进行冬季修剪和清园工作。为来年的丰收做好准备。',
        '天气寒冷，果树休眠中。果农正在进行清园工作，清除病虫害越冬场所。',
        '休眠期果树停止生长，养分回流到根系储存。'
      ]},
      { title: '萌芽期', contents: [
        '花芽开始萌动，树液开始流动。果农正在进行萌芽前的准备工作。',
        '气温回升，花芽膨大。果农加强水肥管理，促进萌芽。',
        '芽点明显膨大，即将进入花蕾期。'
      ]},
      { title: '花蕾期', contents: [
        '花蕾逐渐膨大饱满，颜色由深转浅。近期将进行花前肥追施。',
        '花蕾发育良好，预计一周后进入初花期。',
        '花蕾饱满圆润，授粉准备工作进行中。'
      ]},
      { title: '初花期', contents: [
        '部分花朵已经绽放，白色花瓣层层展开。估计再有3-5天进入盛花期。',
        '盛花期即将到来，蜜蜂已经准备好授粉。',
        '花开的越来越多，香气四溢。'
      ]},
      { title: '盛花期', contents: [
        '苹果花进入盛花期，漫山遍野白茫茫一片。蜜蜂在花间飞舞授粉。',
        '盛花期正值高峰，授粉成功率最高。',
        '漫山遍野的花海，蜜蜂穿梭忙碌。'
      ]},
      { title: '人工授粉', contents: [
        '正在进行人工授粉工作，提高坐果率。细心对待每一朵花。',
        '人工授粉进行中，预计明天完成。',
        '天气晴朗，非常适合授粉工作。'
      ]},
      { title: '授粉完成', contents: [
        '历时一周的人工授粉工作圆满完成，授粉成功率高达92%。',
        '授粉工作完成，坐果率比往年高出10%。',
        '人工+蜜蜂双重授粉，效果非常好。'
      ]},
      { title: '坐果期', contents: [
        '苹果进入坐果期，幼果开始形成。现在进行蔬果工作。',
        '幼果已经有黄豆大小，坐果稳定。',
        '坐果良好，开始蔬果工作。'
      ]},
      { title: '疏果进行中', contents: [
        '每棵树保留30-40个果实，确保养分供应充足。',
        '蔬果进行中，优选果形端正的果实。',
        '蔬果工作完成，果实分布均匀。'
      ]},
      { title: '幼果膨大', contents: [
        '幼果开始膨大，颜色逐渐转绿。果实发育良好。',
        '果实明显长大，果肉开始形成。',
        '膨大期需要充足养分，加强施肥。'
      ]},
      { title: '套袋完成', contents: [
        '果实套袋完成，保护果实免受病虫害和日灼。',
        '套袋工作完成，果实表皮更光滑。',
        '果袋可以防虫防病，果实品质更好。'
      ]}
    ]
  },
  'fa002': { // 赣南脐橙
    stages: [
      { title: '休眠期', contents: [
        '果树进入休眠期，积累养分。冬季修剪正在进行中。',
        '休眠期管理很重要，影响明年产量。',
        '果农正在修剪枝条，培养树形。'
      ]},
      { title: '萌芽期', contents: [
        '春芽开始萌动，结果母枝逐渐形成。',
        '芽眼饱满，萌发整齐。',
        '春稍生长旺盛，需要补充营养。'
      ]},
      { title: '现蕾期', contents: [
        '花蕾开始形成，需要补充营养促进花蕾发育。',
        '花蕾数量适中，坐果率有保障。',
        '现蕾整齐，花芽分化良好。'
      ]},
      { title: '花蕾膨大', contents: [
        '花蕾已经发育饱满，颜色转为淡黄色。',
        '花蕾日益膨大，预计一周后开花。',
        '花蕾转色良好，生机盎然。'
      ]},
      { title: '初花期', contents: [
        '脐橙花陆续开放，白色花瓣点缀枝头。',
        '初花开放，蜜蜂开始授粉。',
        '花开初期，花量适中。'
      ]},
      { title: '盛花期', contents: [
        '脐橙进入盛花期，满山弥漫着橙花香。',
        '盛花期到来，香气浓郁。',
        '蜜蜂忙碌授粉，花海一片。'
      ]},
      { title: '盛花末期', contents: [
        '盛花期已接近尾声，花朵开始脱落，幼果开始形成。',
        '幼果初现，当前是保果关键期。',
        '花瓣开始脱落，果实开始形成。'
      ]},
      { title: '第一次生理落果', contents: [
        '开始出现第一次生理落果，这是正常的自我调节现象。',
        '落果是自然现象，保留优质果实。',
        '落果后留下的果实品质更好。'
      ]},
      { title: '幼果形成', contents: [
        '幼果已经形成，现在进入管理关键期。',
        '果实已经坐稳，进入膨大期。',
        '幼果生长良好，转绿中。'
      ]},
      { title: '幼果膨大', contents: [
        '幼果开始膨大，需要充足养分供应。',
        '果实明显长大，颜色转绿。',
        '膨大期水肥需求增加。'
      ]},
      { title: '定果完成', contents: [
        '每株树保留50-60个幼果，保证果实品质。',
        '定果完成，果实分布均匀。',
        '果实品质得到保证。'
      ]}
    ]
  },
  'fa003': { // 阳山水蜜桃
    stages: [
      { title: '休眠期', contents: [
        '桃树进入休眠期，进行冬季修剪。',
        '休眠期修剪，培养树形。',
        '果农正在清园工作。'
      ]},
      { title: '萌芽期', contents: [
        '春芽开始萌动，花芽膨大。',
        '芽点萌发，长势良好。',
        '萌芽整齐，生长健壮。'
      ]},
      { title: '花蕾期', contents: [
        '花蕾膨大饱满，桃花含苞待放。',
        '花蕾日益饱满，即将开放。',
        '花蕾转色，花开在即。'
      ]},
      { title: '初花期', contents: [
        '桃花初绽，粉红的花蕾挂满枝头。',
        '初花绽放，粉红一片。',
        '桃花开了，美丽极了。'
      ]},
      { title: '盛花期', contents: [
        '阳山水蜜桃进入盛花期，粉红花朵宛如云霞。',
        '盛花期高峰，游客众多。',
        '桃花盛开，如霞似锦。'
      ]},
      { title: '盛花末期', contents: [
        '盛花期进入尾声，部分花瓣开始脱落。',
        '花瓣开始飘落，幼果形成。',
        '盛花期结束，果实开始形成。'
      ]},
      { title: '坐果成功', contents: [
        '桃花凋落后，幼果开始形成，坐果率比往年高出15%。',
        '坐果率高，丰收有望。',
        '幼果形成，长势良好。'
      ]},
      { title: '疏果完成', contents: [
        '历时三天的疏果工作顺利完成，每棵树保留40-50个果实。',
        '蔬果完成，果实分布合理。',
        '挑选最优果实留下。'
      ]},
      { title: '幼果膨大', contents: [
        '桃子已经坐果成功，果实已有拇指大小。',
        '果实膨大中，长势良好。',
        '桃子长大，果毛浓密。'
      ]},
      { title: '果实成长期', contents: [
        '桃子进入快速膨大期，需要加强水肥管理。',
        '膨大期需要充足养分。',
        '桃子进入生长的关键期。'
      ]}
    ]
  },
  'fa004': { // 五常有机大米
    stages: [
      { title: '育苗准备', contents: [
        '开始准备育苗工作，整理苗床，施足底肥。',
        '苗床整理完成，准备播种。',
        '有机肥已施入，苗床准备就绪。'
      ]},
      { title: '浸种催芽', contents: [
        '稻种浸种催芽中，保障发芽率。',
        '浸种完成，准备催芽。',
        '种子已经吸饱水分。'
      ]},
      { title: '播种完成', contents: [
        '秧盘播种完成，保持苗床湿度。',
        '播种均匀，出苗整齐。',
        '播种完成，及时浇水。'
      ]},
      { title: '出苗期', contents: [
        '秧苗陆续出苗，长势良好。',
        '出苗整齐，秧苗健壮。',
        '苗齐苗壮，长势喜人。'
      ]},
      { title: '炼苗进行中', contents: [
        '进行揭膜炼苗，增强秧苗抗逆性。',
        '炼苗完成，秧苗更健壮。',
        '揭膜炼苗，增强抗性。'
      ]},
      { title: '秧苗出圃', contents: [
        '秧苗已达到出圃标准，根系发达。',
        '秧苗粗壮，可以移栽。',
        '苗高苗壮，出圃标准。'
      ]},
      { title: '适时插秧', contents: [
        '开始机械插秧，秧龄25天，苗高15厘米。',
        '插秧进行中，效率很高。',
        '机械作业，省时省力。'
      ]},
      { title: '返青期', contents: [
        '插秧后秧苗已经返青，叶片由黄转绿。',
        '返青成活，长势良好。',
        '秧苗已经扎根生长。'
      ]},
      { title: '分蘖期', contents: [
        '水稻进入分蘖盛期，每株已有8-10个分蘖。',
        '分蘖旺盛，有效穗增多。',
        '分蘖期需要充足水肥。'
      ]},
      { title: '拔节期', contents: [
        '水稻进入拔节期，茎秆开始伸长。',
        '茎秆粗壮，生长旺盛。',
        '拔节期是管理的关键。'
      ]},
      { title: '孕穗期', contents: [
        '稻穗开始孕酿，穗部逐渐形成。',
        '穗子形成中，长势良好。',
        '孕穗期需要保护。'
      ]},
      { title: '抽穗期', contents: [
        '水稻陆续抽穗，稻花飘香。',
        '抽穗整齐，丰收在望。',
        '稻花飘香，穗粒饱满。'
      ]}
    ]
  },
  'fa005': { // 西湖龙井茶
    stages: [
      { title: '休眠期', contents: [
        '茶树进入休眠期，积累营养。',
        '冬天的茶树在休息。',
        '茶园管理进行中。'
      ]},
      { title: '萌芽前期', contents: [
        '茶芽开始萌动，即将进入采摘期。',
        '茶芽膨大，采摘在即。',
        '茶芽萌发，长势良好。'
      ]},
      { title: '明前开采', contents: [
        '明前龙井正式开采，第一批茶芽品质极佳。',
        '头采茶，数量稀少。',
        '开采第一天，阳光明媚。'
      ]},
      { title: '开采第二天', contents: [
        '正式开采第二天，天气晴好，非常适合采摘。',
        '茶芽饱满，质量上乘。',
        '采摘量增加，品质优良。'
      ]},
      { title: '采摘高峰', contents: [
        '采摘进入高峰期，精选一芽一叶初展。',
        '茶农忙碌，采摘正当时。',
        '高峰期茶芽品质最佳。'
      ]},
      { title: '杀青进行中', contents: [
        '茶叶进入杀青阶段，高温瞬间钝化酶活性。',
        '杀青是关键工序。',
        '杀青温度控制得当。'
      ]},
      { title: '炒制进行中', contents: [
        '手工炒制中，需要经验和技巧。',
        '炒制手法炉火纯青。',
        '茶叶在锅中翻飞。'
      ]},
      { title: '炒制完成', contents: [
        '明前龙井炒制完成，色泽嫩绿微黄。',
        '炒制完成，豆香浓郁。',
        '干茶色泽嫩绿。'
      ]},
      { title: '筛选完成', contents: [
        '茶叶筛选完成，品质分级。',
        '手工筛选，去除杂质。',
        '分级完成，品质保证。'
      ]},
      { title: '包装发货', contents: [
        '包装完成，准备发货。',
        '真空包装，保持新鲜。',
        '发货前最后检查。'
      ]}
    ]
  },
  'fa006': { // 阿克苏冰糖心苹果
    stages: [
      { title: '休眠期', contents: [
        '果树休眠期，进行修剪工作。',
        '休眠期管理，积蓄养分。',
        '冬季修剪，培养树形。'
      ]},
      { title: '萌芽期', contents: [
        '春芽开始萌动，生命力旺盛。',
        '芽点萌发，长势良好。',
        '春芽萌动，生长开始。'
      ]},
      { title: '展叶期', contents: [
        '新叶展开，生机盎然。',
        '叶片展开，翠绿欲滴。',
        '叶子越长越大。'
      ]},
      { title: '萌芽展叶', contents: [
        '果树萌芽展叶，长势喜人。',
        '新叶嫩绿，充满生机。',
        '展叶期生长旺盛。'
      ]},
      { title: '花蕾期', contents: [
        '花蕾逐渐形成，需要精心管理。',
        '花蕾形成，养分需求增加。',
        '花蕾发育良好。'
      ]},
      { title: '花蕾绽放', contents: [
        '花蕾开始绽放，部分花朵已经展开。',
        '花朵绽放，洁白如雪。',
        '花开进行中，授粉准备。'
      ]},
      { title: '初花期', contents: [
        '苹果进入初花期，天山雪水灌溉。',
        '雪水灌溉，品质独特。',
        '初花开放，蜜蜂准备。'
      ]},
      { title: '盛花期', contents: [
        '进入盛花期，蜜蜂授粉繁忙。',
        '盛花期高峰，花海一片。',
        '蜜蜂忙碌，授粉成功。'
      ]},
      { title: '授粉完成', contents: [
        '人工授粉完成，坐果率良好。',
        '授粉成功率高。',
        '授粉完成，坐果稳定。'
      ]},
      { title: '坐果期', contents: [
        '苹果坐果，幼果开始形成。',
        '幼果形成，长势良好。',
        '坐果稳定，进入膨大期。'
      ]},
      { title: '幼果膨大', contents: [
        '幼果开始膨大，糖分积累中。',
        '果实膨大，日照充足。',
        '糖分积累中，甜度高。'
      ]}
    ]
  }
};

// 生成指定范围内的随机日期
function generateRandomDates(startDate, endDate, minCount, maxCount) {
  const dates = [];
  const start = new Date(startDate);
  const end = new Date(endDate);
  const totalDays = Math.floor((end - start) / (1000 * 60 * 60 * 24)) + 1;
  
  // 计算周数
  const totalWeeks = Math.ceil(totalDays / 7);
  
  // 确保每周至少有minCount条日志
  for (let week = 0; week < totalWeeks; week++) {
    const weekLogCount = minCount + Math.floor(Math.random() * (maxCount - minCount + 1));
    
    // 计算这周的日期范围
    const weekStart = new Date(start);
    weekStart.setDate(weekStart.getDate() + week * 7);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);
    
    // 确保不超出范围
    const effectiveStart = weekStart < start ? start : weekStart;
    const effectiveEnd = weekEnd > end ? end : weekEnd;
    
    // 如果有效范围内没有日期，跳过
    if (effectiveStart > effectiveEnd) continue;
    
    // 在本周内随机选择weekLogCount个日期
    const daysInWeek = Math.floor((effectiveEnd - effectiveStart) / (1000 * 60 * 60 * 24)) + 1;
    const dayIndices = [];
    for (let i = 0; i < daysInWeek; i++) {
      dayIndices.push(i);
    }
    
    // 随机打乱并选择
    for (let i = dayIndices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [dayIndices[i], dayIndices[j]] = [dayIndices[j], dayIndices[i]];
    }
    
    const selectedDays = dayIndices.slice(0, Math.min(weekLogCount, daysInWeek));
    for (const dayOffset of selectedDays) {
      const logDate = new Date(effectiveStart);
      logDate.setDate(logDate.getDate() + dayOffset);
      dates.push(logDate);
    }
  }
  
  // 按日期排序
  dates.sort((a, b) => a - b);
  
  return dates;
}

// 生成指定产品的生长日志数据
function generateGrowthLogs(productId, startDate, endDate) {
  const stages = productGrowthStages[productId]?.stages || productGrowthStages['fa001'].stages;
  const dates = generateRandomDates(startDate, endDate, 2, 3);
  
  const logs = [];
  let stageIndex = 0;
  const today = new Date();
  today.setHours(23, 59, 59, 999); // 设置为今天的最后一刻
  
  for (const date of dates) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dateStr = `${year}-${month}-${day}`;
    
    // 选择合适的阶段
    const monthProgress = (month - 3) / 9; // 3月到12月
    stageIndex = Math.floor(monthProgress * stages.length);
    stageIndex = Math.min(stageIndex, stages.length - 1);
    
    // 随机选择一个内容变体
    const stageContent = stages[stageIndex].contents[Math.floor(Math.random() * stages[stageIndex].contents.length)];
    
    logs.push({
      date: dateStr,
      title: stages[stageIndex].title,
      content: stageContent,
      hasNew: false, // 初始全部设为已读
      images: []
    });
  }
  
  // 按日期排序（从早到晚）
  logs.sort((a, b) => new Date(a.date) - new Date(b.date));
  
  // 只将最新的1-2条日志设为未读（已过滤未来日期后的最后几条）
  if (logs.length > 0) {
    const unreadCount = Math.min(Math.floor(Math.random() * 2) + 1, logs.length); // 1-2条
    for (let i = logs.length - unreadCount; i < logs.length; i++) {
      if (logs[i]) logs[i].hasNew = true;
    }
  }
  
  return logs;
}

// 生成所有产品的全年日志数据
function generateAllProductLogs() {
  const startDate = '2026-03-01';
  const endDate = '2026-12-31';
  const productIds = ['fa001', 'fa002', 'fa003', 'fa004', 'fa005', 'fa006'];
  
  const allLogs = {};
  
  for (const productId of productIds) {
    allLogs[productId] = generateGrowthLogs(productId, startDate, endDate);
  }
  
  return allLogs;
}

// 保存日志数据到localStorage
function saveLogsToStorage(logs) {
  try {
    localStorage.setItem('farmGrowthLogs', JSON.stringify(logs));
    localStorage.setItem('farmGrowthLogsTimestamp', Date.now().toString());
  } catch (e) {
  }
}

// 从localStorage加载日志数据
function loadLogsFromStorage() {
  try {
    const data = localStorage.getItem('farmGrowthLogs');
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
  }
  return null;
}

// 检查并初始化日志数据
// 当前数据版本（更改此版本号可强制刷新所有日志数据）
const DATA_VERSION = '20260410';

function initLogsData() {
  let logs = loadLogsFromStorage();
  const savedVersion = localStorage.getItem('farmGrowthLogsVersion');

  // 如果版本不匹配或数据不存在，从公共数据初始化
  if (!logs || savedVersion !== DATA_VERSION) {
    logs = {};
    // 从公共数据加载所有产品的生长日志
    const publicProjects = window.FarmAdoptData.projects;
    if (publicProjects) {
      publicProjects.forEach(project => {
        if (project.growthLogs) {
          // 深拷贝并重置hasNew标记（默认最新2条为未读）
          const copiedLogs = project.growthLogs.map((log, idx, arr) => ({
            ...log,
            hasNew: idx >= arr.length - 2
          }));
          logs[project.id] = copiedLogs;
        }
      });
    }
    saveLogsToStorage(logs);
    localStorage.setItem('farmGrowthLogsVersion', DATA_VERSION);
  }

  return logs;
}

// 更新指定产品的日志数据（补充当周数据）
function supplementLogsData(productId) {
  const logs = loadLogsFromStorage() || {};
  let productLogs = logs[productId] || [];

  // 获取公共数据的日志作为基准
  const unifiedProduct = window.FarmAdoptData.getProjectById(productId);
  const publicLogs = unifiedProduct && unifiedProduct.growthLogs ? unifiedProduct.growthLogs : [];

  // 如果localStorage中没有日志，或者数据与公共数据不匹配，使用公共数据的生长日志
  if (productLogs.length === 0 || publicLogs.length === 0) {
    if (publicLogs.length > 0) {
      productLogs = [...publicLogs];
      logs[productId] = productLogs;
      saveLogsToStorage(logs);
    }
    return logs;
  }

  // 合并逻辑：将公共数据的日志与本地日志合并，避免重复
  // 使用 Map 优先保留本地日志的 hasNew 状态
  const mergedLogsMap = new Map();
  publicLogs.forEach(log => {
    mergedLogsMap.set(log.date, { ...log }); // 浅拷贝
  });
  productLogs.forEach(log => {
    if (mergedLogsMap.has(log.date)) {
      // 已存在，保留本地日志的 hasNew 状态
      const existing = mergedLogsMap.get(log.date);
      existing.hasNew = log.hasNew;
    } else {
      mergedLogsMap.set(log.date, { ...log });
    }
  });
  let mergedLogs = Array.from(mergedLogsMap.values());
  mergedLogs.sort((a, b) => new Date(a.date) - new Date(b.date));

  logs[productId] = mergedLogs;
  saveLogsToStorage(logs);

  return logs;
}

  // ═══════════════════════════════
  // 获取URL中的产品ID
  // ═══════════════════════════════
  function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id') || 'fa001'; // 默认显示第一个产品
  }

  // ═══════════════════════════════
  // 获取产品数据（使用公共数据）
  // ═══════════════════════════════
  function getProductData(id) {
    return window.FarmAdoptData.getProjectById(id);
  }

  // ═══════════════════════════════
  // DOM 元素
  // ═══════════════════════════════
  const elements = {
    breadcrumbName: document.getElementById('breadcrumbName'),
    productTitle: document.getElementById('productTitle'),
    productRegion: document.getElementById('productRegion'),
    farmerName: document.getElementById('farmerName'),
    productPrice: document.getElementById('productPrice'),
    priceUnit: document.getElementById('priceUnit'),
    originalPrice: document.getElementById('originalPrice'),
    harvestTime: document.getElementById('harvestTime'),
    harvestCountdown: document.getElementById('harvestCountdown'),
    stockCount: document.getElementById('stockCount'),
    stockUnit: document.getElementById('stockUnit'),
    totalStockUnit: document.getElementById('totalStockUnit'),
    stockProgressFill: document.getElementById('stockProgressFill'),
    soldPercent: document.getElementById('soldPercent'),
    totalStock: document.getElementById('totalStock'),
    mainTag: document.getElementById('mainTag'),
    specOptions: document.getElementById('specOptions'),
    addCartBtn: document.getElementById('addCartBtn'),
    buyNowBtn: document.getElementById('buyNowBtn'),
    favoriteBtn: document.getElementById('favoriteBtn'),
    detailTabs: document.querySelectorAll('.tab-btn'),
    tabContents: document.querySelectorAll('.tab-content'),
    growthTimeline: document.getElementById('growthTimeline'),
    lastUpdate: document.getElementById('lastUpdate'),
    detailTable: document.getElementById('detailTable'),
    avgScore: document.getElementById('avgScore'),
    qualityScore: document.getElementById('qualityScore'),
    serviceScore: document.getElementById('serviceScore'),
    deliveryScore: document.getElementById('deliveryScore'),
    reviewList: document.getElementById('reviewList'),
    purchaseModal: document.getElementById('purchaseModal'),
    modalOverlay: document.getElementById('modalOverlay'),
    modalClose: document.getElementById('modalClose'),
    modalTitle: document.getElementById('modalTitle'),
    modalPrice: document.getElementById('modalPrice'),
    modalSpecOptions: document.getElementById('modalSpecOptions'),
    modalStockFill: document.getElementById('modalStockFill'),
    modalStockText: document.getElementById('modalStockText'),
    modalTotalPrice: document.getElementById('modalTotalPrice'),
    qtyInput: document.getElementById('qtyInput'),
    qtyMinus: document.getElementById('qtyMinus'),
    qtyPlus: document.getElementById('qtyPlus'),
    modalSubmit: document.getElementById('modalSubmit'),
    modalReceiverName: document.getElementById('modalReceiverName'),
    modalReceiverPhone: document.getElementById('modalReceiverPhone'),
    modalReceiverAddress: document.getElementById('modalReceiverAddress'),
    previewModal: document.getElementById('previewModal'),
    previewClose: document.getElementById('previewClose'),
    previewPrev: document.getElementById('previewPrev'),
    previewNext: document.getElementById('previewNext'),
    previewImg: document.getElementById('previewImg'),
    previewCounter: document.getElementById('previewCounter'),
    zoomBtn: document.getElementById('zoomBtn'),
    mediaThumbs: document.getElementById('mediaThumbs'),
    toast: document.getElementById('toast'),
    // 店铺详情板块
    shopDetailAvatar: document.getElementById('detailShopAvatar'),
    shopDetailName: document.getElementById('detailShopName'),
    shopDetailScore: document.getElementById('detailShopScore'),
    shopDetailBadge: document.getElementById('detailShopBadge'),
    shopDetailBtn: document.getElementById('detailShopBtn'),
    shopProductCount: document.getElementById('detailShopProductCount'),
    shopTotalSales: document.getElementById('detailShopTotalSales'),
    shopFans: document.getElementById('detailShopFans'),
    shopCertifications: document.getElementById('detailShopCertifications')
  };

  let state = {
    selectedSpec: 2,
    quantity: 1,
    currentImage: 0,
    totalImages: 4,
    currentProduct: null,
    calendarOffset: 0,
    isCartMode: false,
    logsPage: 1,        // 当前日志页码
    logsPerPage: 5,      // 每页显示的日志数量
    unreadInitialized: false // 是否已初始化未读状态
  };

  // ═══════════════════════════════
  // 生长日志排期和补全逻辑
  // ═══════════════════════════════

  // 格式化日期为 YYYY-MM-DD
  function formatDateStr(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // 解析日期字符串
  function parseDateStr(dateStr) {
    const [year, month, day] = dateStr.split('-').map(Number);
    return new Date(year, month - 1, day);
  }

  // 获取某日期所在周的开始日期（周一）
  function getWeekStart(date) {
    const d = new Date(date);
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(d.setDate(diff));
  }

  // 计算两个日期之间的天数
  function daysBetween(startStr, endStr) {
    const start = parseDateStr(startStr);
    const end = parseDateStr(endStr);
    const diffTime = end - start;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  }

  // 生成随机更新排期表（每周≥2次，随机不固定）
  // startDate: 开始日期，weeks: 周数，minUpdatesPerWeek: 每周最少更新次数
  function generateRandomSchedule(startDate, weeks, minUpdatesPerWeek = 2) {
    const schedule = [];
    const start = new Date(startDate);

    for (let w = 0; w < weeks; w++) {
      // 每周生成minUpdatesPerWeek到3次更新（增加随机性）
      const updatesThisWeek = minUpdatesPerWeek + Math.floor(Math.random() * 2); // 2-3次
      const usedDays = new Set();

      // 每周随机选择2-3个不同的日期
      for (let u = 0; u < updatesThisWeek; u++) {
        let randomDay;
        let attempts = 0;
        do {
          randomDay = Math.floor(Math.random() * 7);
          attempts++;
        } while (usedDays.has(randomDay) && attempts < 10);

        usedDays.add(randomDay);

        // 计算实际日期：startDate + w周 + randomDay天
        const updateDate = new Date(start);
        updateDate.setDate(updateDate.getDate() + w * 7 + randomDay);

        // 只添加在开始日期之后的日期
        if (updateDate >= start) {
          const dateStr = formatDateStr(updateDate);
          if (!schedule.includes(dateStr)) {
            schedule.push(dateStr);
          }
        }
      }
    }

    return schedule.sort(); // 按日期排序
  }

  // 补全生长日志：根据排期表确保每周≥2次更新
  // 注意：此功能已简化，不再自动补全内容，以避免覆盖已有的真实数据
  function fillMissingLogs(product) {
    if (!product.growthLogs || product.growthLogs.length === 0) return '未知';

    const now = new Date();
    now.setHours(23, 59, 59, 999);
    const todayStr = formatDateStr(now);

    // 获取日志并按日期倒序排列（最新的在前）
    const sortedLogs = [...product.growthLogs].sort((a, b) => new Date(b.date) - new Date(a.date));

    // 过滤出今天及之前的日志（只显示今天及之前的）
    const visibleLogs = sortedLogs.filter(log => new Date(log.date) <= now);

    // 获取最新的可见日志日期
    const lastLogDate = visibleLogs[0]?.date;
    if (!lastLogDate) return '未知';

    // 计算天数差
    const daysSinceUpdate = daysBetween(lastLogDate, todayStr);
    if (daysSinceUpdate === 0) {
      return '今天';
    } else if (daysSinceUpdate === 1) {
      return '昨天';
    } else {
      return `${daysSinceUpdate}天前`;
    }
  }

  // 检查并自动生成新日志（根据每周≥2次的规则：约3-4天应有一次更新）
  // 如果距离上次更新超过3天，自动生成一条新日志
  // 委托给 GrowthLogAPI 统一处理
  function checkAndGenerateNewLog(productId) {
    if (window.GrowthLogAPI) {
      window.GrowthLogAPI.checkAndSync(productId);
    }
  }

  // ═══════════════════════════════
  // 工具函数
  // ═══════════════════════════════
  function showToast(message) {
    elements.toast.textContent = message;
    elements.toast.classList.add('show');
    setTimeout(() => elements.toast.classList.remove('show'), 2500);
  }

  function formatPrice(price) {
    return `¥${price}`;
  }

  function getStockPercent(stock, total) {
    return Math.round((stock / total) * 100);
  }

  function getMonthName(month) {
    const names = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    return names[month - 1];
  }

  // 生成星星HTML (score: 0-5)
  function generateStars(score) {
    const fullStars = Math.floor(score);
    const hasHalf = score % 1 >= 0.5;
    let html = '';
    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        html += '<span class="star filled">★</span>';
      } else if (i === fullStars && hasHalf) {
        html += '<span class="star half">★</span>';
      } else {
        html += '<span class="star empty">★</span>';
      }
    }
    return html;
  }

  // 生成进度条百分比
  function generateProgressBar(score) {
    return Math.round(score / 5 * 100);
  }

  function parseDate(dateStr) {
    const [year, month, day] = dateStr.split('-').map(Number);
    return { year, month, day };
  }

  function getDaysSince(dateStr) {
    const date = new Date(dateStr);
    const now = new Date();
    const diffTime = now - date;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  }

  // 获取产品日志中最早和最晚的年月，用于日历显示范围
  function getLogDateRange(logs) {
    if (!logs || logs.length === 0) return null;
    
    let minDate = null;
    let maxDate = null;
    
    logs.forEach(log => {
      const date = parseDate(log.date);
      const dateObj = new Date(date.year, date.month - 1, date.day);
      if (!minDate || dateObj < minDate) minDate = dateObj;
      if (!maxDate || dateObj > maxDate) maxDate = dateObj;
    });
    
    return {
      minDate: { year: minDate.getFullYear(), month: minDate.getMonth() + 1 },
      maxDate: { year: maxDate.getFullYear(), month: maxDate.getMonth() + 1 }
    };
  }

  // 计算日历需要显示的月份范围（根据当前月份，显示当前月及前后一个月）
  function getCalendarDisplayMonths(logs) {
    const months = [];
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;
    
    // 显示前一个月、当前月、后一个月
    let prevMonth = currentMonth - 1;
    let prevYear = currentYear;
    if (prevMonth < 1) { prevMonth = 12; prevYear--; }
    
    let nextMonth = currentMonth + 1;
    let nextYear = currentYear;
    if (nextMonth > 12) { nextMonth = 1; nextYear++; }
    
    // 按顺序添加月份
    months.push({ year: prevYear, month: prevMonth });
    months.push({ year: currentYear, month: currentMonth });
    months.push({ year: nextYear, month: nextMonth });
    
    return months;
  }

  // ═══════════════════════════════
  // 渲染函数
  // ═══════════════════════════════
  function renderProductInfo() {
    const p = state.currentProduct;

    // 获取默认选中的规格（recommended 为默认）
    const defaultSpec = p.specs.find(s => s.recommended) || p.specs[0];
    const defaultPrice = defaultSpec ? defaultSpec.price : p.price;
    // 原价按现价的 1.3 倍计算（仅作展示）
    const originalSpecPrice = Math.round(defaultPrice * 1.3);

    elements.breadcrumbName.textContent = p.name;
    elements.productTitle.textContent = p.name;
    elements.productRegion.textContent = p.location;
    elements.farmerName.textContent = p.farmer.name;
    // productPrice 只显示数字，HTML 中的 .price-symbol 会显示 ¥
    elements.productPrice.textContent = defaultPrice;
    // originalPrice 显示完整带 ¥ 的格式（划线价）
    elements.originalPrice.textContent = `¥${originalSpecPrice}`;
    elements.harvestTime.textContent = p.harvestTime;
    elements.harvestCountdown.textContent = `距收成约 ${p.harvestDays} 天`;

    const soldPercent = 100 - getStockPercent(p.stock, p.totalStock);
    elements.stockCount.textContent = p.stock;
    elements.stockProgressFill.style.width = `${soldPercent}%`;
    elements.soldPercent.textContent = soldPercent;
    elements.totalStock.textContent = p.totalStock;
    
    if (p.tags && p.tags.length > 0) {
      elements.mainTag.textContent = p.tags[0];
      elements.mainTag.style.display = 'inline-block';
    } else {
      elements.mainTag.style.display = 'none';
    }

    // 渲染产品主图
    function renderProductMedia() {
      const p = state.currentProduct;
      const placeholder = document.getElementById('mediaPlaceholder');
      if (!placeholder || !p.image) return;
      
      const img = document.createElement('img');
      img.src = p.image;
      img.alt = p.name;
      img.className = 'media-img';
      img.onerror = function() { 
        placeholder.innerHTML = '<span>商品主图</span>';
      };
      
      placeholder.innerHTML = '';
      placeholder.appendChild(img);
    }

    // 根据产品类型设置价格单位和库存单位
    const unitMap = {
      'fruit': { price: '/ 棵/年', stock: '棵' },
      'field': { price: '/ 亩/年', stock: '亩' },
      'ranch': { price: '/ 头/年', stock: '头' }
    };
    const unit = unitMap[p.type] || { price: '/ 棵/年', stock: '棵' };
    elements.priceUnit.textContent = unit.price;
    elements.stockUnit.textContent = unit.stock;
    elements.totalStockUnit.textContent = unit.stock;
  }

  // 渲染底部店铺详情板块
  function renderShopDetail() {
    const p = state.currentProduct;
    const farmer = p.farmer;
    
    // 设置头像 - 使用绿色背景保持风格一致
    elements.shopDetailAvatar.style.background = 'var(--c-green)';
    elements.shopDetailAvatar.innerHTML = `<span>${farmer.name.charAt(0)}</span>`;
    
    // 设置店铺名称和评分
    elements.shopDetailName.textContent = farmer.name;
    elements.shopDetailScore.textContent = farmer.trustScore;
    elements.shopDetailBadge.textContent = farmer.certified ? '已认证' : '待认证';
    
    // 设置统计数据 - 基于产品ID生成模拟数据
    const productCount = 3 + (parseInt(p.id.charAt(2)) % 5); // 3-7个在售商品
    const totalSales = 1000 + (parseInt(p.id.charAt(2)) * 500); // 1500-4000总销量
    const fans = 500 + (parseInt(p.id.charAt(2)) * 200); // 700-1700粉丝
    
    elements.shopProductCount.textContent = productCount;
    elements.shopTotalSales.textContent = totalSales;
    elements.shopFans.textContent = fans;
    
    // 设置认证标签
    const certs = farmer.certified 
      ? ['平台认证农户', '产品质量保证', '产地直发保障']
      : ['产地直发保障'];
    
    elements.shopCertifications.innerHTML = certs.map(cert => `
      <span class="shop-cert-tag">
        <svg viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0l2.5 5 5.5.8-4 3.9 1 5.5-4.5-2.5-4.5 2.5 1-5.5L.5 5.8 5.5 5z"/>
        </svg>
        ${cert}
      </span>
    `).join('');
  }

  function renderSpecs() {
    const specs = state.currentProduct.specs;
    
    elements.specOptions.innerHTML = specs.map((spec, index) => `
      <label class="spec-option ${spec.recommended ? 'recommended' : ''}">
        <input type="radio" name="spec" value="${spec.year}" data-price="${spec.price}" ${spec.recommended ? 'checked' : ''}>
        <span class="spec-radio"></span>
        <span class="spec-content">
          <span class="spec-name">${spec.year}年</span>
          <span class="spec-tag ${spec.recommended ? 'recommend' : ''}">${spec.tag}</span>
        </span>
        <span class="spec-price">¥${spec.price}</span>
      </label>
    `).join('');
    
    elements.specOptions.querySelectorAll('input[name="spec"]').forEach(input => {
      input.addEventListener('change', (e) => {
        state.selectedSpec = parseInt(e.target.value);
        updatePrice();
      });
    });
    
    elements.modalSpecOptions.innerHTML = specs.map((spec, index) => `
      <button class="modal-spec-btn ${spec.recommended ? 'active' : ''}" data-year="${spec.year}" data-price="${spec.price}">
        <span class="spec-name">${spec.year}年</span>
      </button>
    `).join('');
    
    elements.modalSpecOptions.querySelectorAll('.modal-spec-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        elements.modalSpecOptions.querySelectorAll('.modal-spec-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.selectedSpec = parseInt(btn.dataset.year);
        updateModalPrice();
      });
    });
    
    updatePrice();
  }

  function updatePrice() {
    const spec = state.currentProduct.specs.find(s => s.year === state.selectedSpec);
    if (spec) {
      // productPrice 只显示数字，HTML 中的 .price-symbol 会显示 ¥
      elements.productPrice.textContent = spec.price;
    }
  }

  function updateModalPrice() {
    const spec = state.currentProduct.specs.find(s => s.year === state.selectedSpec);
    if (spec) {
      const total = spec.price * state.quantity;
      elements.modalPrice.textContent = `¥${spec.price}`;
      elements.modalTotalPrice.textContent = `¥${total}`;
    }
  }

  // 将元素滚动到页面中央位置（考虑导航栏高度）
  function scrollToCenter(element) {
    // 使用原生API，滚动到视口中央
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function renderGrowthLogs() {
    const logs = state.currentProduct.growthLogs;
    
    // 计算上次更新时间
    const now = new Date();
    now.setHours(23, 59, 59, 999);
    const todayStr = formatDateStr(now);
    const sortedLogs = [...logs].sort((a, b) => new Date(b.date) - new Date(a.date));
    const visibleLogs = sortedLogs.filter(log => new Date(log.date) <= now);
    const daysSinceUpdate = visibleLogs.length > 0 ? daysBetween(visibleLogs[0].date, todayStr) : -1;
    elements.lastUpdate.textContent = daysSinceUpdate === 0 ? '今天' : daysSinceUpdate === 1 ? '昨天' : `${daysSinceUpdate}天前`;
    
    // 重新计算可见日志的未读状态
    // 只在页面首次加载时计算，后续保持localStorage中的状态
    
    // 首次加载时：如果没有未读的日志，把最新2条设为未读
    if (!state.unreadInitialized) {
      const hasUnread = visibleLogs.some(log => log.hasNew);
      if (!hasUnread) {
        visibleLogs.forEach((log, i) => {
          log.hasNew = i < 2;
        });
      }
      state.unreadInitialized = true;
    }
    
    // 按月份分组日志（使用重新计算过hasNew的visibleLogs）
    const logsByMonth = {};
    visibleLogs.forEach((log, index) => {
      const date = parseDate(log.date);
      const monthKey = `${date.year}-${date.month}`;
      if (!logsByMonth[monthKey]) {
        logsByMonth[monthKey] = { year: date.year, month: date.month, logs: [] };
      }
      logsByMonth[monthKey].logs.push({ ...log, index });
    });
    
    // 获取当天的日期
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const todayDateStr = `${currentYear}-${currentMonth}-${today.getDate()}`;
    
    // 获取该产品日志的月份范围
    const displayMonths = getCalendarDisplayMonths(visibleLogs);
    
    // 生成月历视图HTML - 动态显示包含日志的月份
    let calendarHTML = `
      <div class="growth-calendar">
        <div class="calendar-nav">
          <div class="calendar-title">
            <svg viewBox="0 0 20 20" fill="currentColor">
              <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"/>
            </svg>
            <span>认养成长日历</span>
          </div>
        </div>
        <div class="calendar-months" id="calendarMonths">
    `;

    // 显示从偏移位置开始的3个月
    const calStartIdx = Math.max(0, state.calendarOffset);
    for (let i = 0; i < 3 && (calStartIdx + i) < displayMonths.length; i++) {
      const { year, month } = displayMonths[calStartIdx + i];
      const monthKey = `${year}-${month}`;
      // logsByMonth已经基于visibleLogs构建，包含正确的hasNew
      const monthLogs = logsByMonth[monthKey] ?
        logsByMonth[monthKey].logs.reduce((acc, log, idx) => {
          acc[log.date.split('-').pop()] = log;
          return acc;
        }, {}) : {};

      const isCurrentMonth = year === currentYear && month === currentMonth;

      calendarHTML += `
        <div class="month-grid ${isCurrentMonth ? 'current' : ''}" data-year="${year}" data-month="${month}">
          <div class="month-label">${year}年${month}月${isCurrentMonth ? ' <span class="current-tag">本月</span>' : ''}</div>
          <div class="days-grid">
            <div class="day-header">日</div>
            <div class="day-header">一</div>
            <div class="day-header">二</div>
            <div class="day-header">三</div>
            <div class="day-header">四</div>
            <div class="day-header">五</div>
            <div class="day-header">六</div>
            ${generateMonthDays(year, month, monthLogs, todayStr)}
          </div>
        </div>
      `;
    }

    calendarHTML += `</div></div>`;

    // 生成日志列表HTML（倒序排列，分页显示）
    let logsHTML = `<div class="growth-logs">`;

    // 直接使用前面已经计算好的visibleLogs（已包含正确的hasNew）
    // visibleLogs已经在前面按日期倒序排列，最新的1-2条已设为hasNew=true

    // 计算分页
    const totalPages = Math.ceil(visibleLogs.length / state.logsPerPage);
    const logsStartIdx = (state.logsPage - 1) * state.logsPerPage;
    const logsEndIdx = Math.min(logsStartIdx + state.logsPerPage, visibleLogs.length);
    const pageLogs = visibleLogs.slice(logsStartIdx, logsEndIdx);

    pageLogs.forEach((log, idx) => {
      const realIndex = logsStartIdx + idx;
      const date = parseDate(log.date);
      const logId = `log-${date.year}-${date.month}-${date.day}`;

      logsHTML += `
        <div class="log-item ${log.hasNew !== false ? 'unread' : ''}" id="${logId}" data-index="${realIndex}" data-log-date="${log.date}">
          <div class="log-marker ${log.hasNew !== false ? 'unread' : ''}">
            <span class="marker-month">${getMonthName(date.month).replace('月', '')}</span>
            <span class="marker-day">${date.day}</span>
          </div>
          <div class="log-content">
            <div class="log-header">
              <span class="log-title">${log.title}</span>
              <span class="log-expand" data-index="${realIndex}">展开</span>
            </div>
            <div class="log-body">
              ${log.content}
              ${log.images && log.images.length > 0 ? `
                <div class="log-images">
                  ${log.images.map((img, idx) => `<div class="log-img" data-index="${idx}"><span>图片${idx + 1}</span></div>`).join('')}
                </div>
              ` : '<div class="log-images"><div class="log-img placeholder"><span>+ 添加图片</span></div></div>'}
            </div>
          </div>
        </div>
      `;
    });

    // 添加翻页控件
    if (totalPages > 1) {
      logsHTML += `
        <div class="logs-pagination">
          <button class="page-btn" id="prevPage" ${state.logsPage <= 1 ? 'disabled' : ''}>上一页</button>
          <span class="page-info">${state.logsPage} / ${totalPages}</span>
          <button class="page-btn" id="nextPage" ${state.logsPage >= totalPages ? 'disabled' : ''}>下一页</button>
        </div>
      `;
    }

    logsHTML += `</div>`;

    // 渲染到页面
    elements.growthTimeline.innerHTML = calendarHTML + logsHTML;

    // 绑定日历导航事件
    initCalendarNavigation();

    // 绑定点击事件 - 点击日历日期跳转到对应日志
    elements.growthTimeline.querySelectorAll('.day-cell.has-log').forEach(cell => {
      cell.addEventListener('click', () => {
        const year = parseInt(cell.dataset.year);
        const month = parseInt(cell.dataset.month);
        const day = parseInt(cell.dataset.day);
        const logId = `log-${year}-${month}-${day}`;

        // 查找日志在visibleLogs中的索引
        const targetLog = visibleLogs.find(log => {
          const d = parseDate(log.date);
          return d.year === year && d.month === month && d.day === day;
        });

        if (!targetLog) return;

        // 计算日志所在的页码
        const logIndexInVisible = visibleLogs.findIndex(log => log.date === targetLog.date);
        const targetPage = Math.floor(logIndexInVisible / state.logsPerPage) + 1;

        // 如果日志不在当前页，需要翻页
        if (targetPage !== state.logsPage) {
          state.logsPage = targetPage;
          renderGrowthLogs();
          // 等待DOM更新后执行滚动
          setTimeout(() => {
            const logElement = document.getElementById(logId);
            if (logElement) {
              // 等待滚动完成后再显示闪烁效果
              setTimeout(() => {
                scrollToCenter(logElement);
                logElement.classList.add('expanded', 'highlight-flash');
                const expandBtn = logElement.querySelector('.log-expand');
                if (expandBtn) expandBtn.textContent = '收起';
                setTimeout(() => logElement.classList.remove('highlight-flash'), 2000);
              }, 600);
            }
          }, 100);
        } else {
          // 日志在当前页，直接滚动到中央
          const logElement = document.getElementById(logId);
          if (logElement) {
            scrollToCenter(logElement);
            // 等待滚动完成后再显示闪烁效果
            setTimeout(() => {
              logElement.classList.add('expanded', 'highlight-flash');
              const expandBtn = logElement.querySelector('.log-expand');
              if (expandBtn) expandBtn.textContent = '收起';
              setTimeout(() => logElement.classList.remove('highlight-flash'), 2000);
            }, 300);
          }
        }

        // 标记为已读（使用内存中的targetLog状态，只有未读日志才显示提示）
        if (targetLog && targetLog.hasNew) {
          // 更新内存中的日志状态
          targetLog.hasNew = false;

          // 保存更新后的数据到localStorage
          const allLogs = loadLogsFromStorage() || {};
          const productLogs = allLogs[state.currentProduct.id] || [];
          const logToSave = productLogs.find(log => log.date === targetLog.date);
          if (logToSave) {
            logToSave.hasNew = false;
            saveLogsToStorage(allLogs);
          }

          // 直接更新state中的日志对象（保持引用）
          logs.forEach(log => {
            if (log.date === targetLog.date) {
              log.hasNew = false;
            }
          });

          // 移除日历上的unread类
          cell.classList.remove('unread');

          // 时间线上的日期框红色边框缓缓消失
          const logElement = document.getElementById(logId);
          if (logElement) {
            const marker = logElement.querySelector('.log-marker');
            if (marker && marker.classList.contains('unread')) {
              marker.classList.remove('unread');
              marker.classList.add('reading');
              // 动画结束后移除reading类
              setTimeout(() => {
                marker.classList.remove('reading');
              }, 1500);
            }
          }

          showToast('已标记为已读');
        }
      });
    });

    // 绑定日志展开/收起事件
    elements.growthTimeline.querySelectorAll('.log-expand').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.log-item');
        item.classList.toggle('expanded');
        btn.textContent = item.classList.contains('expanded') ? '收起' : '展开';
      });
    });

    // 绑定翻页事件
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (state.logsPage > 1) {
          state.logsPage--;
          renderGrowthLogs();
        }
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        const sortedLogs = [...state.currentProduct.growthLogs].sort((a, b) => new Date(b.date) - new Date(a.date));
        const totalPages = Math.ceil(sortedLogs.length / state.logsPerPage);
        if (state.logsPage < totalPages) {
          state.logsPage++;
          renderGrowthLogs();
        }
      });
    }
  }
  
  // 生成月份日期格子（带每周日志统计：每周>=2次更新显示标识）
  function generateMonthDays(year, month, monthLogs, todayStr) {
    const daysInMonth = new Date(year, month, 0).getDate();
    const firstDay = new Date(year, month - 1, 1).getDay();
    
    // 计算当月的每周日志统计（以周一为起始）
    // 返回每个有日志的日期所属周是否满足>=2次更新
    const weekLogCounts = calculateWeekLogCounts(year, month, monthLogs, daysInMonth);
    
    let html = '';
    
    // 填充空白格子
    for (let i = 0; i < firstDay; i++) {
      html += '<div class="day-cell"></div>';
    }
    
    // 生成日期格子
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const isToday = dateStr === todayStr;
      const log = monthLogs[String(day).padStart(2, '0')];
      const hasLog = !!log;
      const isUnread = log && log.hasNew !== false;
      const logIndex = log ? log.index : undefined;
      // 检查该日期所属周是否满足>=2次更新条件
      const weekMeetsThreshold = weekLogCounts[day] >= 2;
      
      const classes = ['day-cell'];
      if (hasLog) classes.push('has-log');
      if (isToday) classes.push('today');
      if (isUnread) classes.push('unread');
      // 添加周统计标识（满足>=2次更新的周显示特殊样式）
      if (weekMeetsThreshold) classes.push('week-meets-threshold');
      
      // 为有日志的日期添加可点击属性
      const clickAttr = hasLog ? `data-date="${dateStr}" data-log-index="${logIndex !== undefined ? logIndex : ''}"` : '';
      const cursorStyle = isUnread ? 'cursor: pointer;' : '';
      
      html += `
        <div class="${classes.join(' ')}" data-year="${year}" data-month="${month}" data-day="${day}" ${weekMeetsThreshold ? 'data-week-threshold="true"' : ''} ${clickAttr} style="${cursorStyle}">
          ${day}
        </div>
      `;
    }
    
    return html;
  }
  
  // 计算指定月份的每周日志更新次数（以周一为一周起始）
  function calculateWeekLogCounts(year, month, monthLogs, daysInMonth) {
    const counts = {};
    
    // 初始化每天的计数为0
    for (let day = 1; day <= daysInMonth; day++) {
      counts[day] = 0;
    }
    
    // 统计每天的日志数
    for (const day in monthLogs) {
      if (monthLogs[day]) {
        counts[parseInt(day)] = 1;
      }
    }
    
    // 转换为每周计数（以周一为起始）
    const weekCounts = {};
    let currentWeekStart = 1;
    
    for (let day = 1; day <= daysInMonth; day++) {
      // 计算该日期是周几（0=周日，1=周一，...，6=周六）
      const dayOfWeek = new Date(year, month - 1, day).getDay();
      // 如果是周一（新一周开始），重置起始日
      if (dayOfWeek === 1 && day > 1) {
        currentWeekStart = day;
      }
      // 如果是周日，也作为一周结束
      // 累加本周的日志数
    }
    
    // 重新按周统计：计算每周（周一到周日或到月末）的日志总数
    let weekStart = null;
    for (let day = 1; day <= daysInMonth; day++) {
      const dayOfWeek = new Date(year, month - 1, day).getDay();
      
      // 周一作为一周开始
      if (dayOfWeek === 1 || (dayOfWeek === 0 && weekStart === null && day > 1)) {
        // 处理周日到周六的情况
        if (dayOfWeek === 0 && day > 1) {
          // 周日：属于上周
          const sunday = day;
          const saturday = day > 1 ? day - 1 : 0;
        }
        weekStart = day;
      }
      
      // 如果是新的一周开始（或周日），统计上周
      if ((dayOfWeek === 1 && weekStart !== null && weekStart < day) || (dayOfWeek === 0 && day === 1)) {
        // 统计weekStart到day-1这一周的日志总数
        let weekLogCount = 0;
        for (let d = weekStart; d < day; d++) {
          if (d <= daysInMonth) weekLogCount += counts[d];
        }
        // 将计数分配给本周的每一天
        for (let d = weekStart; d < day && d <= daysInMonth; d++) {
          weekCounts[d] = weekLogCount;
        }
        weekStart = dayOfWeek === 1 ? day : day;
      }
      
      // 月末处理：统计最后一周
      if (day === daysInMonth) {
        let weekLogCount = 0;
        for (let d = weekStart || 1; d <= daysInMonth; d++) {
          weekLogCount += counts[d];
        }
        for (let d = weekStart || 1; d <= daysInMonth; d++) {
          weekCounts[d] = weekLogCount;
        }
      }
    }
    
    // 简化处理：针对每一周（7天周期），从该月第一天的周一开始计算
    // 重新实现：根据日历周（周一到周日）统计
    const finalWeekCounts = {};
    const firstDayOfMonth = new Date(year, month - 1, 1).getDay();
    // 找到第一个周一的索引（如果是周日则下一天是周一）
    let firstMonday = 1;
    if (firstDayOfMonth === 0) {
      firstMonday = 2; // 如果1号是周日，则2号是周一
    } else if (firstDayOfMonth > 1) {
      firstMonday = 9 - firstDayOfMonth; // 计算第一个周一
    }
    
    // 逐周统计
    let weekStartDay = firstMonday > daysInMonth ? 1 : firstMonday;
    for (let day = 1; day <= daysInMonth; day++) {
      const dayOfWeek = new Date(year, month - 1, day).getDay();
      
      // 计算当前天属于哪一周（从weekStartDay开始）
      // 每周从周一开始
      let thisWeekStart = weekStartDay;
      if (dayOfWeek === 1 || day === 1) {
        thisWeekStart = day;
        weekStartDay = day;
      }
      
      // 统计这周的日志数
      let weekLogCount = 0;
      let weekEnd = Math.min(thisWeekStart + 6, daysInMonth);
      for (let d = thisWeekStart; d <= weekEnd; d++) {
        if (counts[d]) weekLogCount += counts[d];
      }
      
      // 将本周统计应用到每一天
      for (let d = thisWeekStart; d <= weekEnd; d++) {
        finalWeekCounts[d] = weekLogCount;
      }
      
      // 如果是周日，移动到下一周的第一天
      if (dayOfWeek === 0) {
        weekStartDay = day + 1;
      }
    }
    
    // 处理1号是周日的情况（需要特殊处理）
    if (firstDayOfMonth === 0) {
      // 1号属于上个月的那一周，需要特殊处理
      let weekLogCount = 0;
      for (let d = 1; d <= daysInMonth && new Date(year, month - 1, d - 1).getDay() !== 1; d++) {
        if (counts[d]) weekLogCount += counts[d];
      }
      // 但这样处理太复杂，简化为直接判断
    }
    
    return finalWeekCounts;
  }

  function renderProductDetails() {
    const details = state.currentProduct.details;
    
    elements.detailTable.innerHTML = Object.entries(details).map(([key, value]) => `
      <tr>
        <td>${key}</td>
        <td>${value}</td>
      </tr>
    `).join('');
  }

  function renderReviews() {
    const reviews = state.currentProduct.reviews;
    const p = state.currentProduct;
    
    // 使用产品自带的分类评分，如果没有则使用默认值
    const quality = p.reviewScores?.quality || 4.8;
    const service = p.reviewScores?.service || 4.6;
    const delivery = p.reviewScores?.delivery || 4.7;
    
    // 综合评分 = 三个分类评分的平均值
    const avg = ((quality + service + delivery) / 3).toFixed(1);
    elements.avgScore.textContent = avg;
    elements.qualityScore.textContent = quality.toFixed(1);
    elements.serviceScore.textContent = service.toFixed(1);
    elements.deliveryScore.textContent = delivery.toFixed(1);
    
    // 更新综合评分星星
    const scoreStarsContainer = elements.avgScore.parentElement.querySelector('.score-stars');
    if (scoreStarsContainer) {
      scoreStarsContainer.innerHTML = generateStars(parseFloat(avg));
    }
    
    // 更新各维度星星和进度条
    const scoreDims = document.querySelectorAll('.score-dim');
    const scores = [
      { stars: quality, bar: generateProgressBar(quality) },
      { stars: service, bar: generateProgressBar(service) },
      { stars: delivery, bar: generateProgressBar(delivery) }
    ];
    scoreDims.forEach((dim, index) => {
      const starsContainer = dim.querySelector('.dim-stars');
      const barSpan = dim.querySelector('.dim-bar span');
      if (starsContainer) {
        starsContainer.innerHTML = generateStars(scores[index].stars);
      }
      if (barSpan) {
        barSpan.style.width = scores[index].bar + '%';
      }
    });
    
    elements.reviewList.innerHTML = reviews.length > 0 ? reviews.map(review => `
      <div class="review-item">
        <div class="review-header">
          <div class="review-avatar">${review.avatar}</div>
          <div class="review-user">
            <div class="review-name">${review.user}</div>
            <div class="review-date">${review.date}</div>
          </div>
          <div class="review-stars">${'★'.repeat(review.score)}</div>
        </div>
        <div class="review-body">${review.content}</div>
        ${review.images.length > 0 ? `
          <div class="review-images">
            ${review.images.map(() => '<div class="review-img"></div>').join('')}
          </div>
        ` : ''}
      </div>
    `).join('') : '<p style="text-align:center;color:rgba(44,44,42,0.5);padding:40px;">暂无评价</p>';
  }

  function renderModalStock() {
    const p = state.currentProduct;
    const soldPercent = 100 - getStockPercent(p.stock, p.totalStock);
    elements.modalStockFill.style.width = `${soldPercent}%`;

    // 根据产品类型设置库存单位
    const unitMap = {
      'fruit': '棵',
      'field': '亩',
      'ranch': '头'
    };
    const stockUnit = unitMap[p.type] || '棵';
    elements.modalStockText.textContent = `剩余 ${p.stock} ${stockUnit}`;
  }

  // ═══════════════════════════════
  // 交互功能
  // ═══════════════════════════════
  function initTabs() {
    elements.detailTabs.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        elements.detailTabs.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        elements.tabContents.forEach(content => {
          content.classList.remove('active');
          if (content.id === `tab-${tab}`) {
            content.classList.add('active');
          }
        });
      });
    });
  }
  
  // 日历导航功能（已禁用翻页按钮）
  function initCalendarNavigation() {
    const monthsContainer = document.getElementById('calendarMonths');
    
    if (!monthsContainer) return;
    
    // 翻页功能已禁用，此函数保留用于兼容性
    return;
  }
  
  // 初始化购买弹窗
  function initPurchaseModal() {
    // 防御性检查：确保按钮元素存在
    if (!elements.buyNowBtn || !elements.addCartBtn) {
      return;
    }

    elements.buyNowBtn.addEventListener('click', async () => {
      // 检查登录状态
      if (!AuthAPI.isLoggedIn()) {
        showToast('请先登录后再进行购买');
        setTimeout(() => {
          window.location.href = '../profile.html';
        }, 1500);
        return;
      }
      // 检查收货地址
      try {
        const addrData = await window.UserAPI.getAddress();
        if (!addrData.receiver_name || !addrData.receiver_phone || !addrData.receiver_address) {
          showToast('请先到"我的-账户设置"填写完整收货地址');
          setTimeout(() => window.location.href = '../http://localhost:3001/profile.html#section-settings', 5000);
          return;
        }
      } catch (e) {
        const saved = localStorage.getItem('receiverInfo');
        if (saved) {
          try {
            const info = JSON.parse(saved);
            if (!info.name || !info.phone || !info.address) {
              showToast('请先到"我的-账户设置"填写完整收货地址');
              setTimeout(() => window.location.href = '../http://localhost:3001/profile.html#section-settings', 5000);
              return;
            }
          } catch (e2) {
            showToast('请先到"我的-账户设置"填写完整收货地址');
            setTimeout(() => window.location.href = '../http://localhost:3001/profile.html#section-settings', 5000);
            return;
          }
        } else {
          showToast('请先到"我的-账户设置"填写完整收货地址');
          setTimeout(() => window.location.href = '../http://localhost:3001/profile.html#section-settings', 5000);
          return;
        }
      }
      openPurchaseModal(false);
    });
    elements.addCartBtn.addEventListener('click', async () => {
      // 检查登录状态
      if (!AuthAPI.isLoggedIn()) {
        showToast('请先登录后再加入待付款');
        setTimeout(() => {
          window.location.href = '../profile.html';
        }, 1000);
        return;
      }
      // 检查收货地址
      let hasAddress = false;
      let receiverName = '', receiverPhone = '', receiverAddress = '';
      try {
        const addrData = await window.UserAPI.getAddress();
        if (addrData.receiver_name && addrData.receiver_phone && addrData.receiver_address) {
          hasAddress = true;
          receiverName = addrData.receiver_name;
          receiverPhone = addrData.receiver_phone;
          receiverAddress = addrData.receiver_address;
        }
      } catch (e) {}
      if (!hasAddress) {
        const saved = localStorage.getItem('receiverInfo');
        if (saved) {
          try {
            const info = JSON.parse(saved);
            if (info.name && info.phone && info.address) {
              hasAddress = true;
              receiverName = info.name;
              receiverPhone = info.phone;
              receiverAddress = info.address;
            }
          } catch (e2) {}
        }
      }
      if (!hasAddress) {
        showToast('请先到"我的-账户设置"填写完整收货地址');
        setTimeout(() => {
          window.location.href = '../http://localhost:3001/profile.html#section-settings';
        }, 5000);
        return;
      }
      // 添加到待付款（创建订单）
      const product = state.currentProduct;
      const spec = product.specs.find(s => s.year === state.selectedSpec);
      const quantity = 1;
      try {
        await window.OrderAPI.create({
          product_id: product.id,
          spec_year: spec.year,
          quantity: quantity,
          receiver_name: receiverName,
          receiver_phone: receiverPhone,
          receiver_address: receiverAddress
        });
        showToast('已加入待付款');
      } catch (err) {
        showToast('添加失败：' + err.message);
      }
    });

    elements.modalOverlay.addEventListener('click', closePurchaseModal);
    elements.modalClose.addEventListener('click', closePurchaseModal);

    elements.qtyMinus.addEventListener('click', () => {
      if (state.quantity > 1) {
        state.quantity--;
        elements.qtyInput.value = state.quantity;
        updateModalPrice();
      }
    });

    elements.qtyPlus.addEventListener('click', () => {
      if (state.currentProduct && state.quantity < state.currentProduct.stock) {
        state.quantity++;
        elements.qtyInput.value = state.quantity;
        updateModalPrice();
      }
    });

    elements.qtyInput.addEventListener('change', (e) => {
      let val = parseInt(e.target.value) || 1;
      val = Math.max(1, Math.min(val, state.currentProduct ? state.currentProduct.stock : 1));
      state.quantity = val;
      e.target.value = val;
      updateModalPrice();
    });

    elements.modalSubmit.addEventListener('click', async () => {
      const receiverName = elements.modalReceiverName.value.trim();
      const receiverPhone = elements.modalReceiverPhone.value.trim();
      const receiverAddress = elements.modalReceiverAddress.value.trim();

      if (!receiverName || !receiverPhone || !receiverAddress) {
        showToast('请填写完整的收货信息');
        return;
      }

      // 检查是否登录
      if (!window.AuthAPI?.isLoggedIn()) {
        showToast('请先登录');
        setTimeout(() => window.location.href = '../profile.html', 1000);
        return;
      }

      const quantity = parseInt(elements.qtyInput.value) || 1;

      // 保存收货信息
      saveReceiverInfo(receiverName, receiverPhone, receiverAddress);

      if (state.isCartMode) {
        // 加入待付款（创建订单）
        try {
          const spec = state.currentProduct.specs.find(s => s.year === state.selectedSpec);
          await window.OrderAPI.create({
            product_id: state.currentProduct.id,
            spec_year: spec.year,
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

  function openPurchaseModal(isCart = false) {
    // 防御性检查：确保 state.currentProduct 存在
    if (!state.currentProduct) {
      showToast('数据加载中，请稍后再试');
      return;
    }

    state.isCartMode = isCart;
    elements.purchaseModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    state.quantity = 1;
    elements.qtyInput.value = 1;

    // 设置弹窗中的商品信息
    const p = state.currentProduct;
    elements.modalTitle.textContent = p.name;

    renderModalStock();
    updateModalPrice();

    // 根据模式显示不同按钮文字
    elements.modalSubmit.textContent = isCart ? '加入待付款' : '确认购买';

    // 加载保存的收货地址
    loadSavedAddress();
  }

  // 加载收货地址
  async function loadSavedAddress() {
    if (!window.AuthAPI?.isLoggedIn()) return;

    try {
      const data = await window.UserAPI.getAddress();
      elements.modalReceiverName.value = data.receiver_name || '';
      elements.modalReceiverPhone.value = data.receiver_phone || '';
      elements.modalReceiverAddress.value = data.receiver_address || '';
    } catch (e) {
      // 如果获取失败，尝试从本地存储加载
      const saved = localStorage.getItem('receiverInfo');
      if (saved) {
        try {
          const info = JSON.parse(saved);
          elements.modalReceiverName.value = info.name || '';
          elements.modalReceiverPhone.value = info.phone || '';
          elements.modalReceiverAddress.value = info.address || '';
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
    elements.purchaseModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function initPreviewModal() {
    elements.zoomBtn.addEventListener('click', () => {
      elements.previewModal.classList.add('active');
    });
    
    elements.previewClose.addEventListener('click', () => {
      elements.previewModal.classList.remove('active');
    });
    
    elements.previewModal.addEventListener('click', (e) => {
      if (e.target === elements.previewModal) {
        elements.previewModal.classList.remove('active');
      }
    });
    
    elements.previewPrev.addEventListener('click', () => {
      state.currentImage = (state.currentImage - 1 + state.totalImages) % state.totalImages;
      updatePreviewImage();
    });
    
    elements.previewNext.addEventListener('click', () => {
      state.currentImage = (state.currentImage + 1) % state.totalImages;
      updatePreviewImage();
    });
    
    elements.mediaThumbs.querySelectorAll('.thumb-item').forEach(thumb => {
      thumb.addEventListener('click', () => {
        state.currentImage = parseInt(thumb.dataset.index);
        elements.mediaThumbs.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
    });
  }

  function updatePreviewImage() {
    elements.previewCounter.textContent = `${state.currentImage + 1} / ${state.totalImages}`;
  }

  function initFavorite() {
    // 检查初始收藏状态
    checkFavoriteStatus();

    elements.favoriteBtn.addEventListener('click', async () => {
      if (!window.AuthAPI?.isLoggedIn()) {
        showToast('请先登录');
        return;
      }
      try {
        const result = await window.FavoriteAPI.toggle(state.currentProduct.id);
        elements.favoriteBtn.style.color = result.favorited ? '#E85A5A' : 'rgba(44,44,42,0.4)';
        elements.favoriteBtn.style.borderColor = result.favorited ? '#E85A5A' : 'rgba(74,74,53,0.2)';
        showToast(result.favorited ? '已收藏' : '已取消收藏');
        // 更新 profile 页面的收藏数
        localStorage.setItem('favoriteCountUpdate', JSON.stringify({ delta: result.favorited ? 1 : -1, time: Date.now() }));
      } catch (e) {
        showToast('操作失败');
      }
    });
  }

  async function checkFavoriteStatus() {
    if (!window.AuthAPI?.isLoggedIn()) return;
    try {
      const { favorited } = await window.FavoriteAPI.check(state.currentProduct.id);
      elements.favoriteBtn.style.color = favorited ? '#E85A5A' : 'rgba(44,44,42,0.4)';
      elements.favoriteBtn.style.borderColor = favorited ? '#E85A5A' : 'rgba(74,74,53,0.2)';
    } catch (e) {}
  }

  // 时间模拟器初始化
  function initTimeSimulator() {
    if (!elements.simYearSelect || !elements.simMonthSelect) return;

    const logs = state.currentProduct.growthLogs;
    const displayMonths = getCalendarDisplayMonths(logs);

    // 获取所有年份
    const years = [...new Set(displayMonths.map(m => m.year))].sort();

    // 填充年份选项
    if (elements.simYearSelect) {
      elements.simYearSelect.innerHTML = years.map(y =>
        `<option value="${y}">${y}</option>`
      ).join('');
    }

    // 年份变化时更新月份选项
    if (elements.simYearSelect) {
      elements.simYearSelect.addEventListener('change', updateSimMonthOptions);
    }

    // 初始化月份选项
    updateSimMonthOptions();

    // 重置未读按钮
    if (elements.resetUnreadBtn) {
      elements.resetUnreadBtn.addEventListener('click', () => {
        logs.forEach(log => log.hasNew = false);
        renderGrowthLogs();
        showToast('已重置未读状态');
      });
    }

    function updateSimMonthOptions() {
      const selectedYear = parseInt(elements.simYearSelect.value);
      const months = displayMonths.filter(m => m.year === selectedYear).map(m => m.month);

      if (elements.simMonthSelect) {
        elements.simMonthSelect.innerHTML = months.map(m =>
          `<option value="${m}">${m}月</option>`
        ).join('');
      }
    }
  }

  // 进店逛逛按钮
  function initShopDetail() {
    if (elements.shopDetailBtn) {
      elements.shopDetailBtn.addEventListener('click', () => {
        const farmer = state.currentProduct?.farmer?.name;
        if (farmer) {
          window.location.href = '../store.html?farmer=' + encodeURIComponent(farmer) + '&from=detail&id=' + encodeURIComponent(state.currentProduct?.id || '');
        } else {
          showToast('店铺信息加载中...');
        }
      });
    }
  }

  // ═══════════════════════════════
  // 初始化
  // ═══════════════════════════════
  function init() {
    try {
    // 获取产品ID并加载对应数据
    const productId = getProductIdFromUrl();
    state.currentProduct = getProductData(productId);

    // 调试：确认产品数据加载正确

    // 先初始化/加载日志数据
    initLogsData();

    // 补充当周数据（如需要），并获取更新后的日志
    const updatedLogs = supplementLogsData(productId);
    if (updatedLogs && updatedLogs[productId]) {
      state.currentProduct.growthLogs = updatedLogs[productId];
    }

    // 检查并自动生成新日志（如果超过3天没更新）
    checkAndGenerateNewLog(productId);
    // 重新加载更新后的日志
    const reloadedLogs = loadLogsFromStorage();
    if (reloadedLogs && reloadedLogs[productId]) {
      state.currentProduct.growthLogs = reloadedLogs[productId];
    }

    // 重置日历偏移量到当前月
    state.calendarOffset = 0;

    // 补全生长日志（从上次更新到今天之间的遗漏日志）
    const lastUpdateText = fillMissingLogs(state.currentProduct);
    elements.lastUpdate.textContent = lastUpdateText;

    // 更新页面标题
    document.title = `一季一鲜 · ${state.currentProduct.name}`;

    renderProductInfo();
    renderProductMedia();
    renderSpecs();
    renderGrowthLogs();
    renderProductDetails();
    renderReviews();
    renderShopDetail();

    // 计算 visibleLogs（和 renderGrowthLogs 内部逻辑一致）
    const now = new Date();
    now.setHours(23, 59, 59, 999);
    const allLogs = state.currentProduct.growthLogs;
    const sortedLogs = [...allLogs].sort((a, b) => new Date(b.date) - new Date(a.date));
    const visibleLogs = sortedLogs.filter(log => new Date(log.date) <= now);

    // 检查URL是否有log参数，有则滚动到对应日志
    const urlParams = new URLSearchParams(window.location.search);
    const targetLogDate = urlParams.get('log');
    if (targetLogDate) {
      // 先计算目标日志在哪一页
      const targetLogIndex = visibleLogs.findIndex(log => log.date === targetLogDate);
      if (targetLogIndex !== -1) {
        const targetPage = Math.floor(targetLogIndex / state.logsPerPage) + 1;

        // 如果不在当前页，先翻页
        if (targetPage !== state.logsPage) {
          state.logsPage = targetPage;
          renderGrowthLogs();
        }

        // 等待DOM更新后再滚动
        setTimeout(() => {
          const logElement = document.querySelector(`[data-log-date="${targetLogDate}"]`);
          if (logElement) {
            logElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // 高亮动效
            logElement.classList.add('highlight-flash');

            // 标记为已读（只有未读日志才处理）
            const targetLog = visibleLogs.find(log => log.date === targetLogDate);
            if (targetLog && targetLog.hasNew) {
              // 更新localStorage中的hasNew状态
              const allLogs = loadLogsFromStorage() || {};
              const productLogs = allLogs[state.currentProduct.id] || [];
              const logToSave = productLogs.find(log => log.date === targetLog.date);
              if (logToSave) {
                logToSave.hasNew = false;
                saveLogsToStorage(allLogs);
              }

              // 直接更新内存中的日志对象
              targetLog.hasNew = false;
              if (state.currentProduct.growthLogs) {
                state.currentProduct.growthLogs.forEach(log => {
                  if (log.date === targetLogDate) {
                    log.hasNew = false;
                  }
                });
              }

              // 移除日历上对应日期的unread样式
              // 需要将 targetLogDate (2026-04-08) 转换为与日历data-date (2026-4-8) 相同的格式
              const targetParts = targetLogDate.split('-').map(Number);
              const calendarDateStr = `${targetParts[0]}-${targetParts[1]}-${targetParts[2]}`;
              const calendarCell = document.querySelector(`.day-cell[data-date="${calendarDateStr}"]`);
              if (calendarCell && calendarCell.classList.contains('unread')) {
                calendarCell.classList.remove('unread');
              }

              // 移除时间线上的红色未读样式
              const marker = logElement.querySelector('.log-marker');
              if (marker && marker.classList.contains('unread')) {
                marker.classList.remove('unread');
                marker.classList.add('reading');
                // 动画结束后移除reading类
                setTimeout(() => {
                  marker.classList.remove('reading');
                }, 1500);
              }
            }

            // 滚动完成后展开日志并显示高亮
            setTimeout(() => {
              logElement.classList.add('expanded');
              const expandBtn = logElement.querySelector('.log-expand');
              if (expandBtn) expandBtn.textContent = '收起';
              setTimeout(() => logElement.classList.remove('highlight-flash'), 2000);
            }, 300);
          }
          // 清除URL中的log参数，防止刷新后重复触发
          urlParams.delete('log');
          const newUrl = window.location.pathname + '?' + urlParams.toString() + window.location.hash;
          history.replaceState(null, '', newUrl);
        }, 100);
      }
    }

    initTabs();
    initPurchaseModal();
    initPreviewModal();
    initFavorite();
    initShopDetail();

    // 定期检查并更新日历和补全生长日志（每分钟检查一次）
    setInterval(() => {
      const lastUpdateText = fillMissingLogs(state.currentProduct);
      elements.lastUpdate.textContent = lastUpdateText;
      renderGrowthLogs();
    }, 60000);
    
    // 入场动画
    gsap.from('.product-media', {
      x: -30,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    });
    
    gsap.from('.product-info', {
      x: 30,
      opacity: 0,
      duration: 0.6,
      delay: 0.1,
      ease: 'power2.out'
    });
    
    gsap.from('.detail-tabs', {
      y: 20,
      opacity: 0,
      duration: 0.5,
      delay: 0.3,
      ease: 'power2.out'
    });
    
    // 滚动浮现动画 - 页面组件从下方缓缓显现
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
    gsap.from('.detail-shop-card', {
      scrollTrigger: {
        trigger: '.detail-shop-card',
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
    
    // 生长日志项
    gsap.utils.toArray('.log-item').forEach((item, i) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          toggleActions: 'play none none play'
        },
        y: 25,
        opacity: 0,
        duration: 0.5,
        delay: i * 0.08,
        ease: 'power2.out'
      });
    });
    } catch (e) {
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
