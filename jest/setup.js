import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import 'react-native-gesture-handler/jestSetup';

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);

jest.mock('react-native-static-safe-area-insets', () => ({
  safeAreaInsetsTop: 20,
  safeAreaInsetsBottom: 10,
  safeAreaInsetsLeft: 0,
  safeAreaInsetsRight: 0,
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: key => key,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }),
  initReactI18next: {
    type: '3rdParty',
    init: () => {},
  },
}));

i18next.use(initReactI18next).init({
  lng: 'en',
  resources: {en: {translation: {}}},
});
