
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslation from './locales/en/translation.json';
import heTranslation from './locales/he/translation.json';
import arTranslation from './locales/ar/translation.json';
import esTranslation from './locales/es/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      he: {
        translation: heTranslation,
      },
      ar: {
        translation: arTranslation,
      },
      es: {
        translation: esTranslation,
      },
    },
    lng: 'en', // ברירת מחדל לאנגלית
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    // אופטימיזציות ביצועים
    load: 'languageOnly',
    preload: ['en', 'he', 'ar', 'es'],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    debug: false,
  });

export default i18n;
