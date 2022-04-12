module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],
  darkMode: 'media',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        dark: '#121829',
        primary: '#7B6EF6',
        secondary: '#1EA5FC',
      },
      screen: {
        '2xl': '1320px',
      },
    },
  },
  plugins: ['flowbite/plugin'],
};
