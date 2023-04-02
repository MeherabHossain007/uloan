/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'titillium': ['Titillium Web', 'sans']
      },
      backgroundImage: {
        'hero-pattern': "url('https://fxbyhlpaaetzdijcnzkf.supabase.co/storage/v1/object/public/sourceimage/15151395_5570215.jpg')",
      }
    },
  },
  plugins: [require("daisyui"), require('tailwindcss-gradient'), require("flowbite/plugin")],

  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
}