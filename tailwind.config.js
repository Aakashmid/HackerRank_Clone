/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#1D1F27',
        primary: '#00E676',
        secondary: '#80D8FF',
        accent: '#FF4081',
        textPrimary: '#FFFFFF',
        textSecondary: '#B0BEC5',
        border: '#2E3440',
        hover: '#303846',
        error: '#FF5252',
        warning: '#FFC107',
        success: '#4CAF50',
      },
  },
  plugins: [],
}
}

