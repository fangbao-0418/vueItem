var path = require('path');
var rimraf = require('rimraf');
process.env.NODE_ENV = 'production'
const webpack = require("webpack");
var webpackConfig = require('../webpack.config.js');
rimraf.sync(path.resolve(__dirname, '../dist'), ['chmod', 'rmdir', 'rmdirSync', 'readdirSync'], function(){
  console.log('del')
  webpack(webpackConfig, (err, stats) => {
    if (err || stats.hasErrors()) {
      console.log(err)
      // Handle errors here
    }
  // Done processing
  });
})
