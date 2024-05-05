import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        fold: '290px',
        xxs: '326px',
        xs: '520px',
        sm: '750px',
        md: '920px',
        lg: '1075px',
        xl: '1400px',
      },
      colors: {
        foreground: 'var(--foreground)',
        background: 'var(--background)',
        secondary: 'var(--secondary)',
      },
    },
  },
  plugins: [],
}
export default config
