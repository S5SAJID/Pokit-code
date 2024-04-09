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
        light: {
          100: "#ffffff",
          200: "#fefefe",
          300: "#fefefe",
          400: "#fdfdfd",
          500: "#fdfdfd",
          600: "#cacaca",
          700: "#989898",
          800: "#656565",
          900: "#333333"
        },
        dark: "#131313"
      },
      fontFamily: {
        'space': "Space Grotesk",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
