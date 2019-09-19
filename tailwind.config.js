const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    fontFamily: {
      // 'body': ['Open Sans', ...],
      sans: ['"Fira Sans"', "Helvetica", "Arial", "sans-serif"]
    },
    extend: {
      colors: {
        danger: {
          "100": "#FDE9ED",
          "200": "#F7BAC5",
          "300": "#F28C9D",
          "400": "#EC5D74",
          "500": "#E62E4C",
          "600": "#C92843",
          "700": "#AD2339",
          "800": "#901D30",
          "900": "#731726"
        },
        info: {
          "100": "#E9F6FD",
          "200": "#BAE3F7",
          "300": "#8CCFF2",
          "400": "#5DBCEC",
          "500": "#2EA8E6",
          "600": "#2893C9",
          "700": "#237EAD",
          "800": "#1D6990",
          "900": "#175473"
        },
        primary: {
          "100": "#FFF3EA",
          "200": "#FFD8BC",
          "300": "#FFBE8F",
          "400": "#FFA361",
          "500": "#FF8833",
          "600": "#DF772D",
          "700": "#C06626",
          "800": "#A05520",
          "900": "#804419"
        },
        accent: {
          "100": "#E9F8F7",
          "200": "#B8EAE6",
          "300": "#88DCD5",
          "400": "#57CDC4",
          "500": "#26BFB3",
          "600": "#21A79D",
          "700": "#1D9087",
          "800": "#187870",
          "900": "#13605A"
        },
        success: {
          "100": "#EFFAEA",
          "200": "#CDEFBC",
          "300": "#89E3A7",
          "400": "#88D861",
          "500": "#14CC52",
          "600": "#24B353",
          "700": "#4D9926",
          "800": "#408020",
          "900": "#336619"
        },
        'gray': {
          100: '#F6F5F4',
          200: '#E9E7E3',
          300: '#DCD8D3',
          400: '#C2BBB1',
          500: '#A89E90',
          600: '#978E82',
          700: '#655F56',
          800: '#4C4741',
          900: '#322F2B',
        }
        // 'gray': {
        //   100: '#F2F4F4',
        //   200: '#DEE4E3',
        //   300: '#C9D3D2',
        //   400: '#A1B2B0',
        //   500: '#79918E',
        //   600: '#6D8380',
        //   700: '#495755',
        //   800: '#364140',
        //   900: '#242C2B',
        // }
      }
    },
    colors: {
      primary: colors.orange,
      accent: colors.teal,
      black: colors.black,
      white: colors.white,
      danger: colors.red,
      warning: colors.yellow,
      success: colors.green,
      purple: colors.purple,
      pink: colors.pink,
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
      '3xl': '1.625rem',
      '4xl': '1.875rem',
      '5xl': '2.125rem',
      '6xl': '2.625rem',
    }
  },
  variants: {},
  plugins: []
};
