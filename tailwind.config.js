/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1a202c', // Gray 900
        textPrimary: '#ffffff', // White
        textSecondary: '#a0aec0', // Gray 400
        accent: '#10b981', // Emerald 500
        buttonBg: '#059669', // Emerald 600
        buttonHover: '#047857', // Emerald 700
        borderColor: '#2d3748', // Gray 700
      },
      plugins: [],
    }
  }
}

