// pages/index/index.js
const storage = require('../../utils/storage.js');
const foodData = require('../../utils/foodData.js');

Page({
  data: {
    records: [],
  },

  onShow() {
    this.refresh();
  },

  refresh() {
    const records = storage
      .getActiveRecords()
      .sort((a, b) => a.remainDays - b.remainDays)
      .map((item) => {
        const food = foodData.find((f) => f.name === item.foodName);
        if (food && food.fridgeOk === false) {
          return Object.assign({}, item, {
            status: 'fridge-off',
            remainText: '不宜冷藏',
          });
        }
        let status = 'ok';
        let remainText = '剩余 ' + item.remainDays + ' 天';
        if (item.remainDays <= 0) {
          status = 'expired';
          remainText = '已过期';
        } else if (item.remainDays <= 3) {
          status = 'warn';
        }
        return Object.assign({}, item, { status, remainText });
      });
    this.setData({ records });
  },

  onMarkEaten(e) {
    const id = e.currentTarget.dataset.id;
    storage.markEaten(id);
    this.refresh();
  },

  goAdd() {
    wx.navigateTo({ url: '/pages/add/add' });
  },

  onEmptyTap() {
    this.goAdd();
  },
});
