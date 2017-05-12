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
    filename: isPro ? 'css/[name].[contenthash].css' : '[name].[contenthash].css',
    //disable: false,
    allChunks: true
  }),
  new HtmlWebpackPlugin({
    template: './src/index.html',
    // 要把<script>标签插入到页面哪个标签里(body|true|head|false)
    inject: 'true',
    filename: resolve("dist/index.html"),
    // hash如果为true，将添加hash到所有包含的脚本和css文件，对于解除cache很有用
    // minify用于压缩html文件，其中的removeComments:true用于移除html中的注释，collapseWhitespace:true用于删除空白符与换行符
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true
      // more options:
      // https://github.com/kangax/html-minifier#options-quick-reference
    },
    // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    chunksSortMode: 'dependency'
    // hash:true
  }),
  new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    "window.jQuery": 'jquery'
  }),
  // 将node_modules打入vendor
  // new webpack.optimize.CommonsChunkPlugin({
  //   name: 'vendor',
  //   minChunks: function (module, count) {
  //     // this assumes your vendor imports exist in the node_modules directory
  //     // any required modules inside node_modules are extracted to vendor
  //       return (
  //         module.resource &&
  //         /\.js$/.test(module.resource) &&
  //         module.resource.indexOf(
  //           path.join(__dirname, '../node_modules')
  //         ) === 0
  //       )
  //   }
  // }),
  // To extract the webpack bootstrap logic into a separate file
  // 其他打入清单
  // new webpack.optimize.CommonsChunkPlugin({
  //   name: 'manifest',
  //   chunks: ['vendor']
  // })
];

if(isPro){
  plugins = Array.prototype.concat.call(plugins,[
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false,
    //     drop_console: isPro,
    //     drop_debugger: isPro,
    //   },
    //   //sourceMap: true
    // }),
    new webpack.NoEmitOnErrorsPlugin()
  ])
}

module.exports = {
	entry: {
    index: resolve("src/app.js")
  },
	output:{
		path: isPro ? resolve("dist/assets") : resolve("dist"),
    publicPath: isPro ? "/bbs/assets/" : "",
    filename: isPro ? 'js/[name].[chunkhash].js' : '[name].[hash].js',
    chunkFilename: isPro ? 'js/[name].[chunkhash].js' : '[name].[chunkhash].js'
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
        // exclude: /node_modules/,
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
          name: isPro ? 'imgs/[name].[hash:7].[ext]' : '[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: isPro ? 'fonts/[name].[hash:7].[ext]' : '[name].[hash:7].[ext]'
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
    // host: "192.168.10.123",
    port: "3001"
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
