import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation from './en.json';

const resources = {
  en: {
    translation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
