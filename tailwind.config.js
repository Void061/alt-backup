module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      
      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1280px',
      },
    },
    extend: {
      colors : {
        primary : "#001d4f",
        secundary : "#1CBBE2"
      },
      backgroundImage: {
        'slide-img': "url('/images/bg-slide.png')",        
        'slide-img-1': "url('/images/bg-slide-1.png')",
      }
    },
  },
  plugins: [],
}
