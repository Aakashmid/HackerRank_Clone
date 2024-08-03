/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        page_background: '#151519', 
        page_background2: '#040817', 
        bg1:'#121418',
        bg2: '#0e141e', 
        bg3: '#1f202a',   // card bg 
        bg4:'#27272b', // dropdown bg of topbar
        card_hover_bg:'#35363f',
        textSecondary: '#a0aec0', // Gray 400
        thirdText:'#6687ff',
        textBlueGray:'#83839e',
        accent: '#10b981', // Emerald 500
        buttonBg: '#2EC866', // Emerald 600
        buttonBg2: '#5792ee', // Emerald 600
        buttonHover: '#28A55F', // Emerald 700
        borderColor: '#2d3748', // Gray 700
      },
      plugins: [],
    }
  }
}

