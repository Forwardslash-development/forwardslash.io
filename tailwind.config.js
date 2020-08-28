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
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.75rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem'
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
