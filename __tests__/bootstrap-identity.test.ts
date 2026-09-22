import appConfig from '../app.json';
import {
  ANDROID_PACKAGE_ID,
  APP_DISPLAY_NAME,
  APP_SLUG,
} from '../src/platform/identity';

describe('DEV-001 bootstrap identity', () => {
  it('keeps platform identity aligned with Expo Android package', () => {
    expect(ANDROID_PACKAGE_ID).toBe('com.lumian.tampin');
    expect(APP_DISPLAY_NAME).toBe('Tampin');
    expect(APP_SLUG).toBe('tampin');
    expect(appConfig.expo.android.package).toBe(ANDROID_PACKAGE_ID);
    expect(appConfig.expo.name).toBe(APP_DISPLAY_NAME);
    expect(appConfig.expo.slug).toBe(APP_SLUG);
  });
});
