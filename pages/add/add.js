// pages/add/add.js
const foodData = require('../../utils/foodData.js');
const storage = require('../../utils/storage.js');

const DAY_MS = 24 * 60 * 60 * 1000;

// 当天零点时间戳，与 storage.js 保持一致，用于算「X 月 X 日前吃完」
function startOfDay(ts) {
  const d = new Date(ts);
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

Page({
  data: {
    foodList: foodData,
    photoPath: '',
    selectedFood: null,
    adviceText: '',
  },

  onChoosePhoto() {
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['camera', 'album'],
      success: (res) => {
        this.setData({ photoPath: res.tempFilePaths[0] });
      },
    });
  },

  onSelectFood(e) {
    const name = e.currentTarget.dataset.name;
    const food = foodData.find((item) => item.name === name);
    let adviceText = '';
    if (food && food.fridgeOk) {
      const expireAt = startOfDay(Date.now()) + food.fridgeDays * DAY_MS;
      const d = new Date(expireAt);
      adviceText =
        '冷藏不超过 ' +
        food.fridgeDays +
        ' 天，建议 ' +
        (d.getMonth() + 1) +
        ' 月 ' +
        d.getDate() +
        ' 日前吃完';
    }
    this.setData({ selectedFood: food, adviceText });
  },

  onConfirm() {
    const { photoPath, selectedFood } = this.data;
    if (!photoPath) {
      wx.showToast({ title: '请先拍照', icon: 'none' });
      return;
    }
    if (!selectedFood) {
      wx.showToast({ title: '请选择食物', icon: 'none' });
      return;
    }
    storage.addRecord(selectedFood.name, photoPath);
    wx.navigateBack();
  },
});
