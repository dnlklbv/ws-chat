import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";

import enTrans from './locales/en.json';
import ruTrans from './locales/ru.json';

const resources = {
  en: {
    translation: enTrans,
  },
  ru: {
    translation: ruTrans,
  }
};

i18n
  .use(LanguageDetector) // passes i18n down to react-i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,

    keySeparator: false,

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
