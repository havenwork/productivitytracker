/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      'xsm': '425px',
      'sm': '640px',
      'md' : '768px',
      'lg': '1023px',
      'xl' : '1280',
      '2xl' : '1536',
    },
    extend: {
      width: {
        '400': '400px',
        '550': '550px',
        '600': '600px',
      }
    },
  },
  plugins: [],
};
