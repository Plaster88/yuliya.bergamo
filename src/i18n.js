import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: 'TOURS',
      about: 'ABOUT US',
      tours: 'TOURS',
      contacts: 'CONTACT US'
    }
  },
  ru: {
    translation: {
      home: 'ЭКСКУРСИИ',
      about: 'О НАС',
      tours: 'ТУРЫ',
      contacts: 'КОНТАКТЫ'
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;
