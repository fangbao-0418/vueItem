var path = require('path');
var rf = require('rimraf');
process.env.NODE_ENV = 'production'
const webpack = require("webpack");
var webpackConfig = require('../webpack.config.js');
rf.sync(path.resolve(__dirname, '../dist'), function(error){
  if (error) throw error
  console.log('del')
  // webpack(webpackConfig, (err, stats) => {
  //   if (err || stats.hasErrors()) {
  //     console.log(err)
  //     // Handle errors here
  //   }
  // // Done processing
  // });
})
