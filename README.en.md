[English](./README.md) | [中文](./README.zh.md)

# fridge-guard

A WeChat Mini Program that reminds you of food shelf life in your fridge.

## MVP Features

- Add: record food and its shelf life
- Instant refrigeration tip: prompt whether refrigeration is needed on entry
- Countdown home page: show near-expiry / expired countdowns
- Mark as eaten: mark food as consumed

## Three Things We Explicitly Do Not Do

- No automatic photo recognition
- No third-party UI libraries
- No push notifications

## Food Data Disclaimer

Food shelf-life data is for reference only and does not constitute food-safety or medical advice. For actual edibility, follow the packaging labels, storage conditions, and your own judgment.

## Local Run Instructions

1. Open WeChat DevTools, choose "Import Project", and point the directory to this project's root.
2. Under "Details → Local Settings", check "Do not verify valid domain names, web-view (business domain), TLS versions and HTTPS certificates"; otherwise the external reference images cannot load.
3. Use the stable base library 3.17.5. Gray-release base libraries cause the `appLaunch with non-empty page stack` routing error.

## Known Limitations

- The reference images are currently dummyimage placeholders, not real food photos.
- The photoPath from the camera is a temporary path and may become invalid after the Mini Program restarts.
- No automatic cleanup of expired records: eaten and expired records remain in local Storage and keep accumulating.
