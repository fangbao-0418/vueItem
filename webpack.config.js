const webpack = require('webpack');
const path = require('path');// NodeJS中的Path对象，用于处理目录的对象。
const HtmlWebpackPlugin = require('html-webpack-plugin');//html模板插入代码。
const ExtractTextPlugin = require("extract-text-webpack-plugin");//将组件中的样式提取出来。
function resolve (dir) {
  return path.resolve(__dirname, dir)
}
const isPro = process.env.NODE_ENV.trim() === 'production';
module.exports = {
	entry: resolve("src/app.js"),
	output:{
		path: resolve("dist"),
    filename: isPro ? './static/js/[name].[hash].js' : '[name].[hash].js',
    chunkFilename: isPro ? './static/js/[name].[chunkhash].js' : '[name].[chunkhash].js'
	},
	module:{
		rules: [
			{
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre', // 在babel-loader对源码进行编译前进行lint的检查
        include: [resolve('src')]
      },
			{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              fallback: 'vue-style-loader',
              use: ['css-loader'],
            }),
            sass: ExtractTextPlugin.extract({
              fallback: 'vue-style-loader',
              use: ['css-loader', 'sass-loader'],
            })
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        include: [resolve('src')],
        query: {
                    presets: ['es2015']
      }
      },
			{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
			{
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        })
      }
		]
	},
	devServer:{
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
    	'vue$': 'vue/dist/vue.esm.js',
  	}
	},
	plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `"${process.env.NODE_ENV.trim()}"`
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: isPro,
        drop_debugger: isPro,
      },
      //sourceMap: true
    }),
    //给输出的文件头部添加注释信息。
    new webpack.BannerPlugin('This file is created by fangbao'),
    new ExtractTextPlugin({
      filename: isPro ? './static/css/[name].[contenthash].css' : '[name].[contenthash].css',
      //disable: false,
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // 要把<script>标签插入到页面哪个标签里(body|true|head|false)
      inject: 'body',

      // hash如果为true，将添加hash到所有包含的脚本和css文件，对于解除cache很有用
      // minify用于压缩html文件，其中的removeComments:true用于移除html中的注释，collapseWhitespace:true用于删除空白符与换行符
      removeComments:true,
      collapseWhitespace:true,
      // hash:true
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ],
	devtool: isPro ? false : '#cheap-module-eval-source-map'
}
