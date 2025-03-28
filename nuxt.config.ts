import Aura from '@primevue/themes/aura';
import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
      "@nuxtjs/tailwindcss",
      "@primevue/nuxt-module",
      '@nuxtjs/i18n',
      '@nuxtjs/robots',
      [
          'yandex-metrika-module-nuxt3',
          {
              id: '100609287',
              webvisor: true,
              clickmap: true,
              // useCDN: false,
              trackLinks: true,
              accurateTrackBounce: true,
          }
      ]
  ],
  css: [
      'primeicons/primeicons.css',
      '~/assets/styles/tailwind.css',
      '~/assets/styles/vars.css',
      '~/assets/styles/sass/style.sass',

  ],
    i18n: {
        locales: [
            { code: 'en', name: 'English', file: 'en.json' },
            { code: 'ru', name: 'Русский', file: 'ru.json' }
        ],
        defaultLocale: 'ru',
        strategy: 'prefix',
        lazy: true, // Включает ленивую загрузку для подгрузки файлов по мере необходимости
        langDir: fileURLToPath(new URL('./locales', import.meta.url)),
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            alwaysRedirect: true,
            fallbackLocale: 'en'
        },

    },

  primevue: {
    autoImport: true,
    importTheme: { from: '~/themes/theme.js' },
    // options: {
    //   theme: {
    //     preset: Aura,
    //     variables: {
    //       // Пример изменения стандартных цветов PrimeVue
    //       '--primary-color': '#1D4ED8',  // Пример кастомного цвета
    //       '--secondary-color': '#9333EA',  // Пример кастомного цвета
    //       '--background-color': '#f4f4f4', // Пример кастомного фона
    //     }
    //   }
    // }
  },
    runtimeConfig: {
        public:{
            //APIURL: 'http://127.0.0.1:8000',
            APIURL: 'https://laurom.ru',
        }
    },

  compatibilityDate: '2024-11-08'
})