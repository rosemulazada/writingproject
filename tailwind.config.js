/** @type {import('tailwindcss').Config} */
export default {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      'garamond': ['EB Garamond', 'serif'],
    },
    fontSize: {
      'heading-extra-large': [rem(34), { lineHeight: rem(37.4) }],
      'heading-large': [rem(25), { lineHeight: rem(27.5) }],
      'heading-medium': [rem(20), { lineHeight: rem(24) }],
      'body': [rem(18), { lineHeight: rem(25.2) }],
      'body-small': [rem(16), { lineHeight: rem(24) }],
      'button': [rem(16), { lineHeight: rem(18.75) }],
      'tag': [rem(16), { lineHeight: rem(24) }],
      // Desktop overrides
      'desktop-heading-extra-large': [rem(56), { lineHeight: rem(61.6) }],
    },
    fontWeight: {
      400: '400'
    },
    colors: {
      // Custom colors
      'chocolate': '#875437',
      'cream': '#FFFDF4',
      'rose-100': '#FFA590',
      'rose-200': '#400D01',
      'rose-300': '#230700',
      'gold-100': '#FFDC97',
      'gold-200': '#735127',
      'gold-300': '#483000',
      'lemon-100': '#F2EDA2',
      'lemon-200': '#3F3B00',
      'lemon-300': '#252E00',
      'turquoise-100': '#99BFBB',
      'turquoise-200': '#113732',
      'turquoise-300': '#0C2723',
      // Default theme colors
      'bright': 'rgb(var(--color-bright))',
      'dark': 'rgb(var(--color-dark))',
      'very-dark': 'rgb(var(--color-very-dark))',
      // Applied theme colors
      'theme': 'rgb(var(--color-theme))',
      'theme-inverse': 'rgb(var(--color-theme-inverse))',
      'shade': 'rgb(var(--color-shade))',
      // Utility colors
      'black': '#000000',
      'white': '#FFFFFF',
      transparent: 'transparent',
      inherit: 'inherit',
    },
    screens: {
      xxs: rem(320),
      xs: rem(460),
      sm: rem(640),
      md: rem(768),
      lg: rem(1024),
      xl: rem(1280),
      '2xl': rem(1536),
    },
    extend: {
      keyframes: {
        scale: {
          '0%': { transform: 'scaleY(1)' },
          '100%': { transform: 'scaleY(0.2)' },
        }
      },
      height: {
        screen: 'calc(var(--vh) * 100)',
      }
    }
  },
  plugins: [],
};

// Converts pixels to rem units, 1px equals 0.0625 rem
function rem(px) {
  return `${0.0625 * px}rem`;
}