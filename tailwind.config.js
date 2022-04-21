module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './node_modules/flowbite/**/*.js'],

  darkMode: 'class',
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
        text_primary: '#1e293b',
        text_secondary: '#64748b',
        text_primary_dark: '#e2e8f0',
        text_secondary_dark: '#cbd5e1',
      },
      screen: {
        '2xl': '1320px',
      },
    },
  },
  plugins: ['flowbite/plugin'],
};
