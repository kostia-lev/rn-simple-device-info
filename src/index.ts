import NativeSimpleDeviceInfo from './NativeSimpleDeviceInfo';

/** Returns the user-facing application name. */
export function getApplicationName(): string {
  return NativeSimpleDeviceInfo.getApplicationName();
}

/** Returns the application version (versionName on Android, CFBundleShortVersionString on iOS). */
export function getVersion(): string {
  return NativeSimpleDeviceInfo.getVersion();
}

/** Returns the build number as a string (versionCode on Android, CFBundleVersion on iOS). */
export function getBuildNumber(): string {
  return NativeSimpleDeviceInfo.getBuildNumber();
}

const SimpleDeviceInfo = {
  getApplicationName,
  getBuildNumber,
  getVersion,
};

export default SimpleDeviceInfo;
