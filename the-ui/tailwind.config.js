// tailwind.config.js
module.exports = {
       purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],

    darkMode: false, // or 'media' or 'class'
    theme: {
      fontFamily:{
        sans: 'Mulish'
      },
      extend: {
          colors:{
              'soft-teal':'#008992',
              'background-teal': 'F5FEFF'
          }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
  }