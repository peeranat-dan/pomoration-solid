/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
    },
    extend: {
      colors: {
        danger: {
          50: '#FDEDED',
          100: '#FAD6D6',
          200: '#F6ACAC',
          300: '#F18383',
          400: '#ED5A5A',
          500: '#E83131',
          600: '#CA1717',
          700: '#971111',
          800: '#650B0B',
          900: '#320606',
        },
        info: {
          50: '#EDF7FD',
          100: '#D6EDFA',
          200: '#ACDBF6',
          300: '#83C9F1',
          400: '#5AB7ED',
          500: '#31A4E8',
          600: '#1788CA',
          700: '#116697',
          800: '#0B4465',
          900: '#062232',
        },
        primary: {
          50: '#F1F1FE',
          100: '#DFDFFC',
          200: '#BEBFF9',
          300: '#9E9FF5',
          400: '#7D7FF2',
          500: '#5D5FEF',
          600: '#2024E9',
          700: '#1215B5',
          800: '#0C0E79',
          900: '#06073C',
        },
        secondary: {
          50: '#FFFAF0',
          100: '#FFF3DB',
          200: '#FFE8BD',
          300: '#FFDB99',
          400: '#FFD17A',
          500: '#FFC556',
          600: '#FFAD14',
          700: '#CC8500',
          800: '#8A5A00',
          900: '#422B00',
        },
        background: '#FFFAEE',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
