/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#151519', 
        bg2: '#1A191E', 
        bg3: '#22222D',   // card bg 
        bg4:'#2b2b30', // dropdown bg of topbar
        textPrimary: '#ffffff', // White
        textSecondary: '#a0aec0', // Gray 400
        accent: '#10b981', // Emerald 500
        buttonBg: '#2EC866', // Emerald 600
        buttonHover: '#28A55F', // Emerald 700
        borderColor: '#2d3748', // Gray 700
        thirdText:'#5773f0'
      },
      plugins: [],
    }
  }
}

