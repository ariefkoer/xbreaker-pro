/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'xbreaker': {
          'primary': '#7CB342',      // Green dari logo (lime green)
          'secondary': '#558B2F',    // Dark green dari logo
          'accent': '#9CCC65',       // Light green dari logo
          'dark': '#33691E',         // Darkest green
          'light': '#C5E1A5',        // Lightest green
          'yellow': '#CDDC39',       // Accent yellow-green
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-xbreaker': 'linear-gradient(135deg, #558B2F 0%, #7CB342 50%, #9CCC65 100%)',
        'gradient-xbreaker-dark': 'linear-gradient(135deg, #33691E 0%, #558B2F 100%)',
      },
    },
  },
  plugins: [],
}
