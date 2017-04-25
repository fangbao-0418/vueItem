var webpack = require('webpack');
var path = require('path');// NodeJS中的Path对象，用于处理目录的对象。
var HtmlWebpackPlugin = require('html-webpack-plugin');//html模板插入代码。
var ExtractTextPlugin = require("extract-text-webpack-plugin");//将组件中的样式提取出来。
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
function resolve (dir) {
  return path.resolve(__dirname, dir);
}

var isPro = process.env.NODE_ENV.trim() === 'production';

var plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: `"${process.env.NODE_ENV.trim()}"`
    }
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
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    "window.jQuery": "jquery"
  })
];

if(isPro){
  plugins = Array.prototype.concat.call(plugins,[
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
            safe: true
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
    new webpack.NoEmitOnErrorsPlugin()
  ])
}

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
        use: 'eslint-loader',
        enforce: 'pre', // 在babel-loader对源码进行编译前进行lint的检查
        include: [resolve('src')],
        exclude: [/(node_modules)/]
      },
			{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            sass: ExtractTextPlugin.extract({
              fallback: 'vue-style-loader',
              use: [
                {
                  loader:'css-loader'
                },
                {
                  loader:'sass-loader',
                  options: {
                    indentedSyntax: true
                  }
                }
              ],
            })
          }
        }
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /(node_modules)/,
        include: [resolve('src')]
      },
			{
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                indentedSyntax: true
              }
            }
          ]
        })
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader'
          ]
        })
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: isPro ? './static/imgs/[name].[hash:7].[ext]' : '[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: isPro ? './static/fonts/[name].[hash:7].[ext]' : '[name].[hash:7].[ext]'
        }
      }
		]
	},
	devServer:{
		contentBase: "build",
		//热替换的区别就在于，当前端代码变动时，无需刷新整个页面，只把变化的部分替换掉。
		//自动刷新整个页面刷新
		inline: true,
		//stats(string or object) errors-only|minimal|none|normal|verbose(输出所有)
		stats:{
			//context: "./src/",
			//assets: true,
			colors: true,
			errors: true
		},
		//启用gzip压缩一切服务:
		//compress: true,
		host: "0.0.0.0",
    port: "3002"
	},
	resolve: {
		extensions: ['.vue','.js','.css','.sass','.scss'],
		alias: {
    	'vue$': 'vue/dist/vue.esm.js',
  	}
	},
	plugins: plugins,
	devtool: isPro ? '#source-map' : '#cheap-module-eval-source-map'
}
