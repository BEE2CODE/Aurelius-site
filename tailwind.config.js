/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend:{
      colors:{
      customJana: "#EEEBD0",
      customMarsland: '#111111',
      customBlazeHaze: '#F7F7F7',
      customTiaMaris: '#BD4423',
      customPurity: '#FFFFF',
      // customFuscousGrey: '#FFFFF',
      customAlto: '#'
    }},
  },
  plugins: [],
};

