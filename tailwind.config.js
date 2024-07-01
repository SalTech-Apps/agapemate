/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    theme: {
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['"Itim" cursive', ],
        'body': ['"Sniglet", system-ui'],
      }
    },
    extend: {
      colors: {
        primary: "#F08100",
        pink:"#FEF7F0",
        "text-black":"#21201F"
      },
     
    },
  },
  plugins: [],
};
