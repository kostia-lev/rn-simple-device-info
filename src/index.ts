import NativeSimpleDeviceInfo from './NativeSimpleDeviceInfo';

export type AppInfo = Readonly<{
  appName: string;
  appVersion: string;
  buildNumber: string;
}>;

/** Returns the user-facing application name. */
export function getAppName(): string {
  return NativeSimpleDeviceInfo.getAppName();
}

/** Returns the application version (versionName on Android, CFBundleShortVersionString on iOS). */
export function getAppVersion(): string {
  return NativeSimpleDeviceInfo.getAppVersion();
}

/** Returns the build number as a string (versionCode on Android, CFBundleVersion on iOS). */
export function getBuildNumber(): string {
  return NativeSimpleDeviceInfo.getBuildNumber();
}

/** Returns all supported application metadata in one object. */
export function getAppInfo(): AppInfo {
  return {
    appName: getAppName(),
    appVersion: getAppVersion(),
    buildNumber: getBuildNumber(),
  };
}

const SimpleDeviceInfo = {
  getAppInfo,
  getAppName,
  getAppVersion,
  getBuildNumber,
};

export default SimpleDeviceInfo;
