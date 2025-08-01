
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import heTranslation from './locales/he/translation.json';
import arTranslation from './locales/ar/translation.json'; // Import Arabic translation
import esTranslation from './locales/es/translation.json'; // Import Spanish translation

i18n
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
        translation: arTranslation, // Add Arabic resources
      },
      es: {
        translation: esTranslation, // Add Spanish resources
      },
    },
    fallbackLng: 'en',
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

// Set initial direction
document.dir = 'ltr';

// Listen for language changes
i18n.on('languageChanged', (lng) => {
  document.dir = (lng === 'he' || lng === 'ar') ? 'rtl' : 'ltr';
});

export default i18n;
