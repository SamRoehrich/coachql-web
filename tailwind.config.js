module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderColor: ["checked"],
      backgroundColor: ["checked"],
    },
  },
  plugins: [require("@tailwindcss/forms")],

  "tailwindCSS.includeLanguages": {
    plaintext: "html",
    typescript: "typescript",
    typescriptreact: "typescriptreact",
  },
};
