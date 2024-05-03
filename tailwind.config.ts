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
        sm: '740px',
        md: '910px',
        lg: '1075px',
        xl: '1320px',
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
