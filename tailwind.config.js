/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home-bg': 'url(assets/images/backgrounds/home_bg.svg)',
      },
      boxShadow: {
        'navigation': '3px 6px 8px rgba(0, 0, 0, 0.25)',
        '3xl': '0px 0px 14px rgba(0, 0, 0, 0.25)',

      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        alegreya: ['Alegreya', 'serif'],
        maiandra: ['Maiandra GD Demi Bold'],
      },
      colors: {
        blue: {
          DEFAULT: '#3771C1',
          100: '#3771C1',
        },
        secondary: {
          DEFAULT: '#242933',
          100: '#2A303C',
        },
        gray: {
          // LIGHT MODE
          50: '#828282',
          100: '#F3F4F6',
          200: '#E6E7EB',
          300: '#D7D7D7',
          400: '#B1B2B3',
          // NEUTRAL
          500: '#8A8C8E',
          // DARK MODE
          600: '#64676A',
          700: '#3E4044',
          800: '#282A2D',
          900: '#202123',
        },
        green: {
          DEFAULT: '#4BB326',
          50: '#B7ECA5',
          100: '#AAE894',
          200: '#8FE172',
          300: '#75DA51',
          400: '#5AD32F',
          500: '#4BB326',
          600: '#38851C',
          700: '#245612',
          800: '#112809',
          900: '#000000',
        },
        sky: {
          DEFAULT: '#3FC8FF',
          50: '#F7FDFF',
          100: '#E2F7FF',
          200: '#B9EBFF',
          300: '#91DFFF',
          400: '#68D4FF',
          500: '#3FC8FF',
          600: '#07B8FF',
          700: '#0093CE',
          800: '#006B96',
          900: '#00435E',
        },
        indigo: {
          DEFAULT: '#4170CB',
          50: '#D1DCF2',
          100: '#C1D0EE',
          200: '#A1B8E5',
          300: '#81A0DD',
          400: '#6188D4',
          500: '#4170CB',
          600: '#2E57A6',
          700: '#21407A',
          800: '#15294E',
          900: '#091222',
        },
      },

    },
  },
  plugins: [require('daisyui')],
  // daisyUI config (optional)
  // daisyui: {
  //   styled: true,
  //   themes: [{
  //     dark: {
  //       'primary': '#3771C1',
  //       'secondary': '#2A303C',
  //       'accent': '#37CDBE',
  //       'neutral': '#3D4451',
  //       'base-100': '#FFFFFF',
  //       'info': '#3ABFF8',
  //       'success': '#36D399',
  //       'warning': '#FBBD23',
  //       'error': '#F87272',
  //     },
  //   },
  //   ],
  //   base: true,
  //   utils: true,
  //   logs: true,
  //   rtl: false,
  //   prefix: '',
  //   darkTheme: 'dark',
  // },
}
