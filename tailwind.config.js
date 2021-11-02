module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "dinamit-regular": ["Dinamit Regular"],
        "dinamit-extralight": ["Dinamit Extralight"],
        "dinamit-light": ["Dinamit Light"],
        "dinamit-medium": ["Dinamit Medium"],
        "dinamit-semibold": ["Dinamit Semibold"],
        "nocturno-light": ["Nocturno Light"],
        "nocturno-regular": ["Nocturno Regular"],
        "nocturno-semibold": ["Nocturno Semibold"],
      },
      container: {
        center: true,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
