/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        "99": "99",  // Custom z-index value
        "999": "999", // Even higher if needed
      },
      
    },
  },
  plugins: [],
}