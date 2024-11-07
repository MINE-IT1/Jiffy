/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // Add the Roboto font family
      },
      colors: {
        "pink-custom": "#C760B6",
        "blue-custom": "#232DC4",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to bottom, #C760B6 0%, rgba(35, 45, 196,0.5 ) 64.4%)",
        "heading-gradient":
          "linear-gradient(to right, #C760B6 0%, rgba(35, 45, 196, 0.7) 64.4%)",
        "button-gradient":
          "linear-gradient(to right, #C760B6 0%, rgba(35, 45, 196, 0.8) 64.4%)",
        "quote-gradient":
          "linear-gradient(to right, #C760B6 0%, rgba(35, 45, 196, 0.4) 64.4%)",
        "plantext-gradient":
          "linear-gradient(to right, #C760B6 0%, rgba(35, 45, 196, 0.9) 64.4%)",
        "planprice-gradient":
          "linear-gradient(to bottom, #C760B6 0%, rgba(35, 45, 196,0.8 ) 64.4%)",
        "planpricehover-gradient":
          "linear-gradient(to bottom, #C760B6 0%, rgba(35, 45, 196,0.4 ) 64.4%)",
        "planbuttonehover-gradient":
          "linear-gradient(to bottom, #FFFFFF 0%, rgba(255, 255, 255,1 ) 64.4%)",
        "header-gradient":
          "linear-gradient(to left, #C760B6 10%, rgba(35, 45, 196,0.4 ) 64.4%)",
        "features-gradient" : "linear-gradient(to bottom, rgba(199, 96, 182, 0.2) 0%, rgba(35, 45, 196, 0.2) 100%)",

      },
    },
  },
  plugins: [],
};
