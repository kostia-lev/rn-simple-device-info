package com.rnsimpledeviceinfo;

import android.content.pm.ApplicationInfo;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.os.Build;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.annotations.ReactModule;

@ReactModule(name = SimpleDeviceInfoModule.NAME)
public final class SimpleDeviceInfoModule extends NativeSimpleDeviceInfoSpec {
  public static final String NAME = "NativeSimpleDeviceInfo";

  public SimpleDeviceInfoModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return NAME;
  }

  @Override
  public String getAppName() {
    ReactApplicationContext context = getReactApplicationContext();
    PackageManager packageManager = context.getPackageManager();
    ApplicationInfo applicationInfo = context.getApplicationInfo();
    return applicationInfo.loadLabel(packageManager).toString();
  }

  @Override
  public String getAppVersion() {
    String versionName = getPackageInfo().versionName;
    return versionName == null ? "" : versionName;
  }

  @Override
  @SuppressWarnings("deprecation")
  public String getBuildNumber() {
    PackageInfo packageInfo = getPackageInfo();

    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
      return Long.toString(packageInfo.getLongVersionCode());
    }

    return Integer.toString(packageInfo.versionCode);
  }

  private PackageInfo getPackageInfo() {
    ReactApplicationContext context = getReactApplicationContext();

    try {
      return context.getPackageManager().getPackageInfo(context.getPackageName(), 0);
    } catch (PackageManager.NameNotFoundException error) {
      throw new IllegalStateException("Unable to read metadata for the current app", error);
    }
  }
}
