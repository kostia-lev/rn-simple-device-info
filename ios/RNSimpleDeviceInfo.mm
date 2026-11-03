#import "RNSimpleDeviceInfo.h"

@implementation RNSimpleDeviceInfo

- (NSString *)getApplicationName
{
  NSBundle *bundle = [NSBundle mainBundle];
  NSString *appName = [bundle objectForInfoDictionaryKey:@"CFBundleDisplayName"];

  if (appName.length == 0) {
    appName = [bundle objectForInfoDictionaryKey:@"CFBundleName"];
  }

  return appName.length > 0 ? appName : [[NSProcessInfo processInfo] processName];
}

- (NSString *)getVersion
{
  NSString *version = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleShortVersionString"];
  return version ?: @"";
}

- (NSString *)getBuildNumber
{
  NSString *buildNumber = [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleVersion"];
  return buildNumber ?: @"";
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
  return std::make_shared<facebook::react::NativeSimpleDeviceInfoSpecJSI>(params);
}

+ (NSString *)moduleName
{
  return @"NativeSimpleDeviceInfo";
}

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
