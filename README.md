# rn-simple-device-info

A small, synchronous React Native Turbo Module that reads the current app's name, version, and build number on Android and iOS.

## Requirements

- React Native 0.84.0 or newer (New Architecture)
- React 19.2 or newer
- Node.js 22.11 or newer for development
- Android API 24 or newer
- iOS 15.1 or newer

## Installation

```sh
npm install rn-simple-device-info
```

For iOS, install pods and rebuild the app:

```sh
npx pod-install
```

Android is linked automatically. Rebuild the native app after installing this package.

## Usage

```ts
import {
  getApplicationName,
  getBuildNumber,
  getVersion,
} from 'rn-simple-device-info';

const name = getApplicationName();
const version = getVersion();
const build = getBuildNumber();
```

All functions are synchronous and return strings.

| Function | Android | iOS |
| --- | --- | --- |
| `getApplicationName()` | Application label | `CFBundleDisplayName`, falling back to `CFBundleName` |
| `getVersion()` | `versionName` | `CFBundleShortVersionString` |
| `getBuildNumber()` | `versionCode` | `CFBundleVersion` |

The Android build number is returned as a string so large `longVersionCode` values cannot lose precision in JavaScript.

## Development

```sh
npm install
npm run typecheck
npm run build
npm run codegen
```

## License

MIT
