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
      tour_not_found: 'Tour not found',
      guide_photo: 'Guide Photo',
      guide_name: 'Yuliya Parchuk',
      experience: 'Experience',
      years_experience: '10+ years',
      languages: 'Languages',
      guide_languages: 'Russian, English, Italian',
      specialization: 'Specialization',
      guide_specialization: 'Art History & Cultural Tours',
      guide_description: 'My name is Yuliya Parchuk, and I am a passionate professional guide with over 10 years of experience in Paris. I specialize in art history and cultural tours, offering personalized experiences that bring the rich history and culture of Paris to life. Whether you\'re interested in world-famous museums, hidden architectural gems, or the bohemian charm of Montmartre, I will help you discover Paris through the eyes of someone who truly loves this magnificent city. I speak Russian, English, and Italian, ensuring comfortable communication for international visitors.'
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
      tour_not_found: 'Тур не найден',
      guide_photo: 'Фото гида',
      guide_name: 'Юлия Парчук',
      experience: 'Опыт работы',
      years_experience: 'Более 10 лет',
      languages: 'Языки',
      guide_languages: 'Русский, Английский, Итальянский',
      specialization: 'Специализация',
      guide_specialization: 'История искусства и культурные туры',
      guide_description: 'Меня зовут Юлия Парчук, и я страстный профессиональный гид с более чем 10-летним опытом работы в Париже. Я специализируюсь на истории искусства и культурных турах, предлагая персонализированные впечатления, которые оживляют богатую историю и культуру Парижа. Независимо от того, интересуетесь ли вы всемирно известными музеями, скрытыми архитектурными жемчужинами или богемным очарованием Монмартра, я помогу вам открыть Париж глазами того, кто искренне любит этот великолепный город. Я говорю на русском, английском и итальянском языках, обеспечивая комфортное общение для международных посетителей.'
    }
  },
  it: {
    translation: {
      home: 'TOUR',
      about: 'CHI SIAMO',
      tours: 'TOUR',
      contacts: 'CONTATTI',
      back: 'Indietro',
      duration: 'Durata',
      price: 'Prezzo',
      tour_not_found: 'Tour non trovato',
      guide_photo: 'Foto della guida',
      guide_name: 'Yuliya Parchuk',
      experience: 'Esperienza',
      years_experience: 'Più di 10 anni',
      languages: 'Lingue',
      guide_languages: 'Russo, Inglese, Italiano',
      specialization: 'Specializzazione',
      guide_specialization: 'Storia dell\'arte e tour culturali',
      guide_description: 'Il mio nome è Yuliya Parchuk e sono una guida professionale appassionata con oltre 10 anni di esperienza a Parigi. Mi specializzo nella storia dell\'arte e nei tour culturali, offrendo esperienze personalizzate che danno vita alla ricca storia e cultura di Parigi. Che tu sia interessato ai musei di fama mondiale, ai gioielli architettonici nascosti o al fascino bohémien di Montmartre, ti aiuterò a scoprire Parigi attraverso gli occhi di qualcuno che ama davvero questa magnifica città. Parlo russo, inglese e italiano, garantendo una comunicazione confortevole per i visitatori internazionali.'
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
