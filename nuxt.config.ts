// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      title: 'Forge Landing Pages',
    },
    baseURL: '/cfyomz'
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/image', '@pinia/nuxt'],
  vite: {
    plugins: [
      tailwindcss(),
    ]
  },

  runtimeConfig: {
    konnective: {
      loginId: "abc",
      password: "abc123",
      campaignId: 24,
    },
    public: {
      encryptResponses: true, // Optional public flag
      pixel_id: "2090427268412378",
      gtmId: 'GTM-W7MPKBF2',
    }
  }
})
