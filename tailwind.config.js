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
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
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