const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    fontFamily: {
      // 'body': ['Open Sans', ...],
      sans: ['"Fira Sans"', "Helvetica", "Arial", "sans-serif"]
    },
    extend: {
      colors: {
        gray: {
          "100": "#FCF9F7",
          "200": "#E2DEDB",
          "300": "#CCC5C2",
          "400": "#AAA7A6",
          "500": "#97908C",
          "600": "#716A66",
          "700": "#615751",
          "800": "#433C37",
          "900": "#2D211A"
        }
      }
    },
    colors: {
      primary: colors.orange,
      accent: colors.teal,
      black: colors.black,
      white: colors.white,
      danger: colors.red,
      yellow: colors.yellow,
      success: colors.green,
      info: colors.blue
    },
    opacity: {
      "0": "0",
      "10": ".1",
      "20": ".2",
      "30": ".3",
      "40": ".4",
      "50": ".5",
      "60": ".6",
      "70": ".7",
      "80": ".8",
      "90": ".9",
      "100": "1"
    },
    fontSize: {
      'xs': '.65rem',
      'sm': '.70rem',
      'base': '.85rem',
      'lg': '1rem',
      'xl': '1.15rem',
      '2xl': '1.4rem',
      '3xl': '1.725rem',
      '4xl': '2rem',
      '5xl': '2.75rem',
      '6xl': '3.85rem',
    }
  },
  variants: {},
  plugins: []
};
