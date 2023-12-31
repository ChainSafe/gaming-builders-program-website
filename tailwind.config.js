/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-400': '#8FF12B',
        'brand-200': '#DFF7C7',
        'brand-800': '#587A36',
        bg: '#141414',
        plate: '#B3B3B3',
        cardBorder: '#373737',
        'gray-900': '#141414',
        'gray-800': '#4D4D4D',
        'gray-700': '#252425',
        'gray-600': '#BFBFBF',
      },
      gridTemplateColumns: {
        '3-fixed': 'repeat(3, 384px)',
      },
      backgroundImage: {
        'green-bg': "url('/bg/hero2.png')",
        'jade-bg': "url('/bg/bg-2.png')",
      },
    },
  },
  plugins: [],
};
