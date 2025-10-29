import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0052CC',
          blue: '#0052CC',
        },
        secondary: {
          DEFAULT: '#6B7280',
          grey: '#6B7280',
        },
        dark: {
          DEFAULT: '#1F2937',
          grey: '#1F2937',
        },
        light: {
          DEFAULT: '#F3F4F6',
          grey: '#F3F4F6',
        },
        success: {
          DEFAULT: '#10B981',
          green: '#10B981',
        },
        accent: {
          DEFAULT: '#DBEAFE',
          blue: '#DBEAFE',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Inter', 'Poppins', 'sans-serif'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '1.25', fontWeight: '700' }],
        'h3': ['28px', { lineHeight: '1.35', fontWeight: '600' }],
        'h4': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'base': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'large': ['18px', { lineHeight: '1.7', fontWeight: '400' }],
        'button': ['16px', { lineHeight: '1', fontWeight: '600' }],
      },
      spacing: {
        'xs': '4px',
        'sm': '8px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
      borderRadius: {
        'default': '8px',
        'large': '12px',
      },
      boxShadow: {
        'default': '0 2px 8px rgba(0,0,0,0.1)',
        'elevated': '0 10px 25px rgba(0,0,0,0.15)',
      },
      transitionDuration: {
        'default': '300ms',
      },
      transitionTimingFunction: {
        'default': 'ease-in-out',
      },
    },
  },
  plugins: [],
}

export default config