/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          primary: "#EB7D00",
          secondary: {
            100: "#ffffff",
            300: "#f1f5f9", /* bg-component */
            555: "#27272a", /* SideBar*/
            900: "#ffffff", /* color principal */
          },
        },
      },
    },
    plugins: [require("@headlessui/tailwindcss")],
  };
  