# fridge-guard

冰箱食物保质期提醒小程序。

## 技术栈

微信小程序原生 + 云开发

## 目录约定

- `utils/foodData.js` 是唯一食物数据源，修改需人工复核
- 食物数据约定：fridgeOk 为 false 时，fridgeDays 固定为 0，noFridgeReason 非空；fridgeOk 为 true 时，fridgeDays 为正整数，noFridgeReason 为空字符串。

## 禁止项

- 不做拍照自动识别
- 不做消息推送

## 代码风格

- `const` 优先
- 样式单位用 `rpx`

## 完成标准

每次改完必须能在微信开发者工具编译通过
