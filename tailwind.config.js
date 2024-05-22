/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-poppins)', 'sans-serif'],
      gochi: ['var--(font-gochiHand)', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'bg-image': "url('/images/bg.jpg')"
      },
      colors: {
        'beige-header': '#CCC9AA',
        'purple-contact': '#360B41',
        'purple-cart': '#7d677e'
      },
      fontFamily: {
        sans: ['var(--font-poppins)', 'sans-serif'],
        gochi: ['var--(font-gochiHand)', 'sans-serif']
      }
    },
  },
  plugins: [],
};
