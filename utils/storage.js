// utils/storage.js
// 本地存储层：用微信小程序 Storage 记录食物放入时间与到期时间

const foodData = require('./foodData.js');

const STORAGE_KEY = 'fridge_records';
const DAY_MS = 24 * 60 * 60 * 1000;

// 取当天零点的时间戳（毫秒），跨天按自然日计算
function startOfDay(ts) {
  const d = new Date(ts);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

// 读全部记录，无记录时返回空数组
function getAll() {
  return wx.getStorageSync(STORAGE_KEY) || [];
}

// 写回全部记录
function saveAll(records) {
  wx.setStorageSync(STORAGE_KEY, records);
}

// 新增一条记录：按食物 fridgeDays 算到期时间，存入本地
function addRecord(foodName, photoPath) {
  const food = foodData.find((item) => item.name === foodName);
  if (!food) {
    throw new Error('未知食物：' + foodName);
  }
  const addedAt = Date.now();
  const expireAt = startOfDay(addedAt) + food.fridgeDays * DAY_MS;
  const record = {
    id: 'r' + addedAt + '_' + Math.random().toString(36).slice(2, 8),
    foodName,
    photoPath,
    addedAt,
    expireAt,
    eaten: false,
  };
  const records = getAll();
  records.push(record);
  saveAll(records);
  return record;
}

// 返回未标记吃完的记录，每条附上从今天算起的剩余天数 remainDays
function getActiveRecords() {
  const now = Date.now();
  return getAll()
    .filter((item) => !item.eaten)
    .map((item) => {
      const remainDays = Math.max(
        0,
        Math.round((item.expireAt - startOfDay(now)) / DAY_MS)
      );
      return {
        id: item.id,
        foodName: item.foodName,
        photoPath: item.photoPath,
        addedAt: item.addedAt,
        expireAt: item.expireAt,
        remainDays,
      };
    });
}

// 把对应 id 的记录标记为已吃完
function markEaten(id) {
  const records = getAll();
  const target = records.find((item) => item.id === id);
  if (!target) {
    return false;
  }
  target.eaten = true;
  saveAll(records);
  return true;
}

module.exports = {
  addRecord,
  getActiveRecords,
  markEaten,
};
