module.exports = {
    purge: [],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
      listStyleType: {
        none: 'none',
       disc: 'disc',
       decimal: 'decimal',
       backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
      },
      extend: {
        opacity: {
          '10': '0.1',
          '20': '0.2',
          '95': '0.95',
         }
      },
      divideWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
       '3': '3px',
        '4': '4px',
       '6': '6px',
       '8': '8px',
      }
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
      require('@tailwindcss/custom-forms'),
      require('tailwindcss-filters'),
    ],
}