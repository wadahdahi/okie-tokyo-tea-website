import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import ar from './locales/ar.json';
import de from './locales/de.json';

// ARABIC COUNTRY CODES
const ARAB_COUNTRIES = ['SA', 'AE', 'QA', 'KW', 'BH', 'OM', 'JO', 'LB', 'EG', 'LY', 'DZ', 'MA', 'TN', 'SY', 'IQ', 'YE', 'PS', 'SD'];

// GEOLOCATION DETECTION
const detectRegion = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    const country = data.country_code;

    if (country === 'DE' || country === 'AT' || country === 'CH') return 'de';
    if (ARAB_COUNTRIES.includes(country)) return 'ar';
    return 'en';
  } catch (error) {
    return 'en'; // FALLBACK
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
      de: { translation: de },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

// TRIGGER AUTO DETECTION IF NO SAVED LANGUAGE
if (!localStorage.getItem('i18nextLng')) {
  detectRegion().then((lang) => {
    i18n.changeLanguage(lang);
  });
}

// HANDLE RTL DYNAMICS
i18n.on('languageChanged', (lng) => {
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
});

// INITIAL SET DIR
document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
document.documentElement.lang = i18n.language;

export default i18n;
