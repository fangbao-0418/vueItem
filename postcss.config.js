// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": [
    require('autoprefixer'),
    require('postcss-inline-svg'),
    require('postcss-write-svg'),
    require('postcss-csso')
  ]
}
