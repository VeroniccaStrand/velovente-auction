/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: '2rem',
      center: true,
    },
    extend: {
    fontFamily: {
      Source: ['Source Code Pro'],
      Display: ['Big Shoulders Display'],
      'body': ['"Open Sans"'],
    } 
  },// Om du har ytterligare anpassningar i temat kan du lägga till dem här
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};

export default config;