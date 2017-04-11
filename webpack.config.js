const webpack = require('webpack');
const path = require('path');// NodeJS中的Path对象，用于处理目录的对象。
const HtmlWebpackPlugin = require('html-webpack-plugin');//html模板插入代码。
const ExtractTextPlugin = require("extract-text-webpack-plugin");//将组件中的样式提取出来。
var vue = require("vue-loader");//webpack的loader插件

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
	entry:path.resolve(__dirname, "src/app.js"),
	output:{
		path:path.resolve(__dirname, "build"),
		filename:'bundle.js'
	},
	module:{
		loaders:[
			{
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre', // 在babel-loader对源码进行编译前进行lint的检查
        include: [resolve('src')]
      },
			{test: /\.vue$/, use: 'vue-loader'},
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'}
		]
	},
	devServer:{
		//document => https://webpack.js.org/configuration/dev-server/#devserver
		//当使用HTML5 API,历史索引。html页面可能会在404年的任何反应。
		// historyApiFallback: {
		// 	 rewrites: [
		// 	    { from: /^\/$/, to: '/views/landing.html' },
		// 	    { from: /^\/subpage/, to: '/views/subpage.html' },
		// 	    { from: /./, to: '/views/404.html' }
		// 	  ]
		// },
		contentBase: "build",
		//热替换的区别就在于，当前端代码变动时，无需刷新整个页面，只把变化的部分替换掉。
		//自动刷新整个页面刷新
		inline:true,
		//stats(string or object) errors-only|minimal|none|normal|verbose(输出所有)
		stats:{
			//context: "./src/",
			//assets: true,
			colors:true,
			errors:true
		},
		//启用gzip压缩一切服务:
		//compress: true,
		host:"0.0.0.0",
	},
	resolve: {
		extensions: ['.vue','.js','.css','.sass'],
		alias: {
    	'vue$': 'vue/dist/vue.js'
  	}
	},
	// .vue的配置。需要单独出来配置
	// vue: {
	// 	loaders: {
	// 		//css: ExtractTextPlugin.extract('vue-style-loader', 'css-loader', 'sass-loader'),
	// 		//sass: ExtractTextPlugin.extract('vue-style-loader', 'css-loader!sass-loader')
	// 	}
	// },
  eslint: {
    configFile: resolve('./.eslintrc'), // 指定eslint的配置文件在哪里
    failOnWarning: true, // eslint报warning了就终止webpack编译
    failOnError: true, // eslint报error了就终止webpack编译
    cache: true, // 开启eslint的cache，cache存在node_modules/.cache目录里
  },
	plugins: [
    	//new webpack.optimize.UglifyJsPlugin(),
    	new HtmlWebpackPlugin({template: './src/index.html'})
  ],
	//devtool: '#cheap-module-eval-source-map'
}
