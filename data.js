/* ══════════════════════════════
   商品数据（供 map.html 和 products.html 共用）
   上线后替换为 fetch('/api/products')
   助农平台 · 多产地多品种
   设计原则：同一商品在多个区域销售，便于数据可视化扇形图展示

   季节标签说明：
   - spring: 春季（3-5月）当季
   - summer: 夏季（6-8月）当季
   - autumn: 秋季（9-11月）当季
   - winter: 冬季（12-2月）当季
   - all: 全年可售（非时令产品，如耐储存、大棚种植、工厂化养殖等）
═══════════════════════════════ */
const PRODUCTS = [
  // ==================== 苹果 — 全国各大区都有 ====================
{ id:'fruit_001', name:'红富士苹果', region:'东北', loc:'辽宁·鞍山', desc:'寒富苹果，昼夜温差大，口感脆甜多汁', price:'¥35', tag:'严选臻品', tagZone:'mountain', cat:'fruit', quantity:330, farmer:'鞍山王大哥果园', rating:'4.7', zone:'tech-farming', season:'autumn' },
{ id:'fruit_002', name:'红富士苹果', region:'华东', loc:'山东·烟台', desc:'渤海湾产区，果形端正，色泽鲜艳，脆甜多汁', price:'¥38', tag:'严选臻品', tagZone:'eco', cat:'fruit', quantity:330, farmer:'烟台红富士基地', rating:'4.8', zone:'tech-farming', season:'autumn' },
{ id:'fruit_003', name:'红富士苹果', region:'西北', loc:'陕西·洛川', desc:'黄土高原优质苹果，脆甜多汁，出口级标准', price:'¥36', tag:'严选臻品', tagZone:'mountain', cat:'fruit', quantity:330, farmer:'洛川张叔果园', rating:'4.6', zone:'tech-farming', season:'autumn' },
{ id:'fruit_004', name:'红富士苹果', region:'华北', loc:'河北·承德', desc:'长城脚下，生态种植，果肉细腻', price:'¥32', tag:'严选臻品', tagZone:'eco', cat:'fruit', quantity:330, farmer:'承德生态果园', rating:'4.5', zone:'tech-farming', season:'autumn' },
{ id:'fruit_005', name:'红富士苹果', region:'西南', loc:'四川·盐源', desc:'高原苹果，糖心明显，农户直发', price:'¥34', tag:'严选臻品', tagZone:'mountain', cat:'fruit', quantity:340, farmer:'盐源高原果园', rating:'4.7', zone:'tech-farming', season:'autumn' },
{ id:'fruit_006', name:'红富士苹果', region:'华南', loc:'云南·昭通', desc:'高海拔种植，阳光果，野生风味', price:'¥33', tag:'严选臻品', tagZone:'eco', cat:'fruit', quantity:340, farmer:'昭通苹果农庄', rating:'4.4', zone:'tech-farming', season:'autumn' },

  // ==================== 大米 — 南方北方都有 ====================
  { id:'fruit_007', name:'五常大米',       region:'东北', loc:'黑龙江·五常',   desc:'稻花香2号，天然富硒土壤，颗粒饱满',                   price:'¥45',  tag:'', tagZone:'mountain', cat:'other', quantity:1100, farmer:'五常稻农老李',       rating:'4.9', season:'autumn' },
  { id:'fruit_008', name:'五常大米',       region:'华东', loc:'江苏·射阳',     desc:'沿海滩涂，湿地种植，柔软香甜',                       price:'¥38',  tag:'', tagZone:'eco', cat:'other', quantity:880,  farmer:'射阳稻米基地',       rating:'4.6', season:'autumn' },
  { id:'fruit_009', name:'五常大米',       region:'华中', loc:'湖北·孝感',     desc:'鱼米之乡，稻虾共养，绿色种植',                       price:'¥35',  tag:'', tagZone:'eco', cat:'other', quantity:760,  farmer:'孝感稻虾农场',       rating:'4.5', season:'autumn' },
  { id:'fruit_010', name:'丝苗米',         region:'华南', loc:'广东·增城',     desc:'细长米粒，软糯弹牙，煲仔饭专用',                     price:'¥42',  tag:'', tagZone:'mountain', cat:'other', quantity:620,  farmer:'增城丝苗米农庄',     rating:'4.7', season:'autumn' },
  { id:'fruit_011', name:'丝苗米',         region:'华东', loc:'江西·宜春',     desc:'富硒土壤，生态种植，米香四溢',                       price:'¥36',  tag:'', tagZone:'eco', cat:'other', quantity:540,  farmer:'宜春富硒米业',       rating:'4.5', season:'autumn' },

  // ==================== 橙子 — 多区域 ====================
  { id:'fruit_012', name:'脐橙',           region:'华东', loc:'江西·赣州',     desc:'国家地理标志，橙香浓郁，酸甜适口',                   price:'¥48',  tag:'', tagZone:'mountain', cat:'fruit', quantity:950,  farmer:'赣州脐橙合作社',     rating:'4.8', season:'winter' },
  { id:'fruit_013', name:'脐橙',           region:'华中', loc:'湖北·秭归',     desc:'三峡库区，四季有橙，果肉细嫩',                       price:'¥42',  tag:'', tagZone:'eco', cat:'fruit', quantity:780,  farmer:'秭归脐橙基地',       rating:'4.6', season:'winter' },
  { id:'fruit_014', name:'脐橙',           region:'西南', loc:'四川·眉山',     desc:'天府之国，阳光充足，汁水丰盈',                       price:'¥40',  tag:'', tagZone:'eco', cat:'fruit', quantity:650,  farmer:'眉山橙园',           rating:'4.5', season:'winter' },
{ id:'fruit_015', name:'血橙', region:'华东', loc:'福建·顺昌', desc:'花青素丰富，果肉呈红色，保健价值高', price:'¥58', tag:'清爽无负', tagZone:'mountain', cat:'fruit', quantity:320, farmer:'顺昌血橙农庄', rating:'4.7', zone:'light-diet', season:'winter' },
{ id:'fruit_016', name:'血橙', region:'西南', loc:'云南·华宁', desc:'高原血橙，昼夜温差大，糖分高', price:'¥52', tag:'清爽无负', tagZone:'eco', cat:'fruit', quantity:280, farmer:'华宁高原果业', rating:'4.5', zone:'light-diet', season:'winter' },

  // ==================== 沃柑/柑橘 — 多区域 ====================
  { id:'fruit_017', name:'沃柑',           region:'华南', loc:'广西·武鸣',     desc:'黄金酸甜比，汁水丰盈，晚熟品种',                     price:'¥28',  tag:'', tagZone:'eco', cat:'fruit', quantity:1350, farmer:'武鸣沃柑基地',       rating:'4.5', season:'winter' },
  { id:'fruit_018', name:'沃柑',           region:'华东', loc:'浙江·衢州',     desc:'钱江源头，生态种植，甜度高',                         price:'¥32',  tag:'', tagZone:'mountain', cat:'fruit', quantity:680,  farmer:'衢州柑橘农庄',       rating:'4.6', season:'winter' },
  { id:'fruit_019', name:'沃柑',           region:'西南', loc:'四川·成都',     desc:'天府柑橘，汁多味甜，春節必備',                       price:'¥30',  tag:'', tagZone:'eco', cat:'fruit', quantity:520,  farmer:'成都天府果园',       rating:'4.4', season:'winter' },
{ id:'fruit_020', name:'蜜橘', region:'华中', loc:'浙江·黄岩', desc:'蜜橘之乡，皮薄无核，甜如蜜糖', price:'¥22', tag:'清爽无负', tagZone:'heritage', cat:'fruit', quantity:890, farmer:'黄岩蜜橘老字号', rating:'4.8', zone:'light-diet', season:'autumn' },
{ id:'fruit_021', name:'蜜橘', region:'华东', loc:'湖北·宜昌', desc:'三峡移民区，库区柑橘，国家地理标志', price:'¥20', tag:'清爽无负', tagZone:'eco', cat:'fruit', quantity:760, farmer:'宜昌柑橘基地', rating:'4.5', zone:'light-diet', season:'autumn' },

  // ==================== 梨 — 多区域 ====================
{ id:'fruit_022', name:'库尔勒香梨', region:'西北', loc:'新疆·库尔勒', desc:'皮薄肉细，汁多味甜，国家地理标志', price:'¥48', tag:'', tagZone:'mountain', cat:'fruit', quantity:550, farmer:'库尔勒香梨合作社', rating:'4.8', zone:'light-diet', season:'autumn' },
{ id:'fruit_023', name:'皇冠梨', region:'华北', loc:'河北·赵县', desc:'千年梨乡，果肉洁白如雪，汁多味甜', price:'¥26', tag:'清爽无负', tagZone:'mountain', cat:'fruit', quantity:880, farmer:'赵县皇冠梨基地', rating:'4.6', zone:'light-diet', season:'autumn' },
{ id:'fruit_024', name:'皇冠梨', region:'华东', loc:'安徽·砀山', desc:'酥脆爽口，咬一口流一手，砀山特产', price:'¥24', tag:'', tagZone:'eco', cat:'fruit', quantity:920, farmer:'砀山梨园', rating:'4.5', zone:'light-diet', season:'autumn' },
{ id:'fruit_025', name:'秋月梨', region:'华东', loc:'山东·莱阳', desc:'日本品种，果肉细腻，汁水丰富，礼品首选', price:'¥42', tag:'严选臻品', tagZone:'eco', cat:'fruit', quantity:480, farmer:'莱阳秋月梨农庄', rating:'4.7', zone:'tech-farming', season:'autumn' },
  { id:'fruit_026', name:'丰水梨',         region:'华中', loc:'河南·宁陵',     desc:'沙地种植，口感绵软，润肺止咳',                       price:'¥28',  tag:'', tagZone:'mountain', cat:'fruit', quantity:360, farmer:'宁陵沙地梨园',       rating:'4.5', season:'autumn' },

  // ==================== 芒果 — 多区域（高糖，排除轻盈控卡区）====================
  { id:'fruit_027', name:'芒果',           region:'华南', loc:'海南·三亚',     desc:'台农一号，金煌品种，香气浓郁',                       price:'¥38',  tag:'', tagZone:'eco', cat:'fruit', quantity:500, farmer:'三亚芒果基地',       rating:'4.5', season:'summer' },
  { id:'fruit_028', name:'芒果',           region:'西南', loc:'四川·攀枝花',   desc:'凯特品种，晚熟芒果，个头大，甜度高',                 price:'¥44',  tag:'', tagZone:'mountain', cat:'fruit', quantity:400,  farmer:'攀枝花芒果农庄',     rating:'4.7', season:'summer' },
  { id:'fruit_029', name:'芒果',           region:'华南', loc:'广西·百色',     desc:'桂热82号，国家地理标志，香甜纤维少',                  price:'¥35',  tag:'', tagZone:'eco', cat:'fruit', quantity:500,  farmer:'百色芒果合作社',     rating:'4.6', season:'summer' },
  { id:'fruit_030', name:'芒果',           region:'西南', loc:'云南·元江',     desc:'干热河谷，热量充足，糖分高',                         price:'¥32',  tag:'', tagZone:'mountain', cat:'fruit', quantity:420, farmer:'元江芒果山庄',       rating:'4.5', season:'summer' },

  // ==================== 荔枝 — 多区域（高糖，排除轻盈控卡区）====================
  { id:'fruit_031', name:'荔枝',           region:'华南', loc:'广东·茂名',     desc:'白糖罂品种，果肉晶莹，甜而不腻',                     price:'¥45',  tag:'', tagZone:'eco', cat:'fruit', quantity:920,  farmer:'茂名荔枝果园',       rating:'4.6', season:'summer' },
  { id:'fruit_032', name:'荔枝',           region:'华南', loc:'海南·海口',     desc:'妃子笑品种，红绿相间，清甜多汁',                     price:'¥42',  tag:'', tagZone:'eco', cat:'fruit', quantity:680,  farmer:'海口荔枝农庄',       rating:'4.5', season:'summer' },
  { id:'fruit_033', name:'荔枝',           region:'华东', loc:'福建·莆田',     desc:'兴化桂味，果肉爽脆，带有桂花香',                     price:'¥52',  tag:'', tagZone:'mountain', cat:'fruit', quantity:380, farmer:'莆田荔枝基地',       rating:'4.7', season:'summer' },
{ id:'fruit_039', name:'龙眼', region:'华南', loc:'广东·茂名', desc:'储良龙眼，果肉厚实，甜蜜多汁', price:'¥38', tag:'', tagZone:'eco', cat:'fruit', quantity:520, farmer:'茂名龙眼基地', rating:'4.6', season:'summer' },
{ id:'fruit_040', name:'龙眼', region:'华南', loc:'海南·海口', desc:'本地龙眼，夏季鲜果', price:'¥35', tag:'', tagZone:'eco', cat:'fruit', quantity:420, farmer:'海口龙眼农庄', rating:'4.5', season:'summer' },
{ id:'fruit_041', name:'火龙果', region:'华南', loc:'海南·三亚', desc:'红心火龙果，甜度高，花青素丰富', price:'¥28', tag:'', tagZone:'eco', cat:'fruit', quantity:680, farmer:'三亚火龙果基地', rating:'4.6', season:'summer' },
{ id:'fruit_042', name:'火龙果', region:'华南', loc:'广西·南宁', desc:'白心火龙果，清爽微甜', price:'¥25', tag:'', tagZone:'eco', cat:'fruit', quantity:520, farmer:'南宁火龙果农庄', rating:'4.5', season:'summer' },
{ id:'fruit_043', name:'菠萝', region:'华南', loc:'广东·徐闻', desc:'徐闻菠萝，国家地理标志，酸甜可口', price:'¥18', tag:'', tagZone:'eco', cat:'fruit', quantity:850, farmer:'徐闻菠萝基地', rating:'4.6', season:'summer' },
{ id:'fruit_044', name:'菠萝', region:'华南', loc:'海南·海口', desc:'夏季菠萝，当季鲜果', price:'¥16', tag:'', tagZone:'eco', cat:'fruit', quantity:680, farmer:'海口菠萝农场', rating:'4.4', season:'summer' },
{ id:'fruit_045', name:'椰子', region:'华南', loc:'海南·三亚', desc:'海南椰子，清凉解暑，夏季必备', price:'¥15', tag:'清爽无负', tagZone:'eco', cat:'fruit', quantity:420, farmer:'三亚椰子林', rating:'4.7', zone:'light-diet', season:'summer' },
{ id:'fruit_046', name:'杨梅', region:'华东', loc:'浙江·仙居', desc:'仙居杨梅，酸甜可口，夏季限定', price:'¥48', tag:'严选臻品', tagZone:'mountain', cat:'fruit', quantity:320, farmer:'仙居杨梅合作社', rating:'4.8', zone:'tech-farming', season:'summer' },
{ id:'fruit_047', name:'杨梅', region:'华中', loc:'湖南·靖州', desc:'靖州杨梅，国家地理标志', price:'¥52', tag:'严选臻品', tagZone:'mountain', cat:'fruit', quantity:280, farmer:'靖州杨梅基地', rating:'4.7', zone:'tech-farming', season:'summer' },
{ id:'fruit_048', name:'西瓜', region:'华中', loc:'河南·安阳', desc:'早熟西瓜，汁多解暑', price:'¥12', tag:'清爽无负', tagZone:'eco', cat:'fruit', quantity:850, farmer:'安阳西瓜基地', rating:'4.5', zone:'light-diet', season:'summer' },
{ id:'fruit_049', name:'哈密瓜', region:'西北', loc:'新疆·哈密', desc:'哈密瓜，脆甜可口', price:'¥22', tag:'严选臻品', tagZone:'mountain', cat:'fruit', quantity:580, farmer:'哈密瓜农庄', rating:'4.7', zone:'tech-farming', season:'summer' },

  // ==================== 柚子 — 多区域 ====================
  { id:'fruit_034', name:'蜜柚',           region:'华东', loc:'福建·平和',     desc:'琯溪蜜柚，三红品种，果肉饱满',                       price:'¥32',  tag:'', tagZone:'mountain', cat:'fruit', quantity:750,  farmer:'平和蜜柚合作社',     rating:'4.8', season:'autumn' },
  { id:'fruit_035', name:'蜜柚',           region:'华南', loc:'广东·梅州',     desc:'金柚之乡，甜度高，耐储藏，越放越甜',                 price:'¥35',  tag:'', tagZone:'mountain', cat:'fruit', quantity:620, farmer:'梅州金柚基地',       rating:'4.6', season:'autumn' },
  { id:'fruit_036', name:'蜜柚',           region:'西南', loc:'四川·资中',     desc:'天府蜜柚，皮薄肉厚，酸甜适口',                       price:'¥28',  tag:'', tagZone:'eco', cat:'fruit', quantity:480,  farmer:'资中蜜柚果园',       rating:'4.5', season:'autumn' },
  { id:'fruit_037', name:'沙田柚',         region:'华南', loc:'广西·容县',     desc:'沙田柚之乡，国家地理标志，耐储藏',                   price:'¥38',  tag:'', tagZone:'mountain', cat:'fruit', quantity:540, farmer:'容县沙田柚农庄',     rating:'4.7', season:'autumn' },
  { id:'fruit_038', name:'沙田柚',         region:'华东', loc:'江西·南康',     desc:'赣南脐橙带，柚子产区，甜度高',                       price:'¥30',  tag:'', tagZone:'eco', cat:'fruit', quantity:360,  farmer:'南康柚子基地',       rating:'4.4', season:'autumn' },

  // ==================== 土豆 — 多区域 ====================
  { id:'veg_001', name:'土豆',           region:'东北', loc:'黑龙江·讷河',   desc:'北方土豆，淀粉含量高，炖煮佳品',                     price:'¥12',  tag:'', tagZone:'eco', cat:'veg', quantity:400, farmer:'讷河土豆农场',       rating:'4.4', season:'autumn' },
  { id:'veg_002', name:'土豆',           region:'西北', loc:'甘肃·定西',     desc:'中国薯都，淀粉含量高，适合炖煮',                     price:'¥10',  tag:'', tagZone:'eco', cat:'veg', quantity:400, farmer:'定西薯业基地',       rating:'4.3', season:'autumn' },
  { id:'veg_003', name:'土豆',           region:'华北', loc:'内蒙古·武川',   desc:'沙地土豆，口感绵密，炖煮佳品',                       price:'¥11',  tag:'', tagZone:'eco', cat:'veg', quantity:400, farmer:'武川土豆农庄',       rating:'4.5', season:'autumn' },
  { id:'veg_004', name:'土豆',           region:'华东', loc:'山东·滕州',     desc:'中原土豆，春秋两季，品质优良',                       price:'¥13',  tag:'', tagZone:'eco', cat:'veg', quantity:400, farmer:'滕州土豆基地',       rating:'4.5', season:'all' },
  { id:'veg_005', name:'土豆',           region:'华中', loc:'湖北·恩施',     desc:'富硒土豆，山区种植，口感独特',                       price:'¥15',  tag:'', tagZone:'eco', cat:'veg', quantity:400,  farmer:'恩施富硒土豆庄',     rating:'4.6', season:'autumn' },

  // ==================== 山药 — 多区域 ====================
{ id:'veg_006', name:'山药', region:'华中', loc:'河南·焦作', desc:'垆土种植，药食同源，粉糯香甜', price:'¥42', tag:'温和调养', tagZone:'mountain', cat:'veg', quantity:420, farmer:'焦作山药合作社', rating:'4.8', zone:'wellness', season:'autumn' },
{ id:'veg_007', name:'山药', region:'华北', loc:'河北·蠡县', desc:'麻山药，炖汤佳品，健脾养胃', price:'¥35', tag:'温和调养', tagZone:'mountain', cat:'veg', quantity:280, farmer:'蠡县麻山药基地', rating:'4.6', zone:'wellness', season:'autumn' },
{ id:'veg_008', name:'山药', region:'华东', loc:'江苏·丰县', desc:'苏北山药，粘液丰富，口感软糯', price:'¥32', tag:'', tagZone:'eco', cat:'veg', quantity:320, farmer:'丰县淮山药农庄', rating:'4.5', zone:'wellness', season:'autumn' },
{ id:'veg_009', name:'山药', region:'华南', loc:'广西·桂平', desc:'西山药，粉糯可口，南方煲汤必备', price:'¥30', tag:'', tagZone:'eco', cat:'veg', quantity:240, farmer:'桂平山药种植基地', rating:'4.4', zone:'wellness', season:'autumn' },

  // ==================== 莲藕 — 多区域 ====================
  { id:'veg_010', name:'莲藕',           region:'华中', loc:'湖北·洪湖',     desc:'洪湖藕带，藕节粗壮，炖汤粉糯',                       price:'¥18',  tag:'', tagZone:'eco', cat:'veg', quantity:880,  farmer:'洪湖莲藕基地',       rating:'4.6', season:'autumn' },
  { id:'veg_011', name:'莲藕',           region:'华东', loc:'江苏·宝应',     desc:'里下河地区，塘藕种植，品质优良',                     price:'¥16',  tag:'', tagZone:'mountain', cat:'veg', quantity:620, farmer:'宝应莲藕农庄',       rating:'4.7', season:'autumn' },
  { id:'veg_012', name:'莲藕',           region:'西南', loc:'云南·澄江',     desc:'高原湖泊，藕丝细长，清脆爽口',                       price:'¥20',  tag:'', tagZone:'eco', cat:'veg', quantity:380,  farmer:'澄江莲藕合作社',       rating:'4.5', season:'autumn' },
  { id:'veg_013', name:'莲藕',           region:'华南', loc:'广西·柳江',     desc:'双季莲藕，个大孔白，煲汤佳品',                       price:'¥15',  tag:'', tagZone:'eco', cat:'veg', quantity:420,  farmer:'柳江莲藕种植场',     rating:'4.4', season:'autumn' },

  // ==================== 黑木耳 — 多区域 ====================
  { id:'veg_014', name:'黑木耳',         region:'东北', loc:'黑龙江·牡丹江', desc:'秋木耳，肉厚无根，泡发率高',                         price:'¥58',  tag:'', tagZone:'mountain', cat:'veg', quantity:480, farmer:'牡丹江木耳基地',     rating:'4.7', season:'autumn' },
  { id:'veg_015', name:'黑木耳',         region:'西北', loc:'陕西·柞水',     desc:'秦岭木耳，国家地理标志，品质优良',                   price:'¥52',  tag:'', tagZone:'mountain', cat:'veg', quantity:320, farmer:'柞水秦岭木耳庄',     rating:'4.8', season:'autumn' },
  { id:'veg_016', name:'黑木耳',         region:'西南', loc:'云南·保山',     desc:'高黎贡山，野生木耳，天然无污染',                     price:'¥62',  tag:'', tagZone:'mountain', cat:'veg', quantity:180, farmer:'保山野生菌农场',     rating:'4.9', season:'autumn' },
  { id:'veg_017', name:'黑木耳',         region:'华中', loc:'湖北·随州',     desc:'栎木种植，朵大肉厚，口感Q弹',                         price:'¥48',  tag:'', tagZone:'eco', cat:'veg', quantity:260, farmer:'随州栎木木耳基地',   rating:'4.5', season:'autumn' },

  // ==================== 银耳/菌菇 — 多区域 ====================
  { id:'veg_018', name:'银耳',           region:'华东', loc:'福建·古田',     desc:'古田银耳，丑耳品种，胶质丰富',                       price:'¥48',  tag:'', tagZone:'eco', cat:'veg', quantity:520, farmer:'古田银耳合作社',     rating:'4.6', season:'all' },
  { id:'veg_019', name:'银耳',           region:'西南', loc:'四川·通江',     desc:'椴木银耳，自然晾晒，糯性十足',                       price:'¥58',  tag:'', tagZone:'heritage', cat:'veg', quantity:280, farmer:'通江椴木银耳庄',     rating:'4.9', season:'all' },
  { id:'veg_020', name:'香菇',           region:'华中', loc:'河南·西峡',     desc:'伏牛山香菇，国家地理标志，花菇率高',                 price:'¥42',  tag:'', tagZone:'mountain', cat:'veg', quantity:680, farmer:'西峡香菇基地',       rating:'4.7', season:'all' },
  { id:'veg_021', name:'香菇',           region:'华东', loc:'浙江·庆元',     desc:'中国香菇之城，品质优良，香气浓郁',                   price:'¥45',  tag:'', tagZone:'mountain', cat:'veg', quantity:520, farmer:'庆元香菇博物馆',     rating:'4.8', season:'all' },
  { id:'veg_022', name:'香菇',           region:'华南', loc:'广东·信宜',     desc:'粤西香菇，生态种植，菇香浓郁',                       price:'¥38',  tag:'', tagZone:'eco', cat:'veg', quantity:340, farmer:'信宜香菇农庄',       rating:'4.5', season:'all' },

  // ==================== 腊肉 — 多区域 ====================
  { id:'meat_001', name:'腊肉',           region:'华中', loc:'湖南·凤凰',     desc:'传统熏制，柴火慢熏三十天，五花肉',                   price:'¥86',  tag:'', tagZone:'heritage', cat:'meat', quantity:580, farmer:'凤凰腊肉老字号',     rating:'4.9', season:'all' },
  { id:'meat_002', name:'腊肉',           region:'西南', loc:'四川·青城山',   desc:'柏枝熏制，咸香适口，川味经典',                       price:'¥78',  tag:'', tagZone:'heritage', cat:'meat', quantity:620, farmer:'青城山腊肉坊',       rating:'4.8', season:'all' },
  { id:'meat_003', name:'腊肉',           region:'华南', loc:'广东·清远',     desc:'广式腊肉，酒香浓郁，甜咸适口',                       price:'¥72',  tag:'', tagZone:'heritage', cat:'meat', quantity:380, farmer:'清远腊味厂',         rating:'4.7', season:'all' },
  { id:'meat_004', name:'腊肉',           region:'华东', loc:'浙江·金华',     desc:'金华火腿，咸香四溢，名扬天下',                       price:'¥98',  tag:'', tagZone:'heritage', cat:'meat', quantity:280, farmer:'金华火腿世家',       rating:'5.0', season:'all' },

  // ==================== 香肠/腊肠 — 多区域 ====================
  { id:'meat_005', name:'腊肠',           region:'华南', loc:'广东·东莞',     desc:'广式风味，酒香浓郁，煲仔饭灵魂',                     price:'¥64',  tag:'', tagZone:'heritage', cat:'meat', quantity:520, farmer:'东莞腊味行',         rating:'4.7', season:'all' },
  { id:'meat_006', name:'腊肠',           region:'西南', loc:'四川·成都',     desc:'麻辣口味，二八肥瘦，年货必备',                       price:'¥68',  tag:'', tagZone:'heritage', cat:'meat', quantity:480, farmer:'成都香肠老店',       rating:'4.8', season:'all' },
  { id:'meat_007', name:'腊肠',           region:'华东', loc:'江苏·如皋',     desc:'如皋火腿，技艺传承，咸香可口',                       price:'¥75',  tag:'', tagZone:'heritage', cat:'meat', quantity:260, farmer:'如皋腊味馆',         rating:'4.6', season:'all' },
  { id:'meat_008', name:'腊肠',           region:'华中', loc:'湖北·武汉',     desc:'川味麻辣，广式原味，组合装',                         price:'¥58',  tag:'', tagZone:'eco', cat:'meat', quantity:340, farmer:'武汉腊味坊',         rating:'4.5', season:'all' },

  // ==================== 羊肉 — 多区域 ====================
{ id:'meat_009', name:'羊肉', region:'华北', loc:'内蒙古·锡林郭勒',desc:'草原散养，吃野葱喝泉水，肉质鲜嫩', price:'¥118', tag:'清爽无负', tagZone:'mountain', cat:'meat', quantity:480, farmer:'锡林郭勒牧民', rating:'4.8', zone:'light-diet', season:'all' },
{ id:'meat_010', name:'羊肉', region:'西北', loc:'宁夏·盐池', desc:'滩羊，吃甘草喝碱水，不膻不腻', price:'¥125', tag:'', tagZone:'mountain', cat:'meat', quantity:360, farmer:'盐池滩羊养殖', rating:'4.9', zone:'light-diet', season:'all' },
{ id:'meat_011', name:'羊肉', region:'东北', loc:'新疆·阿勒泰', desc:'阿勒泰大尾羊，肉质紧实，炖煮鲜美', price:'¥98', tag:'清爽无负', tagZone:'mountain', cat:'meat', quantity:280, farmer:'阿勒泰牧业', rating:'4.7', zone:'light-diet', season:'all' },
{ id:'meat_012', name:'羊肉', region:'西南', loc:'青海·祁连', desc:'高原牦牛，半野生放养，低脂高蛋白', price:'¥135', tag:'清爽无负', tagZone:'mountain', cat:'meat', quantity:180, farmer:'祁连牦牛牧场', rating:'4.9', zone:'light-diet', season:'all' },

  // ==================== 牛肉 — 多区域 ====================
{ id:'meat_013', name:'牛肉', region:'东北', loc:'吉林·延边', desc:'延边黄牛，谷饲育肥，雪花纹路', price:'¥98', tag:'清爽无负', tagZone:'eco', cat:'meat', quantity:520, farmer:'延边黄牛基地', rating:'4.6', zone:'light-diet', season:'all' },
{ id:'meat_014', name:'牛肉', region:'华北', loc:'内蒙古·科尔沁', desc:'科尔沁草原，谷饲育肥，肉质细嫩', price:'¥95', tag:'', tagZone:'eco', cat:'meat', quantity:580, farmer:'科尔沁牧业', rating:'4.7', zone:'light-diet', season:'all' },
{ id:'meat_015', name:'牛肉', region:'西北', loc:'甘肃·张掖', desc:'祁连山草原，牦牛与黄牛混养，品质优良', price:'¥88', tag:'清爽无负', tagZone:'mountain', cat:'meat', quantity:320, farmer:'张掖牦牛养殖', rating:'4.8', zone:'light-diet', season:'all' },
{ id:'meat_016', name:'牛肉', region:'西南', loc:'四川·红原', desc:'川西高原，牦牛放养，天然牧场', price:'¥108', tag:'清爽无负', tagZone:'mountain', cat:'meat', quantity:240, farmer:'红原牦牛合作社', rating:'4.9', zone:'light-diet', season:'all' },

  // ==================== 土鸡蛋 — 多区域 ====================
{ id:'meat_017', name:'土鸡蛋', region:'西南', loc:'贵州·黔东南', desc:'深山散养土鸡，五谷喂养，蛋黄橙黄', price:'¥28', tag:'清爽无负', tagZone:'eco', cat:'meat', quantity:400, farmer:'黔东南土鸡农场', rating:'4.6', zone:'light-diet', season:'all' },
{ id:'meat_018', name:'土鸡蛋', region:'华东', loc:'安徽·黄山', desc:'山林散养，鸡食虫草，蛋黄饱满', price:'¥32', tag:'', tagZone:'mountain', cat:'meat', quantity:400, farmer:'黄山散养鸡基地', rating:'4.7', zone:'light-diet', season:'all' },
{ id:'meat_019', name:'土鸡蛋', region:'华南', loc:'广西·灵山', desc:'果园散养，鸡群健康，品质优良', price:'¥26', tag:'', tagZone:'eco', cat:'meat', quantity:400, farmer:'灵山果园鸡场', rating:'4.5', zone:'light-diet', season:'all' },
{ id:'meat_020', name:'土鸡蛋', region:'华中', loc:'湖北·随州', desc:'农家散养，谷物喂养，营养丰富', price:'¥24', tag:'清爽无负', tagZone:'eco', cat:'meat', quantity:400, farmer:'随州农家鸡舍', rating:'4.4', zone:'light-diet', season:'all' },
{ id:'meat_021', name:'土鸡蛋', region:'华北', loc:'河北·太行山', desc:'太行山区，柴鸡散养，口感香醇', price:'¥30', tag:'清爽无负', tagZone:'mountain', cat:'meat', quantity:380, farmer:'太行柴鸡养殖户', rating:'4.6', zone:'light-diet', season:'all' },

  // ==================== 蜂蜜 — 多区域 ====================
  { id:'meat_022', name:'土蜂蜜',         region:'西南', loc:'云南·大理',     desc:'苍山野蜂蜜，自然酿造，一年一采',                     price:'¥128', tag:'', tagZone:'mountain', cat:'other', quantity:180, farmer:'大理苍山蜂业',       rating:'4.9', season:'autumn' },
  { id:'meat_023', name:'土蜂蜜',         region:'东北', loc:'黑龙江·饶河',   desc:'东北黑蜂，国家保护蜂种，椴树蜜源',                   price:'¥98',  tag:'', tagZone:'mountain', cat:'other', quantity:220, farmer:'饶河黑蜂养殖',       rating:'4.8', season:'summer' },
  { id:'meat_024', name:'土蜂蜜',         region:'西北', loc:'陕西·秦岭',     desc:'秦岭深山，百花蜜源，纯净无污染',                     price:'¥88',  tag:'', tagZone:'mountain', cat:'other', quantity:260, farmer:'秦岭深山蜂场',       rating:'4.7', season:'autumn' },
  { id:'meat_025', name:'土蜂蜜',         region:'华中', loc:'湖北·神农架',   desc:'神农架原始森林，野花蜂蜜，天然酿造',                 price:'¥108', tag:'', tagZone:'mountain', cat:'other', quantity:140, farmer:'神农架野花蜂蜜',     rating:'5.0', season:'autumn' },

  // ==================== 海参 — 多区域 ====================
  { id:'fish_001', name:'海参',           region:'东北', loc:'辽宁·大连',     desc:'野生刺参，深海捕捞，胶质丰厚',                       price:'¥220', tag:'', tagZone:'mountain', cat:'fish', quantity:180, farmer:'大连海参捕捞队',     rating:'4.9', season:'autumn' },
  { id:'fish_002', name:'海参',           region:'华东', loc:'山东·威海',     desc:'底播增殖，肉质肥厚，营养价值高',                     price:'¥198', tag:'', tagZone:'mountain', cat:'fish', quantity:240, farmer:'威海海参养殖',       rating:'4.8', season:'autumn' },
  { id:'fish_003', name:'海参',           region:'华北', loc:'河北·秦皇岛',   desc:'北纬39度，海洋牧场，品质优良',                       price:'¥188', tag:'', tagZone:'eco', cat:'fish', quantity:120, farmer:'秦皇岛海参基地',     rating:'4.7', season:'autumn' },

  // ==================== 大闸蟹 — 多区域 ====================
  { id:'fish_004', name:'大闸蟹',         region:'华东', loc:'江苏·阳澄湖',   desc:'青背白肚，金爪黄毛，蟹黄饱满',                     price:'¥188', tag:'', tagZone:'eco', cat:'fish', quantity:320, farmer:'阳澄湖蟹业',         rating:'4.9', season:'autumn' },
  { id:'fish_005', name:'大闸蟹',         region:'华东', loc:'江苏·固城湖',   desc:'膏肥黄满，肉质鲜甜，性价比高',                     price:'¥138', tag:'', tagZone:'eco', cat:'fish', quantity:420, farmer:'固城湖蟹农',         rating:'4.6', season:'autumn' },
  { id:'fish_006', name:'大闸蟹',         region:'华东', loc:'江苏·洪泽湖',   desc:'清水养殖，生态好蟹，肉质鲜嫩',                     price:'¥128', tag:'', tagZone:'eco', cat:'fish', quantity:380, farmer:'洪泽湖蟹场',         rating:'4.5', season:'autumn' },
  { id:'fish_007', name:'大闸蟹',         region:'华东', loc:'安徽·女山湖',   desc:'火山喷发形成的湖泊，水质清澈',                       price:'¥118', tag:'', tagZone:'mountain', cat:'fish', quantity:280, farmer:'女山湖蟹庄',         rating:'4.7', season:'autumn' },

  // ==================== 带鱼 — 多区域 ====================
{ id:'fish_008', name:'带鱼', region:'华东', loc:'浙江·舟山', desc:'雷达网捕捞，眼睛明亮，肉质厚实', price:'¥56', tag:'清爽无负', tagZone:'mountain', cat:'fish', quantity:580, farmer:'舟山带鱼渔民', rating:'4.7', zone:'light-diet', season:'all' },
{ id:'fish_009', name:'带鱼', region:'华东', loc:'山东·青岛', desc:'黄海野生，肉质细腻，鲜美无腥', price:'¥52', tag:'清爽无负', tagZone:'mountain', cat:'fish', quantity:480, farmer:'青岛海鲜市场', rating:'4.5', zone:'light-diet', season:'all' },
{ id:'fish_010', name:'带鱼', region:'华北', loc:'天津·滨海新区', desc:'渤海带鱼，个小味鲜，传统美味', price:'¥42', tag:'清爽无负', tagZone:'eco', cat:'fish', quantity:320, farmer:'滨海渔港', rating:'4.4', zone:'light-diet', season:'all' },

  // ==================== 对虾/白虾 — 多区域 ====================
{ id:'fish_011', name:'对虾', region:'华南', loc:'广东·湛江', desc:'南美白对虾，活冻锁鲜，虾肉Q弹', price:'¥72', tag:'', tagZone:'eco', cat:'fish', quantity:520, farmer:'湛江对虾养殖', rating:'4.5', zone:'light-diet', season:'all' },
{ id:'fish_012', name:'对虾', region:'华东', loc:'山东·日照', desc:'黄海对虾，个头均匀，虾肉鲜美', price:'¥68', tag:'清爽无负', tagZone:'mountain', cat:'fish', quantity:420, farmer:'日照对虾基地', rating:'4.6', zone:'light-diet', season:'all' },
{ id:'fish_013', name:'对虾', region:'华北', loc:'河北·黄骅', desc:'渤海湾对虾，盐田养殖，口感鲜甜', price:'¥62', tag:'清爽无负', tagZone:'eco', cat:'fish', quantity:320, farmer:'黄骅对虾养殖场', rating:'4.5', zone:'light-diet', season:'all' },
{ id:'fish_014', name:'对虾', region:'东北', loc:'辽宁·东港', desc:'朝鲜半岛海域，野生对虾，品质上乘', price:'¥78', tag:'', tagZone:'mountain', cat:'fish', quantity:220, farmer:'东港对虾捕捞', rating:'4.7', zone:'light-diet', season:'all' },

  // ==================== 黄鱼/大黄鱼 — 多区域 ====================
{ id:'fish_015', name:'大黄鱼', region:'华东', loc:'福建·宁德', desc:'深海网箱养殖，肉质蒜瓣状，刺少肉多', price:'¥78', tag:'清爽无负', tagZone:'mountain', cat:'fish', quantity:420, farmer:'宁德大黄鱼养殖', rating:'4.6', zone:'light-diet', season:'all' },
{ id:'fish_016', name:'大黄鱼', region:'华东', loc:'浙江·舟山', desc:'东海野生大黄鱼，渔港直发', price:'¥98', tag:'清爽无负', tagZone:'mountain', cat:'fish', quantity:280, farmer:'舟山野生渔业', rating:'4.8', zone:'light-diet', season:'all' },
{ id:'fish_017', name:'小黄鱼', region:'华东', loc:'江苏·吕四', desc:'黄海野生，小鱼大味，干煎红烧皆宜', price:'¥38', tag:'清爽无负', tagZone:'eco', cat:'fish', quantity:520, farmer:'吕四渔港', rating:'4.5', zone:'light-diet', season:'all' },
{ id:'fish_018', name:'小黄鱼', region:'华北', loc:'山东·威海', desc:'威海海域，新鲜捕捞，沿海家常美味', price:'¥35', tag:'清爽无负', tagZone:'eco', cat:'fish', quantity:380, farmer:'威海海鲜市场', rating:'4.4', zone:'light-diet', season:'all' },

  // ==================== 银鱼 — 多区域 ====================
{ id:'fish_019', name:'银鱼', region:'华东', loc:'江苏·太湖', desc:'太湖三白之一，通体透明，鲜美无腥', price:'¥88', tag:'清爽无负', tagZone:'eco', cat:'fish', quantity:320, farmer:'太湖银鱼渔民', rating:'4.6', zone:'light-diet', season:'summer' },
{ id:'fish_020', name:'银鱼', region:'华东', loc:'安徽·巢湖', desc:'巢湖特产银鱼，细小如银，营养丰富', price:'¥78', tag:'清爽无负', tagZone:'eco', cat:'fish', quantity:240, farmer:'巢湖银鱼养殖', rating:'4.5', zone:'light-diet', season:'summer' },
{ id:'fish_021', name:'银鱼', region:'华中', loc:'湖南·洞庭湖', desc:'洞庭湖银鱼，历史悠久，品质上乘', price:'¥92', tag:'清爽无负', tagZone:'mountain', cat:'fish', quantity:180, farmer:'洞庭湖渔家', rating:'4.7', zone:'light-diet', season:'summer' },

  // ==================== 生蚝/蚝 — 多区域 ====================
{ id:'fish_022', name:'生蚝', region:'华东', loc:'山东·乳山', desc:'国家地理标志，肥美多汁，刺身级品质', price:'¥85', tag:'清爽无负', tagZone:'mountain', cat:'fish', quantity:620, farmer:'乳山生蚝基地', rating:'4.8', zone:'light-diet', season:'winter' },
{ id:'fish_023', name:'生蚝', region:'华南', loc:'广东·程村', desc:'程村蚝场，蚝肉饱满，蒜蓉烤最佳', price:'¥75', tag:'清爽无负', tagZone:'eco', cat:'fish', quantity:540, farmer:'程村蚝业', rating:'4.6', zone:'light-diet', season:'winter' },
{ id:'fish_024', name:'生蚝', region:'华南', loc:'广西·钦州', desc:'茅尾海养殖，肥美多汁，带壳发货', price:'¥68', tag:'清爽无负', tagZone:'eco', cat:'fish', quantity:480, farmer:'钦州生蚝养殖', rating:'4.5', zone:'light-diet', season:'winter' },
{ id:'fish_025', name:'生蚝', region:'东北', loc:'辽宁·庄河', desc:'黄海北部，野生生蚝，个头硕大', price:'¥72', tag:'清爽无负', tagZone:'mountain', cat:'fish', quantity:260, farmer:'庄河野生蚝场', rating:'4.7', zone:'light-diet', season:'winter' },
{ id:'veg_new_01', name:'生菜', region:'华北', loc:'北京·大兴', desc:'水培生菜，洁净无污染', price:'¥8', tag:'严选臻品', tagZone:'eco', cat:'veg', quantity:520, farmer:'大兴水培基地', rating:'4.6', zone:'tech-farming', season:'all' },
{ id:'veg_new_02', name:'罗马生菜', region:'华东', loc:'上海·崇明', desc:'欧盟标准种植，脆嫩爽口', price:'¥10', tag:'严选臻品', tagZone:'eco', cat:'veg', quantity:380, farmer:'崇明生菜农庄', rating:'4.6', zone:'tech-farming', season:'all' },
{ id:'veg_new_03', name:'菠菜', region:'华北', loc:'河北·永年', desc:'水培菠菜，无土栽培', price:'¥7', tag:'严选臻品', tagZone:'eco', cat:'veg', quantity:680, farmer:'永年水培农场', rating:'4.6', zone:'tech-farming', season:'all' },
{ id:'veg_new_04', name:'西蓝花', region:'华东', loc:'浙江·嘉善', desc:'智能温室种植', price:'¥12', tag:'严选臻品', tagZone:'eco', cat:'veg', quantity:420, farmer:'嘉善西兰花基地', rating:'4.6', zone:'tech-farming', season:'all' },
{ id:'veg_new_05', name:'彩椒', region:'华北', loc:'山东·寿光', desc:'红黄彩椒，无土栽培', price:'¥18', tag:'严选臻品', tagZone:'eco', cat:'veg', quantity:320, farmer:'寿光彩椒农庄', rating:'4.6', zone:'tech-farming', season:'all' },
{ id:'veg_new_06', name:'小番茄', region:'华南', loc:'海南·三亚', desc:'樱桃番茄，口感甜', price:'¥16', tag:'严选臻品', tagZone:'eco', cat:'veg', quantity:580, farmer:'三亚番茄基地', rating:'4.6', zone:'tech-farming', season:'winter' },
{ id:'veg_new_07', name:'黄瓜', region:'东北', loc:'辽宁·凌源', desc:'日光温室黄瓜', price:'¥6', tag:'严选臻品', tagZone:'eco', cat:'veg', quantity:850, farmer:'凌源黄瓜农庄', rating:'4.6', zone:'tech-farming', season:'all' },
{ id:'veg_new_08', name:'芦笋', region:'华东', loc:'江苏·徐州', desc:'绿色认证，嫩茎粗壮', price:'¥22', tag:'严选臻品', tagZone:'eco', cat:'veg', quantity:180, farmer:'徐州芦笋基地', rating:'4.6', zone:'tech-farming', season:'spring' },
{ id:'veg_new_09', name:'秋葵', region:'华中', loc:'湖北·嘉鱼', desc:'嫩秋葵，营养佳品', price:'¥14', tag:'严选臻品', tagZone:'eco', cat:'veg', quantity:260, farmer:'嘉鱼秋葵农场', rating:'4.6', zone:'tech-farming', season:'summer' },
{ id:'veg_new_10', name:'杏鲍菇', region:'华北', loc:'河北·保定', desc:'工厂化生产', price:'¥12', tag:'', tagZone:'eco', cat:'veg', quantity:480, farmer:'保定杏鲍菇基地', rating:'4.6', zone:'tech-farming', season:'all' },
{ id:'veg_new_11', name:'蟹味菇', region:'华东', loc:'福建·古田', desc:'蟹味菇，有海鲜风味', price:'¥14', tag:'严选臻品', tagZone:'eco', cat:'veg', quantity:360, farmer:'古田蟹味菇庄', rating:'4.6', zone:'tech-farming', season:'all' },
  { id:'fruit_new_01', name:'草莓', region:'东北', loc:'辽宁·丹东', desc:'红颜草莓，个大味甜', price:'¥68', tag:'', tagZone:'eco', cat:'fruit', quantity:380, farmer:'丹东草莓基地', rating:'4.9', season:'spring' },
  { id:'fruit_new_02', name:'草莓', region:'华东', loc:'山东·潍坊', desc:'甜查理草莓', price:'¥48', tag:'', tagZone:'eco', cat:'fruit', quantity:520, farmer:'潍坊草莓农庄', rating:'4.7', season:'spring' },
  { id:'fruit_new_03', name:'蓝莓', region:'东北', loc:'吉林·白山', desc:'野生蓝莓', price:'¥78', tag:'', tagZone:'eco', cat:'fruit', quantity:280, farmer:'白山蓝莓基地', rating:'4.8', season:'spring' },
  { id:'fruit_new_04', name:'蓝莓', region:'华东', loc:'江苏·南京', desc:'人工培育蓝莓', price:'¥58', tag:'', tagZone:'eco', cat:'fruit', quantity:320, farmer:'南京蓝莓农场', rating:'4.6', season:'spring' },
{ id:'meat_new_01', name:'鸡胸肉', region:'华北', loc:'山东·聊城', desc:'智能化养殖，低脂高蛋白', price:'¥32', tag:'严选臻品', tagZone:'eco', cat:'meat', quantity:680, farmer:'聊城肉鸡基地', rating:'4.6', zone:'tech-farming', season:'all' },
{ id:'meat_new_02', name:'瘦牛肉', region:'东北', loc:'吉林·延边', desc:'延边黄牛，瘦肉型', price:'¥68', tag:'', tagZone:'eco', cat:'meat', quantity:420, farmer:'延边黄牛农场', rating:'4.6', zone:'tech-farming', season:'all' },
{ id:'meat_new_03', name:'瘦牛肉', region:'华北', loc:'内蒙古·通辽', desc:'科尔沁牛，蛋白质高', price:'¥72', tag:'严选臻品', tagZone:'eco', cat:'meat', quantity:380, farmer:'通辽肉牛基地', rating:'4.6', zone:'tech-farming', season:'all' },
{ id:'fish_new_01', name:'鲈鱼', region:'华东', loc:'江苏·盐城', desc:'工厂化循环水养殖', price:'¥38', tag:'严选臻品', tagZone:'eco', cat:'fish', quantity:520, farmer:'盐城鲈鱼养殖基地', rating:'4.6', zone:'tech-farming', season:'all' },
{ id:'fish_new_02', name:'黑鱼', region:'华南', loc:'广东·佛山', desc:'池塘养殖，肉质紧实', price:'¥42', tag:'严选臻品', tagZone:'eco', cat:'fish', quantity:380, farmer:'佛山黑鱼养殖场', rating:'4.6', zone:'tech-farming', season:'all' },
{ id:'fish_new_03', name:'虾仁', region:'华东', loc:'浙江·舟山', desc:'新鲜虾仁，无添加', price:'¥58', tag:'清爽无负', tagZone:'eco', cat:'fish', quantity:420, farmer:'舟山虾仁渔民', rating:'4.8', zone:'light-diet', season:'all' },
{ id:'fish_new_04', name:'巴沙鱼', region:'华南', loc:'广东·湛江', desc:'越南巴沙鱼，低脂无刺', price:'¥28', tag:'清爽无负', tagZone:'eco', cat:'fish', quantity:680, farmer:'湛江巴沙鱼基地', rating:'4.4', zone:'light-diet', season:'all' },
{ id:'fish_new_05', name:'龙利鱼', region:'华北', loc:'山东·青岛', desc:'龙利鱼柳，无骨无刺', price:'¥48', tag:'清爽无负', tagZone:'eco', cat:'fish', quantity:320, farmer:'青岛龙利鱼场', rating:'4.6', zone:'light-diet', season:'all' },
{ id:'veg_ld_01', name:'白花菜', region:'华东', loc:'浙江·温州', desc:'白色花菜，低卡路里', price:'¥10', tag:'', tagZone:'eco', cat:'veg', quantity:420, farmer:'温州花菜基地', rating:'4.5', zone:'light-diet', season:'all' },
{ id:'veg_ld_02', name:'苦菊', region:'华北', loc:'河北·张家口', desc:'苦菊菜，清热去火', price:'¥8', tag:'清爽无负', tagZone:'eco', cat:'veg', quantity:320, farmer:'张家口苦菊农场', rating:'4.4', zone:'light-diet', season:'summer' },
{ id:'veg_ld_03', name:'冬瓜', region:'华中', loc:'湖南·浏阳', desc:'薄皮冬瓜，含水量高', price:'¥5', tag:'清爽无负', tagZone:'eco', cat:'veg', quantity:680, farmer:'浏阳冬瓜基地', rating:'4.3', zone:'light-diet', season:'summer' },
{ id:'veg_ld_04', name:'丝瓜', region:'华东', loc:'江苏·南通', desc:'丝瓜络，爽滑可口', price:'¥7', tag:'清爽无负', tagZone:'eco', cat:'veg', quantity:480, farmer:'南通丝瓜农庄', rating:'4.5', zone:'light-diet', season:'spring' },
{ id:'veg_ld_05', name:'芹菜', region:'华北', loc:'山东·济南', desc:'西芹，粗纤维蔬菜', price:'¥6', tag:'', tagZone:'eco', cat:'veg', quantity:580, farmer:'济南芹菜基地', rating:'4.4', zone:'light-diet', season:'all' },
{ id:'veg_ld_06', name:'金针菇', region:'华东', loc:'福建·古田', desc:'金针菇，菌菇类低卡', price:'¥10', tag:'清爽无负', tagZone:'eco', cat:'veg', quantity:520, farmer:'古田金针菇场', rating:'4.6', zone:'light-diet', season:'all' },
{ id:'fruit_ld_01', name:'树莓', region:'东北', loc:'黑龙江·大兴安岭', desc:'野生树莓，酸甜可口', price:'¥68', tag:'清爽无负', tagZone:'eco', cat:'fruit', quantity:180, farmer:'大兴安岭浆果', rating:'4.7', zone:'light-diet', season:'spring' },
{ id:'fruit_ld_02', name:'猕猴桃', region:'华中', loc:'陕西·周至', desc:'徐香猕猴桃，维C之王', price:'¥35', tag:'清爽无负', tagZone:'eco', cat:'fruit', quantity:420, farmer:'周至猕猴桃基地', rating:'4.6', zone:'light-diet', season:'autumn' },
{ id:'fruit_ld_03', name:'西柚', region:'华南', loc:'福建·厦门', desc:'红心西柚，糖分低', price:'¥18', tag:'', tagZone:'eco', cat:'fruit', quantity:280, farmer:'厦门西柚农场', rating:'4.5', zone:'light-diet', season:'winter' },
{ id:'fruit_ld_04', name:'柠檬', region:'西南', loc:'四川·安岳', desc:'安岳柠檬，国家地理标志', price:'¥12', tag:'清爽无负', tagZone:'eco', cat:'fruit', quantity:380, farmer:'安岳柠檬合作社', rating:'4.6', zone:'light-diet', season:'winter' },
{ id:'meat_ld_01', name:'去皮鸡腿肉', region:'华北', loc:'山东·德州', desc:'去皮鸡腿，低脂高蛋白', price:'¥28', tag:'清爽无负', tagZone:'eco', cat:'meat', quantity:580, farmer:'德州肉鸡场', rating:'4.5', zone:'light-diet', season:'all' },
{ id:'meat_ld_02', name:'牛腱子', region:'西北', loc:'宁夏·固原', desc:'牛腱子肉，瘦而不柴', price:'¥75', tag:'清爽无负', tagZone:'eco', cat:'meat', quantity:280, farmer:'固原黄牛基地', rating:'4.7', zone:'light-diet', season:'all' },
{ id:'meat_ld_03', name:'牛里脊', region:'东北', loc:'黑龙江·齐齐哈尔', desc:'牛里脊，最嫩部位', price:'¥88', tag:'清爽无负', tagZone:'eco', cat:'meat', quantity:220, farmer:'齐齐哈尔牛业', rating:'4.8', zone:'light-diet', season:'all' },
{ id:'meat_ld_04', name:'鸡蛋', region:'华北', loc:'河北·肃宁', desc:'普通鸡蛋，营养丰富', price:'¥12', tag:'清爽无负', tagZone:'eco', cat:'meat', quantity:680, farmer:'肃宁养鸡场', rating:'4.3', zone:'light-diet', season:'all' },
{ id:'meat_ld_05', name:'鹌鹑蛋', region:'华东', loc:'江苏·南通', desc:'鹌鹑蛋，小而精致', price:'¥18', tag:'', tagZone:'eco', cat:'meat', quantity:420, farmer:'南通鹌鹑养殖场', rating:'4.5', zone:'light-diet', season:'all' },
{ id:'meat_ld_06', name:'低脂牛奶', region:'华北', loc:'内蒙古·呼和浩特', desc:'低脂纯牛奶，脂肪含量1.5%', price:'¥22', tag:'清爽无负', tagZone:'eco', cat:'meat', quantity:680, farmer:'呼和浩特乳业', rating:'4.6', zone:'light-diet', season:'all' },
{ id:'meat_ld_07', name:'无糖酸奶', region:'华北', loc:'北京·昌平', desc:'无糖酸奶，肠道健康', price:'¥15', tag:'清爽无负', tagZone:'eco', cat:'meat', quantity:520, farmer:'昌平酸奶厂', rating:'4.4', zone:'light-diet', season:'all' },
{ id:'meat_ld_08', name:'嫩豆腐', region:'华东', loc:'安徽·淮南', desc:'淮南嫩豆腐，豆香浓郁', price:'¥6', tag:'清爽无负', tagZone:'eco', cat:'meat', quantity:780, farmer:'淮南豆腐坊', rating:'4.5', zone:'light-diet', season:'all' },
{ id:'meat_ld_09', name:'豆干', region:'华中', loc:'湖南·武冈', desc:'武冈豆干，豆香四溢', price:'¥14', tag:'', tagZone:'eco', cat:'meat', quantity:420, farmer:'武冈豆干厂', rating:'4.6', zone:'light-diet', season:'all' },
{ id:'meat_ld_10', name:'千张', region:'华东', loc:'江苏·南京', desc:'南京千张，薄如纸张', price:'¥12', tag:'清爽无负', tagZone:'eco', cat:'meat', quantity:380, farmer:'南京豆制品厂', rating:'4.4', zone:'light-diet', season:'all' },
{ id:'fish_ld_01', name:'鳕鱼', region:'东北', loc:'辽宁·大连', desc:'银鳕鱼，肉质细嫩', price:'¥58', tag:'', tagZone:'eco', cat:'fish', quantity:280, farmer:'大连鳕鱼捕捞', rating:'4.7', zone:'light-diet', season:'winter' },
{ id:'fish_ld_02', name:'草鱼块', region:'华中', loc:'湖北·武汉', desc:'新鲜草鱼，分切块', price:'¥22', tag:'', tagZone:'eco', cat:'fish', quantity:420, farmer:'武汉草鱼养殖', rating:'4.4', zone:'light-diet', season:'all' },
{ id:'fish_ld_03', name:'基围虾', region:'华南', loc:'广东·广州', desc:'基围虾，活虾速冻', price:'¥52', tag:'清爽无负', tagZone:'eco', cat:'fish', quantity:380, farmer:'广州对虾养殖', rating:'4.6', zone:'light-diet', season:'all' },
{ id:'fish_ld_04', name:'白虾', region:'华东', loc:'山东·烟台', desc:'白对虾，口感鲜甜', price:'¥48', tag:'清爽无负', tagZone:'eco', cat:'fish', quantity:320, farmer:'烟台白虾场', rating:'4.5', zone:'light-diet', season:'all' },
{ id:'fish_ld_05', name:'扇贝肉', region:'东北', loc:'辽宁·大连', desc:'新鲜扇贝，蒜蓉粉丝必备', price:'¥42', tag:'', tagZone:'eco', cat:'fish', quantity:280, farmer:'大连扇贝捕捞', rating:'4.7', zone:'light-diet', season:'all' },
{ id:'fish_ld_06', name:'蛏子', region:'华东', loc:'浙江·宁波', desc:'鲜活蛏子，海鲜美味', price:'¥32', tag:'清爽无负', tagZone:'eco', cat:'fish', quantity:360, farmer:'宁波蛏子养殖', rating:'4.5', zone:'light-diet', season:'summer' },
{ id:'fish_ld_07', name:'鲜贝', region:'华北', loc:'河北·秦皇岛', desc:'新鲜贝类，煲汤佳品', price:'¥38', tag:'清爽无负', tagZone:'eco', cat:'fish', quantity:280, farmer:'秦皇岛贝类场', rating:'4.6', zone:'light-diet', season:'all' },
{ id:'veg_wl_01', name:'生姜', region:'华南', loc:'广东·阳江', desc:'阳江生姜，温中散寒', price:'¥12', tag:'温和调养', tagZone:'eco', cat:'veg', quantity:420, farmer:'阳江生姜基地', rating:'4.5', zone:'wellness', season:'all' },
{ id:'veg_wl_02', name:'小黄姜', region:'华中', loc:'云南·罗平', desc:'小黄姜，药食同源', price:'¥18', tag:'温和调养', tagZone:'eco', cat:'veg', quantity:280, farmer:'罗平小黄姜庄', rating:'4.7', zone:'wellness', season:'all' },
{ id:'veg_wl_03', name:'大蒜', region:'华北', loc:'山东·金乡', desc:'金乡大蒜，抗菌消炎', price:'¥8', tag:'温和调养', tagZone:'eco', cat:'veg', quantity:680, farmer:'金乡大蒜基地', rating:'4.4', zone:'wellness', season:'all' },
{ id:'fruit_wl_01', name:'红枣', region:'西北', loc:'新疆·若羌', desc:'若羌红枣，个小糖心', price:'¥45', tag:'温和调养', tagZone:'eco', cat:'fruit', quantity:320, farmer:'若羌红枣合作社', rating:'4.8', zone:'wellness', season:'autumn' },
{ id:'fruit_wl_02', name:'鲜枸杞', region:'西北', loc:'宁夏·中卫', desc:'宁夏枸杞，滋补养生', price:'¥52', tag:'', tagZone:'eco', cat:'fruit', quantity:180, farmer:'中卫枸杞基地', rating:'4.9', zone:'wellness', season:'summer' },
{ id:'fish_wl_01', name:'黄鳝', region:'华中', loc:'湖北·武汉', desc:'野生黄鳝，滋补佳品', price:'¥48', tag:'温和调养', tagZone:'eco', cat:'fish', quantity:220, farmer:'武汉黄鳝养殖', rating:'4.6', zone:'wellness', season:'summer' },
{ id:'fish_wl_02', name:'泥鳅', region:'华东', loc:'江苏·苏州', desc:'太湖泥鳅，营养丰富', price:'¥28', tag:'温和调养', tagZone:'eco', cat:'fish', quantity:320, farmer:'苏州泥鳅场', rating:'4.5', zone:'wellness', season:'summer' },
{ id:'fish_wl_03', name:'鲫鱼', region:'华北', loc:'河南·郑州', desc:'新鲜鲫鱼，煲汤鲜美', price:'¥22', tag:'温和调养', tagZone:'eco', cat:'fish', quantity:420, farmer:'郑州鲫鱼养殖', rating:'4.6', season:'all' },

  // ==================== 认养产品 ====================
  { id:'fa001', name:'云南古树核桃认养', region:'西南', loc:'云南·昆明', desc:'120年古树核桃认养，壳薄仁满，清香甘甜', price:'¥688', tag:'严选臻品', tagZone:'mountain', cat:'adopt', quantity:999, farmer:'昆明古树核桃合作社', rating:'4.8', season:'autumn' },
  { id:'fa002', name:'东北五常大米认养', region:'东北', loc:'黑龙江·五常', desc:'正宗五常稻花香，有机种植，农家直发', price:'¥1288', tag:'严选臻品', tagZone:'mountain', cat:'adopt', quantity:999, farmer:'五常稻农老李', rating:'4.9', season:'autumn' },
  { id:'fa003', name:'内蒙古草原羊认养', region:'华北', loc:'内蒙古·锡盟', desc:'草原散养羊，吃野葱喝泉水，肉质鲜嫩', price:'¥3888', tag:'严选臻品', tagZone:'mountain', cat:'adopt', quantity:999, farmer:'锡林郭勒牧民', rating:'4.8', season:'autumn' },
  { id:'fa004', name:'福建古茶树认养', region:'华东', loc:'福建·武夷山', desc:'武夷山古茶树认养，头采春茶，岩骨花香', price:'¥2288', tag:'严选臻品', tagZone:'mountain', cat:'adopt', quantity:999, farmer:'武夷山茶农', rating:'4.9', season:'spring' },
  { id:'fa005', name:'新疆有机红枣认养', region:'西北', loc:'新疆·和田', desc:'和田有机红枣认养，每天三颗枣，青春永不老', price:'¥888', tag:'严选臻品', tagZone:'mountain', cat:'adopt', quantity:999, farmer:'和田红枣基地', rating:'4.7', season:'autumn' },
  { id:'fa006', name:'青海青稞田认养', region:'西南', loc:'青海·海北', desc:'青藏高原有机青稞田认养，高原净土，健康之选', price:'¥1688', tag:'严选臻品', tagZone:'mountain', cat:'adopt', quantity:999, farmer:'海北青稞农场', rating:'4.8', season:'autumn' },

  // ==================== 春季时令新品 ====================
  { id:'sp_f_01', name:'枇杷', region:'西南', loc:'四川·米易', desc:'米易枇杷，春季第一果', price:'¥28', tag:'时令鲜果', tagZone:'eco', cat:'fruit', quantity:320, farmer:'米易枇杷合作社', rating:'4.7', zone:'tech-farming', season:'spring' },
  { id:'sp_f_02', name:'桑葚', region:'华北', loc:'山东·潍坊', desc:'大棚桑葚，紫黑饱满', price:'¥18', tag:'', tagZone:'eco', cat:'fruit', quantity:280, farmer:'潍坊桑葚基地', rating:'4.5', zone:'tech-farming', season:'spring' },
  { id:'sp_f_03', name:'樱桃', region:'东北', loc:'辽宁·大连', desc:'美早樱桃，个大脆甜', price:'¥88', tag:'严选臻品', tagZone:'mountain', cat:'fruit', quantity:420, farmer:'大连樱桃农场', rating:'4.8', zone:'mountain', season:'spring' },
  { id:'sp_f_04', name:'青梅', region:'华南', loc:'福建·诏安', desc:'诏安青梅，脆爽解腻', price:'¥15', tag:'', tagZone:'eco', cat:'fruit', quantity:380, farmer:'诏安青梅合作社', rating:'4.4', zone:'eco', season:'spring' },
  { id:'sp_f_05', name:'油桃', region:'华北', loc:'河北·秦皇岛', desc:'大棚油桃，甜蜜多汁', price:'¥22', tag:'', tagZone:'eco', cat:'fruit', quantity:520, farmer:'秦皇岛油桃基地', rating:'4.6', zone:'tech-farming', season:'spring' },
  { id:'sp_f_06', name:'甜瓜', region:'西北', loc:'新疆·哈密', desc:'哈密瓜，脆甜可口', price:'¥18', tag:'严选臻品', tagZone:'mountain', cat:'fruit', quantity:680, farmer:'哈密瓜农庄', rating:'4.7', zone:'mountain', season:'spring' },
  { id:'sp_f_07', name:'西瓜', region:'华中', loc:'河南·安阳', desc:'早熟西瓜，汁多解暑', price:'¥12', tag:'清爽无负', tagZone:'eco', cat:'fruit', quantity:850, farmer:'安阳西瓜基地', rating:'4.5', zone:'light-diet', season:'spring' },
  { id:'sp_f_08', name:'李子', region:'西南', loc:'贵州·贵阳', desc:'蜂糖李，甜如蜂蜜', price:'¥25', tag:'', tagZone:'eco', cat:'fruit', quantity:420, farmer:'贵阳李子果园', rating:'4.6', zone:'eco', season:'spring' },
  { id:'sp_v_01', name:'春笋', region:'华东', loc:'浙江·临安', desc:'临安春笋，鲜嫩无比', price:'¥18', tag:'严选臻品', tagZone:'mountain', cat:'veg', quantity:580, farmer:'临安笋农', rating:'4.8', zone:'mountain', season:'spring' },
  { id:'sp_v_02', name:'荠菜', region:'华北', loc:'山东·济南', desc:'野生荠菜，清香扑鼻', price:'¥8', tag:'', tagZone:'eco', cat:'veg', quantity:420, farmer:'济南野菜合作社', rating:'4.5', zone:'eco', season:'spring' },
  { id:'sp_v_03', name:'香椿', region:'华北', loc:'山西·太原', desc:'头茬香椿，香味浓郁', price:'¥28', tag:'严选臻品', tagZone:'mountain', cat:'veg', quantity:320, farmer:'太原香椿基地', rating:'4.6', zone:'mountain', season:'spring' },
  { id:'sp_v_04', name:'韭菜', region:'东北', loc:'黑龙江·五常', desc:'五常韭菜，嫩绿清香', price:'¥6', tag:'', tagZone:'eco', cat:'veg', quantity:680, farmer:'五常蔬菜基地', rating:'4.4', zone:'tech-farming', season:'spring' },
  { id:'sp_v_05', name:'豌豆', region:'西南', loc:'四川·成都', desc:'嫩豌豆，清甜可口', price:'¥12', tag:'清爽无负', tagZone:'eco', cat:'veg', quantity:520, farmer:'成都豌豆农场', rating:'4.5', zone:'light-diet', season:'spring' },
  { id:'sp_v_06', name:'春茶', region:'华中', loc:'湖北·恩施', desc:'恩施玉露，春季新茶', price:'¥128', tag:'严选臻品', tagZone:'mountain', cat:'other', quantity:180, farmer:'恩施茶园', rating:'4.9', zone:'mountain', season:'spring' },
  { id:'sp_v_07', name:'艾草', region:'华南', loc:'广东·肇庆', desc:'新鲜艾草，清明时节', price:'¥8', tag:'', tagZone:'eco', cat:'veg', quantity:280, farmer:'肇庆艾草基地', rating:'4.4', zone:'eco', season:'spring' },
  { id:'sp_v_08', name:'枸杞芽', region:'西北', loc:'宁夏·中卫', desc:'枸杞嫩芽，清热去火', price:'¥15', tag:'清爽无负', tagZone:'eco', cat:'veg', quantity:220, farmer:'中卫枸杞基地', rating:'4.5', zone:'light-diet', season:'spring' },

  // ==================== 批发产品 ====================
  { id:'ws001', name:'云南高原苹果批发', region:'西南', loc:'云南·昆明', desc:'冷库保存，建议5日内提货', price:'¥6.8', tag:'批发特惠', tagZone:'eco', cat:'wholesale', quantity:1680, farmer:'云南高原苹果合作社', rating:'4.5', season:'autumn' },
  { id:'ws002', name:'山东大棚番茄批发', region:'华东', loc:'山东·寿光', desc:'常温保存，需尽快运输', price:'¥2.6', tag:'批发特惠', tagZone:'eco', cat:'wholesale', quantity:1920, farmer:'寿光番茄基地', rating:'4.3', season:'all' },
  { id:'ws003', name:'内蒙古草原羊肉批发', region:'华北', loc:'内蒙古·锡盟', desc:'冷链运输，-18℃冷冻保存', price:'¥32', tag:'批发特惠', tagZone:'mountain', cat:'wholesale', quantity:2000, farmer:'锡盟羊肉批发', rating:'4.6', season:'all' },
  { id:'ws004', name:'舟山带鱼批发', region:'华东', loc:'浙江·舟山', desc:'冰鲜运输，冷水保存', price:'¥14', tag:'批发特惠', tagZone:'eco', cat:'wholesale', quantity:1750, farmer:'舟山带鱼渔民', rating:'4.4', season:'all' },
  { id:'ws005', name:'东北优质大豆批发', region:'东北', loc:'黑龙江·哈尔滨', desc:'干燥通风，避免受潮', price:'¥3.8', tag:'批发特惠', tagZone:'eco', cat:'wholesale', quantity:1560, farmer:'哈尔滨大豆农场', rating:'4.5', season:'autumn' },
  { id:'ws006', name:'四川耙耙柑批发', region:'西南', loc:'四川·成都', desc:'常温保存，避光通风', price:'¥3.2', tag:'批发特惠', tagZone:'eco', cat:'wholesale', quantity:1890, farmer:'成都耙耙柑基地', rating:'4.4', season:'winter' },
  { id:'ws007', name:'河北鸡蛋批发', region:'华北', loc:'河北·邯郸', desc:'阴凉保存，15℃以下', price:'¥5.5', tag:'批发特惠', tagZone:'eco', cat:'wholesale', quantity:1420, farmer:'邯郸鸡蛋农场', rating:'4.3', season:'all' },
  { id:'ws008', name:'江苏大闸蟹批发', region:'华东', loc:'江苏·苏州', desc:'鲜活运输，充氧包装', price:'¥28', tag:'批发特惠', tagZone:'eco', cat:'wholesale', quantity:1500, farmer:'阳澄湖蟹农', rating:'4.7', season:'autumn' },

  // ==================== 春季补充 meat×6 ====================
  { id:'meat_sp_01', name:'鸭肉', region:'华东', loc:'江苏·南京', desc:'金陵盐水鸭，传统名菜，皮白肉嫩', price:'¥48', tag:'', tagZone:'heritage', cat:'meat', quantity:520, farmer:'南京盐水鸭坊', rating:'4.6', zone:'light-diet', season:'spring' },
  { id:'meat_sp_02', name:'鹅肉', region:'华南', loc:'广东·清远', desc:'清远鹅，农家散养，肉质紧实', price:'¥68', tag:'', tagZone:'eco', cat:'meat', quantity:380, farmer:'清远鹅业', rating:'4.7', zone:'light-diet', season:'spring' },
  { id:'meat_sp_03', name:'猪肉', region:'华中', loc:'湖北·武汉', desc:'散养土猪，五谷喂养，肉香浓郁', price:'¥38', tag:'', tagZone:'eco', cat:'meat', quantity:680, farmer:'武汉土猪牧场', rating:'4.5', zone:'light-diet', season:'spring' },
  { id:'meat_sp_04', name:'兔肉', region:'西南', loc:'四川·成都', desc:'川西野兔，肉质细嫩，低脂健康', price:'¥58', tag:'清爽无负', tagZone:'mountain', cat:'meat', quantity:280, farmer:'成都兔业合作社', rating:'4.6', zone:'light-diet', season:'spring' },
  { id:'meat_sp_05', name:'乌鸡', region:'华北', loc:'河北·保定', desc:'太行山乌鸡，药食同源，滋补佳品', price:'¥78', tag:'温和调养', tagZone:'mountain', cat:'meat', quantity:320, farmer:'保定乌鸡养殖', rating:'4.8', zone:'wellness', season:'spring' },
  { id:'meat_sp_06', name:'鸽肉', region:'东北', loc:'辽宁·沈阳', desc:'肉鸽养殖，鸽肉鲜美，炖汤滋补', price:'¥42', tag:'', tagZone:'eco', cat:'meat', quantity:240, farmer:'沈阳肉鸽基地', rating:'4.5', zone:'light-diet', season:'spring' },

  // ==================== 春季补充 fish×6 ====================
  { id:'fish_sp_01', name:'鲢鱼', region:'华东', loc:'江苏·太湖', desc:'太湖鲢鱼，淡水养殖，鱼肉嫩滑', price:'¥28', tag:'', tagZone:'eco', cat:'fish', quantity:420, farmer:'太湖渔民', rating:'4.4', zone:'light-diet', season:'spring' },
  { id:'fish_sp_02', name:'鳜鱼', region:'华中', loc:'湖北·武汉', desc:'武昌鱼正宗，春季鲜美，刺少肉多', price:'¥58', tag:'', tagZone:'eco', cat:'fish', quantity:280, farmer:'武汉淡水鱼场', rating:'4.7', zone:'light-diet', season:'spring' },
  { id:'fish_sp_03', name:'甲鱼', region:'华南', loc:'广东·佛山', desc:'鳖类养殖，野生风味，滋补养生', price:'¥128', tag:'温和调养', tagZone:'eco', cat:'fish', quantity:180, farmer:'佛山甲鱼养殖', rating:'4.8', zone:'wellness', season:'spring' },
  { id:'fish_sp_04', name:'鲟鱼', region:'西南', loc:'四川·雅安', desc:'雅安鲟鱼，高山冷水养殖', price:'¥88', tag:'', tagZone:'mountain', cat:'fish', quantity:220, farmer:'雅安鲟鱼基地', rating:'4.6', zone:'light-diet', season:'spring' },
  { id:'fish_sp_05', name:'河虾', region:'华北', loc:'河北·白洋淀', desc:'白洋淀河虾，野生捕捞，壳薄肉嫩', price:'¥68', tag:'', tagZone:'eco', cat:'fish', quantity:320, farmer:'白洋淀虾农', rating:'4.5', zone:'light-diet', season:'spring' },
  { id:'fish_sp_06', name:'田螺', region:'华中', loc:'湖南·岳阳', desc:'洞庭湖田螺，淡水螺肉，鲜嫩爽滑', price:'¥18', tag:'清爽无负', tagZone:'eco', cat:'fish', quantity:480, farmer:'岳阳田螺养殖', rating:'4.3', zone:'light-diet', season:'spring' },

  // ==================== 春季补充 other×5 ====================
  { id:'other_sp_01', name:'菊花茶', region:'华东', loc:'安徽·黄山', desc:'黄山贡菊，清肝明目，春季饮用', price:'¥45', tag:'温和调养', tagZone:'mountain', cat:'other', quantity:280, farmer:'黄山茶园', rating:'4.6', zone:'wellness', season:'spring' },
  { id:'other_sp_02', name:'桃花茶', region:'西南', loc:'云南·大理', desc:'大理桃花，美容养颜，花香淡雅', price:'¥52', tag:'', tagZone:'eco', cat:'other', quantity:180, farmer:'大理花茶坊', rating:'4.5', zone:'wellness', season:'spring' },
  { id:'other_sp_03', name:'茉莉花茶', region:'华南', loc:'福建·福州', desc:'福州茉莉花茶，窨制工艺，香气浓郁', price:'¥68', tag:'严选臻品', tagZone:'heritage', cat:'other', quantity:320, farmer:'福州茉莉茶厂', rating:'4.7', zone:'tech-farming', season:'spring' },
  { id:'other_sp_04', name:'绿茶', region:'华东', loc:'浙江·西湖', desc:'西湖龙井，明前春茶，嫩绿清香', price:'¥188', tag:'严选臻品', tagZone:'mountain', cat:'other', quantity:120, farmer:'西湖龙井茶园', rating:'4.9', zone:'mountain', season:'spring' },
  { id:'other_sp_05', name:'槐花蜜', region:'华北', loc:'河北·承德', desc:'承德槐花蜜，春季花源，纯净自然', price:'¥58', tag:'', tagZone:'eco', cat:'other', quantity:240, farmer:'承德蜂业', rating:'4.6', zone:'eco', season:'spring' },

  // ==================== 夏季补充 veg×3 ====================
  { id:'veg_su_01', name:'茄子', region:'华东', loc:'江苏·苏州', desc:'苏州茄子，夏季时蔬，脆嫩可口', price:'¥8', tag:'', tagZone:'eco', cat:'veg', quantity:580, farmer:'苏州蔬菜基地', rating:'4.4', zone:'light-diet', season:'summer' },
  { id:'veg_su_02', name:'苦瓜', region:'华南', loc:'广东·广州', desc:'凉瓜品种，清热去火，夏季佳品', price:'¥10', tag:'清爽无负', tagZone:'eco', cat:'veg', quantity:420, farmer:'广州苦瓜农庄', rating:'4.5', zone:'light-diet', season:'summer' },
  { id:'veg_su_03', name:'空心菜', region:'华中', loc:'湖南·长沙', desc:'空心菜新鲜，夏季应季蔬菜', price:'¥6', tag:'清爽无负', tagZone:'eco', cat:'veg', quantity:680, farmer:'长沙蔬菜基地', rating:'4.3', zone:'light-diet', season:'summer' },

  // ==================== 夏季补充 meat×6 ====================
  { id:'meat_su_01', name:'鸭肉', region:'华东', loc:'江苏·高邮', desc:'高邮咸鸭蛋原料，夏季进补', price:'¥42', tag:'', tagZone:'eco', cat:'meat', quantity:480, farmer:'高邮鸭业', rating:'4.5', zone:'light-diet', season:'summer' },
  { id:'meat_su_02', name:'鹅肉', region:'华南', loc:'广东·汕头', desc:'汕头狮头鹅，卤制佳品', price:'¥72', tag:'', tagZone:'heritage', cat:'meat', quantity:320, farmer:'汕头鹅庄', rating:'4.6', zone:'light-diet', season:'summer' },
  { id:'meat_su_03', name:'兔肉', region:'西南', loc:'贵州·安顺', desc:'安顺野兔，干锅红烧皆宜', price:'¥52', tag:'', tagZone:'mountain', cat:'meat', quantity:260, farmer:'安顺兔业', rating:'4.5', zone:'light-diet', season:'summer' },
  { id:'meat_su_04', name:'驴肉', region:'华北', loc:'河北·保定', desc:'保定驴肉火烧，千年名吃', price:'¥78', tag:'严选臻品', tagZone:'heritage', cat:'meat', quantity:280, farmer:'保定驴肉坊', rating:'4.7', zone:'heritage', season:'summer' },
  { id:'meat_su_05', name:'马肉', region:'西北', loc:'新疆·伊犁', desc:'伊犁马肉，风干马肉，特色美食', price:'¥68', tag:'', tagZone:'heritage', cat:'meat', quantity:220, farmer:'伊犁马业', rating:'4.5', zone:'heritage', season:'summer' },
  { id:'meat_su_06', name:'驼肉', region:'华北', loc:'内蒙古·阿拉善', desc:'阿拉善骆驼肉，低脂高蛋白', price:'¥88', tag:'清爽无负', tagZone:'mountain', cat:'meat', quantity:180, farmer:'阿拉善牧业', rating:'4.6', zone:'light-diet', season:'summer' },

  // ==================== 夏季补充 other×5 ====================
  { id:'other_su_01', name:'凉茶', region:'华南', loc:'广东·广州', desc:'广东凉茶，清热祛湿，夏季必备', price:'¥12', tag:'清爽无负', tagZone:'eco', cat:'other', quantity:520, farmer:'广州凉茶铺', rating:'4.5', zone:'wellness', season:'summer' },
  { id:'other_su_02', name:'绿豆', region:'华北', loc:'河北·张家口', desc:'有机绿豆，清热解毒，煮粥佳品', price:'¥15', tag:'清爽无负', tagZone:'eco', cat:'other', quantity:680, farmer:'张家口杂粮基地', rating:'4.4', zone:'light-diet', season:'summer' },
  { id:'other_su_03', name:'薏米', region:'华中', loc:'贵州·兴仁', desc:'兴仁薏米，祛湿佳品，药食同源', price:'¥22', tag:'温和调养', tagZone:'eco', cat:'other', quantity:380, farmer:'兴仁薏米合作社', rating:'4.6', zone:'wellness', season:'summer' },
  { id:'other_su_04', name:'莲子', region:'华东', loc:'江西·广昌', desc:'广昌白莲，煲汤炖品，滋补养生', price:'¥48', tag:'温和调养', tagZone:'eco', cat:'other', quantity:280, farmer:'广昌莲子基地', rating:'4.7', zone:'wellness', season:'summer' },
  { id:'other_su_05', name:'薄荷', region:'华南', loc:'广西·桂林', desc:'桂林薄荷，清凉解暑，泡茶调味', price:'¥18', tag:'清爽无负', tagZone:'eco', cat:'other', quantity:320, farmer:'桂林香草园', rating:'4.4', zone:'light-diet', season:'summer' },

  // ==================== 冬季补充 veg×5 ====================
  { id:'veg_wi_01', name:'萝卜', region:'华北', loc:'河北·潍县', desc:'潍县萝卜，冬季赛人参，脆甜多汁', price:'¥8', tag:'', tagZone:'eco', cat:'veg', quantity:820, farmer:'潍县萝卜基地', rating:'4.5', zone:'light-diet', season:'winter' },
  { id:'veg_wi_02', name:'白菜', region:'东北', loc:'辽宁·鞍山', desc:'东北大白菜，冬季储藏菜品', price:'¥6', tag:'', tagZone:'eco', cat:'veg', quantity:980, farmer:'鞍山白菜农庄', rating:'4.3', zone:'light-diet', season:'winter' },
  { id:'veg_wi_03', name:'芥菜', region:'华中', loc:'湖南·长沙', desc:'雪里蕻芥菜，腌制风味独特', price:'¥7', tag:'', tagZone:'eco', cat:'veg', quantity:480, farmer:'长沙芥菜基地', rating:'4.4', zone:'light-diet', season:'winter' },
  { id:'veg_wi_04', name:'冬笋', region:'华东', loc:'福建·武夷山', desc:'武夷山冬笋，冬季鲜笋，笋肉细嫩', price:'¥28', tag:'严选臻品', tagZone:'mountain', cat:'veg', quantity:280, farmer:'武夷山笋农', rating:'4.7', zone:'mountain', season:'winter' },
  { id:'veg_wi_05', name:'慈姑', region:'华中', loc:'湖北·洪湖', desc:'洪湖慈姑，冬季水生蔬菜', price:'¥12', tag:'', tagZone:'eco', cat:'veg', quantity:360, farmer:'洪湖慈姑种植', rating:'4.5', zone:'light-diet', season:'winter' },

  // ==================== 冬季补充 other×5 ====================
  { id:'other_wi_01', name:'红糖', region:'华南', loc:'广东·潮汕', desc:'潮汕古法红糖，暖宫驱寒', price:'¥18', tag:'温和调养', tagZone:'heritage', cat:'other', quantity:420, farmer:'潮汕红糖坊', rating:'4.5', zone:'wellness', season:'winter' },
  { id:'other_wi_02', name:'姜茶', region:'华中', loc:'湖南·郴州', desc:'郴州姜茶，驱寒暖胃，冬季热饮', price:'¥22', tag:'温和调养', tagZone:'eco', cat:'other', quantity:320, farmer:'郴州姜茶合作社', rating:'4.6', zone:'wellness', season:'winter' },
  { id:'other_wi_03', name:'桂圆', region:'华南', loc:'福建·莆田', desc:'莆田桂圆，补血安神，养生佳品', price:'¥38', tag:'温和调养', tagZone:'eco', cat:'other', quantity:280, farmer:'莆田桂圆基地', rating:'4.7', zone:'wellness', season:'winter' },
  { id:'other_wi_04', name:'核桃', region:'西南', loc:'云南·漾濞', desc:'漾濞核桃，国家地理标志，补脑健脑', price:'¥42', tag:'', tagZone:'mountain', cat:'other', quantity:380, farmer:'漾濞核桃合作社', rating:'4.8', zone:'wellness', season:'winter' },
  { id:'other_wi_05', name:'板栗', region:'华北', loc:'河北·迁西', desc:'迁西板栗，京东板栗，养生干果', price:'¥32', tag:'', tagZone:'mountain', cat:'other', quantity:420, farmer:'迁西板栗基地', rating:'4.6', zone:'wellness', season:'winter' },
{ id:'other_wi_06', name:'枸杞', region:'西北', loc:'宁夏·中宁', desc:'中宁枸杞，药食同源，养生必备', price:'¥48', tag:'温和调养', tagZone:'eco', cat:'other', quantity:320, farmer:'中宁枸杞合作社', rating:'4.7', zone:'wellness', season:'winter' },
{ id:'fish_wi_06', name:'海螺', region:'东北', loc:'辽宁·大连', desc:'大连海螺，冬季海鲜，鲜美可口', price:'¥68', tag:'', tagZone:'eco', cat:'fish', quantity:280, farmer:'大连海螺捕捞', rating:'4.6', zone:'light-diet', season:'winter' },

  // ==================== 秋季补充 veg×2 ====================
  { id:'veg_au_01', name:'芋头', region:'华南', loc:'广东·乐昌', desc:'乐昌芋头，粉糯可口，秋季采收', price:'¥12', tag:'', tagZone:'eco', cat:'veg', quantity:520, farmer:'乐昌芋头基地', rating:'4.5', season:'autumn' },
  { id:'veg_au_02', name:'红薯', region:'华北', loc:'河北·廊坊', desc:'蜜薯品种，烤食佳品，甜香软糯', price:'¥8', tag:'', tagZone:'eco', cat:'veg', quantity:680, farmer:'廊坊红薯农庄', rating:'4.4', season:'autumn' },

  // ==================== 秋季补充 fish×4 ====================
  { id:'fish_au_01', name:'鲤鱼', region:'华北', loc:'河南·郑州', desc:'黄河鲤鱼，秋季肥美，养殖精品', price:'¥28', tag:'', tagZone:'eco', cat:'fish', quantity:380, farmer:'郑州鲤鱼养殖', rating:'4.5', zone:'light-diet', season:'autumn' },
  { id:'fish_au_02', name:'草鱼', region:'华中', loc:'湖北·武汉', desc:'淡水草鱼，秋季鱼肥，煲汤红烧', price:'¥22', tag:'', tagZone:'eco', cat:'fish', quantity:420, farmer:'武汉草鱼养殖', rating:'4.4', zone:'light-diet', season:'autumn' },
  { id:'fish_au_03', name:'鲢鱼', region:'华东', loc:'江苏·太湖', desc:'太湖鲢鱼，秋季上市，鱼肉嫩滑', price:'¥25', tag:'', tagZone:'eco', cat:'fish', quantity:320, farmer:'太湖渔民', rating:'4.5', zone:'light-diet', season:'autumn' },
  { id:'fish_au_04', name:'鲫鱼', region:'华北', loc:'河南·郑州', desc:'野生鲫鱼，秋季补身，煲汤鲜美', price:'¥22', tag:'温和调养', tagZone:'eco', cat:'fish', quantity:420, farmer:'郑州鲫鱼养殖', rating:'4.6', zone:'wellness', season:'autumn' },

  // ==================== 秋季补充 other×3 ====================
  { id:'other_au_01', name:'玉米', region:'东北', loc:'黑龙江·绥化', desc:'糯玉米，秋季新粮，煮食皆宜', price:'¥8', tag:'', tagZone:'eco', cat:'other', quantity:680, farmer:'绥化玉米基地', rating:'4.4', season:'autumn' },
  { id:'other_au_02', name:'小麦', region:'华北', loc:'河南·郑州', desc:'优质小麦，磨面佳品，秋季新粮', price:'¥5', tag:'', tagZone:'eco', cat:'other', quantity:1200, farmer:'郑州小麦农场', rating:'4.3', season:'autumn' },
  { id:'other_au_03', name:'荞麦', region:'西北', loc:'陕西·定边', desc:'定边荞麦，杂粮之乡，营养丰富', price:'¥12', tag:'清爽无负', tagZone:'eco', cat:'other', quantity:380, farmer:'定边荞麦基地', rating:'4.5', zone:'light-diet', season:'autumn' },

  // ==================== 夏季补充 fish×2 ====================
  { id:'fish_su_01', name:'鮰鱼', region:'华东', loc:'江苏·南京', desc:'南京鮰鱼，夏季鲜美，红烧佳品', price:'¥38', tag:'', tagZone:'eco', cat:'fish', quantity:280, farmer:'南京鮰鱼养殖', rating:'4.6', zone:'light-diet', season:'summer' },
  { id:'fish_su_02', name:'鳗鱼', region:'华东', loc:'浙江·舟山', desc:'东海鳗鱼，夏季时令，营养丰富', price:'¥78', tag:'', tagZone:'mountain', cat:'fish', quantity:180, farmer:'舟山鳗鱼捕捞', rating:'4.7', zone:'light-diet', season:'summer' },

  // ==================== 冬季补充 fruit×1 ====================
  { id:'fruit_wi_01', name:'砂糖橘', region:'华南', loc:'广西·桂林', desc:'桂林砂糖橘，皮薄汁甜，冬季限定', price:'¥22', tag:'清爽无负', tagZone:'eco', cat:'fruit', quantity:520, farmer:'桂林砂糖橘基地', rating:'4.6', zone:'light-diet', season:'winter' },

  // ==================== 冬季补充 fish×3 ====================
  { id:'fish_wi_07', name:'刀鱼', region:'华东', loc:'江苏·南通', desc:'南通刀鱼，冬季时令，银白细嫩', price:'¥88', tag:'', tagZone:'eco', cat:'fish', quantity:180, farmer:'南通刀鱼捕捞', rating:'4.7', zone:'light-diet', season:'winter' },
  { id:'fish_wi_08', name:'鲳鱼', region:'华东', loc:'浙江·舟山', desc:'东海鲳鱼，冬季海鲜，清蒸美味', price:'¥68', tag:'', tagZone:'eco', cat:'fish', quantity:220, farmer:'舟山鲳鱼捕捞', rating:'4.6', zone:'light-diet', season:'winter' },
  { id:'fish_wi_09', name:'黄花鱼', region:'华东', loc:'福建·宁德', desc:'宁德黄花鱼，冬季滋补，肉质鲜嫩', price:'¥58', tag:'', tagZone:'eco', cat:'fish', quantity:280, farmer:'宁德黄花鱼养殖', rating:'4.5', zone:'light-diet', season:'winter' },

];

/* ══════════════════════════════
   将 PRODUCTS 聚合成 map 所需的 DATA 格式
═══════════════════════════════ */
function buildDATA() {
  const cats = ['fruit','veg','meat','fish','other'];
  const catLabels = { fruit:'水果', veg:'蔬菜', meat:'蛋奶肉', fish:'水产', other:'其它' };

  const data = {};
  cats.forEach(c => { data[c] = { label: catLabels[c], items: [] }; });

  // 按品名+类别聚合（同名商品合并，按地区累加件数）
  const nameMap = {};
  PRODUCTS.forEach(p => {
    if (!nameMap[p.name]) {
      nameMap[p.name] = { name: p.name, cat: p.cat, total: 0, regions: {东北:0,华北:0,华东:0,华中:0,华南:0,西南:0,西北:0} };
    }
    nameMap[p.name].regions[p.region] = (nameMap[p.name].regions[p.region] || 0) + (p.quantity || 1);
    nameMap[p.name].total += (p.quantity || 1);
  });

  Object.values(nameMap).forEach(item => {
    if (data[item.cat]) data[item.cat].items.push(item);
  });

  return data;
}
