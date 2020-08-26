module.exports = {
  purge: [],
  theme: {
    screens: {
      // => @media (min-width: 768px) { ... }
      mobileS: '320px',
      mobileM: '375px',
      mobileL: '425px',
      sm: '640px',
      md: '800px',
      lg: '1024px',
      xl: '1440px',
      desktop: '2560px'
    },
    extend: {
      colors: {
        'primary-blue': '#000066',
        'secondary-blue': '#6ccff6'
      }
    }
  },
  variants: {},
  plugins: []
};
