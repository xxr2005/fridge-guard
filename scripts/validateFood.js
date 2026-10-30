// scripts/validateFood.js
// 校验 utils/foodData.js 数据完整性，用法：node scripts/validateFood.js

const foodData = require('../utils/foodData.js');

const CATEGORIES = new Set(['蔬菜', '水果', '肉类', '剩菜', '乳制品', '其他']);
const REQUIRED_FIELDS = ['name', 'category', 'fridgeOk', 'fridgeDays', 'noFridgeReason'];
const errors = [];

if (!Array.isArray(foodData)) {
  console.error('✗ foodData 不是数组');
  process.exit(1);
}

if (foodData.length < 50) {
  errors.push(`数组长度不足：${foodData.length} < 50`);
}

foodData.forEach((item, i) => {
  const label = `[${i}] ${item && typeof item.name === 'string' ? item.name : '(无名)'}`;

  for (const field of REQUIRED_FIELDS) {
    if (!(field in item)) {
      errors.push(`${label}: 缺少字段 ${field}`);
    }
  }

  if (typeof item.name !== 'string' || item.name.trim() === '') {
    errors.push(`${label}: name 应为非空字符串`);
  }
  if (!CATEGORIES.has(item.category)) {
    errors.push(`${label}: category 非法 "${item.category}"`);
  }
  if (typeof item.fridgeOk !== 'boolean') {
    errors.push(`${label}: fridgeOk 应为布尔值`);
  }
  if (typeof item.fridgeDays !== 'number' || !Number.isInteger(item.fridgeDays)) {
    errors.push(`${label}: fridgeDays 应为整数`);
  } else if (item.fridgeDays < 0) {
    errors.push(`${label}: fridgeDays 不能为负`);
  } else if (item.fridgeOk === true && item.fridgeDays < 1) {
    errors.push(`${label}: fridgeOk 为 true 时 fridgeDays 应为正整数`);
  }
  if (typeof item.noFridgeReason !== 'string') {
    errors.push(`${label}: noFridgeReason 应为字符串`);
  }

  if (item.fridgeOk === false && item.noFridgeReason.trim() === '') {
    errors.push(`${label}: fridgeOk 为 false 时 noFridgeReason 不能为空`);
  }
  if (item.fridgeOk === true && item.noFridgeReason !== '') {
    errors.push(`${label}: fridgeOk 为 true 时 noFridgeReason 应为空字符串`);
  }
});

if (errors.length === 0) {
  console.log(`✓ 校验通过：共 ${foodData.length} 条食物数据，字段齐全、类型正确`);
  process.exit(0);
} else {
  console.error(`✗ 校验失败：共 ${errors.length} 处问题`);
  for (const e of errors) {
    console.error(`  - ${e}`);
  }
  process.exit(1);
}
