/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    screens: {
      'xsm': '425px',
      'msm' : '475px',
      'sm': '640px',
      'md' : '768px',
      'lg': '1023px',
      'xl' : '1150px',
      '2xl' : '1200px',
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
