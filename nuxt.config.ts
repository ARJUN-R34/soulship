import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  runtimeConfig: {
    // Keys within public, will be also exposed to the client-side
    public: {
      SUPABASE_URL: 'https://vrvotvgixvrddbrhbdcb.supabase.co',
      SUPABASE_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZydm90dmdpeHZyZGRicmhiZGNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjE2Mjg3NzMsImV4cCI6MTk3NzIwNDc3M30.RJg-q4dXglFsbWQfDPsc5aQMKsispgJlWY8h118sel8',
    },
  },
  app: {
    cdnURL: './',
  },
  buildModules: [
    '@nuxtjs/tailwindcss',
  ],
  modules: [
    ['@pinia/nuxt', {
      autoImports: [
        // automatically imports `usePinia()`
        'defineStore',
        'storeToRefs',
        'acceptHMRUpdate',
        // automatically imports `usePinia()` as `usePiniaStore()`
        ['defineStore', 'definePiniaStore'],
      ],
    },
    ],
    '@nuxtjs/supabase',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
  ],
  css: ['~/assets/css/tailwind.css'],
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
  colorMode: {
    classSuffix: '',
  },
  // https://github.com/nuxt/framework/issues/6204#issuecomment-1201398080
  hooks: {
    'vite:extendConfig': function (config: any, { isServer }: any) {
      if (isServer) {
        // Workaround for netlify issue
        // https://github.com/nuxt/framework/issues/6204
        config.build.rollupOptions.output.inlineDynamicImports = true
      }
    },
  },
})
