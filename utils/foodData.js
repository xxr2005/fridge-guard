// utils/foodData.js
// 唯一食物数据源，修改需人工复核（见 CLAUDE.md）
// fridgeDays：冷藏建议天数；fridgeOk 为 false 时填 0，原因见 noFridgeReason

const foodData = [
  // 蔬菜
  { name: '菠菜', category: '蔬菜', fridgeOk: true, fridgeDays: 3, noFridgeReason: '' },
  { name: '生菜', category: '蔬菜', fridgeOk: true, fridgeDays: 5, noFridgeReason: '' },
  { name: '大白菜', category: '蔬菜', fridgeOk: true, fridgeDays: 7, noFridgeReason: '' },
  { name: '芹菜', category: '蔬菜', fridgeOk: true, fridgeDays: 7, noFridgeReason: '' },
  { name: '西兰花', category: '蔬菜', fridgeOk: true, fridgeDays: 5, noFridgeReason: '' },
  { name: '胡萝卜', category: '蔬菜', fridgeOk: true, fridgeDays: 14, noFridgeReason: '' },
  { name: '白萝卜', category: '蔬菜', fridgeOk: true, fridgeDays: 14, noFridgeReason: '' },
  { name: '黄瓜', category: '蔬菜', fridgeOk: false, fridgeDays: 0, noFridgeReason: '低温易冻伤变软，宜室温阴凉存放' },
  { name: '青椒', category: '蔬菜', fridgeOk: false, fridgeDays: 0, noFridgeReason: '低温易冻伤，宜室温阴凉存放' },
  { name: '西红柿', category: '蔬菜', fridgeOk: false, fridgeDays: 0, noFridgeReason: '低温会失去风味、变软，宜室温存放' },
  { name: '洋葱', category: '蔬菜', fridgeOk: false, fridgeDays: 0, noFridgeReason: '冷藏易吸水变软、发芽，宜干燥阴凉处存放' },
  { name: '大蒜', category: '蔬菜', fridgeOk: false, fridgeDays: 0, noFridgeReason: '冷藏易发芽霉变，宜干燥阴凉处存放' },
  { name: '土豆', category: '蔬菜', fridgeOk: false, fridgeDays: 0, noFridgeReason: '低温使淀粉转为糖而变甜，宜阴凉干燥避光存放' },
  { name: '玉米', category: '蔬菜', fridgeOk: true, fridgeDays: 5, noFridgeReason: '' },
  { name: '豆角', category: '蔬菜', fridgeOk: true, fridgeDays: 5, noFridgeReason: '' },
  { name: '蘑菇', category: '蔬菜', fridgeOk: true, fridgeDays: 3, noFridgeReason: '' },
  { name: '韭菜', category: '蔬菜', fridgeOk: true, fridgeDays: 3, noFridgeReason: '' },

  // 水果
  { name: '苹果', category: '水果', fridgeOk: true, fridgeDays: 30, noFridgeReason: '' },
  { name: '香蕉', category: '水果', fridgeOk: false, fridgeDays: 0, noFridgeReason: '低温会冻伤表皮变黑，宜室温存放' },
  { name: '芒果', category: '水果', fridgeOk: false, fridgeDays: 0, noFridgeReason: '低温会冻伤，宜室温催熟存放' },
  { name: '橙子', category: '水果', fridgeOk: true, fridgeDays: 21, noFridgeReason: '' },
  { name: '葡萄', category: '水果', fridgeOk: true, fridgeDays: 7, noFridgeReason: '' },
  { name: '草莓', category: '水果', fridgeOk: true, fridgeDays: 3, noFridgeReason: '' },
  { name: '西瓜', category: '水果', fridgeOk: true, fridgeDays: 5, noFridgeReason: '' },
  { name: '梨', category: '水果', fridgeOk: true, fridgeDays: 14, noFridgeReason: '' },
  { name: '桃子', category: '水果', fridgeOk: true, fridgeDays: 5, noFridgeReason: '' },
  { name: '蓝莓', category: '水果', fridgeOk: true, fridgeDays: 7, noFridgeReason: '' },
  { name: '猕猴桃', category: '水果', fridgeOk: true, fridgeDays: 7, noFridgeReason: '' },
  { name: '柠檬', category: '水果', fridgeOk: true, fridgeDays: 21, noFridgeReason: '' },

  // 肉类
  { name: '生猪肉', category: '肉类', fridgeOk: true, fridgeDays: 2, noFridgeReason: '' },
  { name: '生牛肉', category: '肉类', fridgeOk: true, fridgeDays: 2, noFridgeReason: '' },
  { name: '生鸡肉', category: '肉类', fridgeOk: true, fridgeDays: 2, noFridgeReason: '' },
  { name: '生羊肉', category: '肉类', fridgeOk: true, fridgeDays: 2, noFridgeReason: '' },
  { name: '鱼肉', category: '肉类', fridgeOk: true, fridgeDays: 1, noFridgeReason: '' },
  { name: '虾', category: '肉类', fridgeOk: true, fridgeDays: 1, noFridgeReason: '' },
  { name: '火腿', category: '肉类', fridgeOk: true, fridgeDays: 7, noFridgeReason: '' },
  { name: '香肠', category: '肉类', fridgeOk: true, fridgeDays: 7, noFridgeReason: '' },
  { name: '培根', category: '肉类', fridgeOk: true, fridgeDays: 7, noFridgeReason: '' },

  // 剩菜
  { name: '剩饭剩菜', category: '剩菜', fridgeOk: true, fridgeDays: 2, noFridgeReason: '' },
  { name: '熟肉', category: '剩菜', fridgeOk: true, fridgeDays: 3, noFridgeReason: '' },
  { name: '汤', category: '剩菜', fridgeOk: true, fridgeDays: 3, noFridgeReason: '' },
  { name: '米饭', category: '剩菜', fridgeOk: true, fridgeDays: 3, noFridgeReason: '' },

  // 乳制品
  { name: '牛奶', category: '乳制品', fridgeOk: true, fridgeDays: 7, noFridgeReason: '' },
  { name: '酸奶', category: '乳制品', fridgeOk: true, fridgeDays: 14, noFridgeReason: '' },
  { name: '奶酪', category: '乳制品', fridgeOk: true, fridgeDays: 30, noFridgeReason: '' },
  { name: '黄油', category: '乳制品', fridgeOk: true, fridgeDays: 30, noFridgeReason: '' },

  // 其他
  { name: '鸡蛋', category: '其他', fridgeOk: true, fridgeDays: 30, noFridgeReason: '' },
  { name: '豆腐', category: '其他', fridgeOk: true, fridgeDays: 3, noFridgeReason: '' },
  { name: '面包', category: '其他', fridgeOk: false, fridgeDays: 0, noFridgeReason: '冷藏易失水变硬，宜室温密封或冷冻' },
  { name: '蜂蜜', category: '其他', fridgeOk: false, fridgeDays: 0, noFridgeReason: '蜂蜜本身耐储存，冷藏易结晶' },
];

module.exports = foodData;
