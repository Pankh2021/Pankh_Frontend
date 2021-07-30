module.exports = {
    purge: [],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {},
    },
    variants: {
      extend: {
        mixBlendMode: ['responsive'],
        backgroundBlendMode: ['responsive'],
        isolation: ['responsive'],
      },
    },
    plugins: [
      require('tailwindcss-blend-mode'),
    ],
}