/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#deedd6',
        'custom-card': '#eae8eb',
      },
      borderRadius: {
        'custom-tr': '100px',
        'custom-bl': '100px',
      },
      borderWidth: {
        '1': '1px',
        '3': '3px',
        '5': '5px',
        '7': '7px',
      },
    },
  },
  plugins: [],
}

