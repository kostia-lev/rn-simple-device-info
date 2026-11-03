import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  getAppName(): string;
  getAppVersion(): string;
  getBuildNumber(): string;
}

export default TurboModuleRegistry.getEnforcing<Spec>(
  'NativeSimpleDeviceInfo'
);
