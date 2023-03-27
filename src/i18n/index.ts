import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { basicLanguage } from '@/configuration'
import en from '@/i18n/locales/en'
import ar from '@/i18n/locales/ar'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: { ...en } },
      ar: { translation: { ...ar } }
    },
    lng: basicLanguage,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: true // react already safes from xss
    }
  })

export default i18n

