
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import heTranslation from './locales/he/translation.json';

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
  document.dir = lng === 'he' ? 'rtl' : 'ltr';
});

export default i18n;
