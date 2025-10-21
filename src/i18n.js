import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      home: 'TOURS',
      about: 'ABOUT US',
      tours: 'TOURS',
      contacts: 'CONTACT US',
      back: 'Back',
      duration: 'Duration',
      price: 'Price',
      tour_not_found: 'Tour not found'
    }
  },
  ru: {
    translation: {
      home: 'ЭКСКУРСИИ',
      about: 'О НАС',
      tours: 'ТУРЫ',
      contacts: 'КОНТАКТЫ',
      back: 'Назад',
      duration: 'Продолжительность',
      price: 'Цена',
      tour_not_found: 'Тур не найден'
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
