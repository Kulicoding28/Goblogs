const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1080px",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100%",
          },
        },
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const utilities = {
        ".bg-search": {
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 34 35' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.7041 0.970695C6.75764 0.970695 0.293457 7.48553 0.293457 15.4942C0.293457 23.5029 6.75764 30.0177 14.7041 30.0177C17.1333 30.0177 19.5213 29.4368 21.5388 28.3164C21.7004 28.5124 21.8796 28.693 22.0741 28.8558L26.1914 33.0054C26.5716 33.4366 27.0352 33.7848 27.5537 34.0289C28.0723 34.2729 28.6349 34.4075 29.2069 34.4245C29.779 34.4415 30.3485 34.3404 30.8804 34.1276C31.4123 33.9147 31.8954 33.5945 32.3001 33.1866C32.7048 32.7788 33.0225 32.2919 33.2337 31.7558C33.4449 31.2197 33.5452 30.6458 33.5284 30.0692C33.5115 29.4927 33.3779 28.9257 33.1358 28.4031C32.8937 27.8804 32.5481 27.4132 32.1203 27.03L28.003 22.8804C27.8024 22.6782 27.5817 22.4975 27.3442 22.341C28.4559 20.3077 29.1558 17.9425 29.1558 15.4527C29.1558 7.44403 22.6917 0.929199 14.7452 0.929199L14.7041 0.970695ZM14.7041 5.12027C20.4271 5.12027 24.9973 9.7263 24.9973 15.4942C24.9973 18.2329 24.0092 20.7642 22.2799 22.6315C22.2387 22.673 22.1976 22.7145 22.1564 22.756C21.9619 22.9188 21.7828 23.0994 21.6211 23.2954C19.8095 24.9552 17.3391 25.9096 14.6629 25.9096C8.93982 25.9096 4.3696 21.3036 4.3696 15.5357C4.3696 9.76779 8.93982 5.16177 14.6629 5.16177L14.7041 5.12027Z' fill='%235B5B5B'/%3E%3C/svg%3E%0A")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "16px",
        },
      };
      addUtilities(utilities);
    }),
    require("@tailwindcss/typography"),
  ],
};
