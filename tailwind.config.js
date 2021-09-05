module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        8: "repeat(8, minmax(0, 1fr))",
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["checked"],
      backgroundColor: ["checked", "active"],
    },
  },
  plugins: [require("@tailwindcss/forms")],

  "tailwindCSS.includeLanguages": {
    plaintext: "html",
    typescript: "typescript",
    typescriptreact: "typescriptreact",
  },
};
