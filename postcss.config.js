module.exports = {
  plugins: [
    // ...
    require('postcss-import'),
    require('postcss-custom-properties'),
    require('postcss-mixins'),
    require('postcss-each'),
    require('postcss-at-rules-variables'),
    require('tailwindcss'),
    require('postcss-conditionals'),
    // require('precss'),
    // require('postcss-each-variables'),
    require('postcss-nested'),
    require('postcss-color-alpha'),
    require('autoprefixer'),
    // ...
  ]
}