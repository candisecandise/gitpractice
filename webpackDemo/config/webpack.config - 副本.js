// context: path.resolve(__dirname, "app") //设置使用当前文件路径为默认路径
var path = require("path"); //引入 node.js的内置模块
//打包html的插件
var HtmlWebpackPlugin = require('html-webpack-plugin'); 
//清空指定文件夹
var CleanWebpackPlugin = require('clean-webpack-plugin'); 
// 引入css 单独打包插件
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 压缩图片
var ImageminPlugin = require('imagemin-webpack-plugin').default  
 // 压缩css
var optimizeCss = require('optimize-css-assets-webpack-plugin');
var webpack = require("webpack"); //重要！！
// var MiniCssExtractPlugin = require('mini-css-extract-plugin');


var webpack = require('webpack');
var glob = require('glob');
var debug = true;
function getEntry() {
    var entry = {};
    glob.sync(__dirname + "/app/js/*.main.js").forEach(function (file) {
        var name = file.match(/([^/]+?)\.main\.js/)[1];
        entry[name] = __dirname + "/app/js/" + name + ".main.js";
    });
    return entry;
}
//used while add min ext
function getExt() {
    return debug ? ".min.js" : "js";
}
// module.exports = {
//     // context: __dirname + "/app/",
//     entry: getEntry(),
//     devtool: 'source-map',
//     externals: {
//         jquery: 'window.$'
//     },
//     output: {
//         path: __dirname + '/build/js',
//         filename: '[name].js',// + getExt(),
//         sourceMapFilename: '[file].map'
//     },
//     module: {
//         noParse: [],
//         loaders: [{
//             test: /\.jsx?$/,
//             loader: 'babel',
//         },
//             {
//                 test:/\.less$/,
//                 loader:'style!css!less',
//                 options: {
//                     modules: true,
//                     localIdentName: '[path][name]__[local]--[hash:base64:5]'
//                 }

//             }
//         ]
//     },
//     debug: debug
// };

module.exports = {
    context:path.resolve(__dirname, ".."),
    entry:{
        main:'./src/js/main.js',  //入口文件
     },
     output:{
          filename: '[name].js',
          path: path.resolve(__dirname, "../dist"),
          publicPath: '../dist/',
     },
     module:{
     rules:[
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        },
        {
     			test:/\.css$/,
     			use:['style-loader','css-loader']
            // use: [
            //     {
            //       loader: MiniCssExtractPlugin.loader,
            
            //     },
            //     "css-loader"
            // ]
     		},
        // 加载图片
        {
            test:/\.(png|jpg|gif|jpeg)/,
            // loader: 'url-loader',
            // options: {
            //   limit: 10000,
            //   publicPath: '../dist/', //你实际项目的引用地址前缀
            //   name: utils.assetsPath('img/[name].[hash:7].[ext]')
            // }
            // 可以添加雪碧图插件
            loader: 'url-loader?limit=8192&name=img/[hash:7].[name].[ext]'
        }
     	]
     },
    
     plugins:[
        // new HtmlWebpackPlugin({
        //     filename:'page.html',
        //     template:'./src/page/page.html',
        //     chunks:['page'],
        //    //  minify:{ //压缩HTML文件
        //    //   removeComments:true,  //移除HTML中的注释
        //    //   collapseWhitespace:true  //删除空白符与换行符
        //    // }
        // }),
        // new HtmlWebpackPlugin({
        //     filename:'page2.html',
        //     template:'./src/page2/page2.html',
        //     chunks:['page2']
        // }),
        // 引用到全局
        // new webpack.ProvidePlugin({
        //     echarts:"echarts",
        //     $: "jquery",
        //     jQuery: "jquery",
        //     "windows.jQuery": "jquery"
        // }),
        // new CleanWebpackPlugin(['dist']),
        // // 分离css,自动将js中的css文件提取出来，生成单独的文件
        // new MiniCssExtractPlugin({
        //   filename: "[name].css",
        //   chunkFilename: "[id].css",

        // }),
        // // 压缩css
        // // new optimizeCss(),
        // // 压缩图片
        // new ImageminPlugin({
        //   disable: process.env.NODE_ENV !== 'production', 
        //   pngquant: {
        //     quality: '95-100'
        //   }
        // }),
     ],
     // 提取公共代码
      // optimization: {
      //     splitChunks: {
      //       cacheGroups: {
      //         // 注意: priority属性
      //         // 其次: 打包业务中公共代码
      //         utils: {
      //           name: "utils",
      //           chunks: "all",
      //           minSize: 1,
      //           priority: 0
      //         },
      //         // 首先: 打包node_modules中的文件
      //         // vendor: {
      //         //   name: "vendor",
      //         //   test: /[\\/]node_modules[\\/]/,
      //         //   chunks: "all",
      //         //   priority: 10
      //         // }
      //       }
      //     }
      //   },
    devServer: {
	    contentBase: path.resolve(__dirname, "../dist"),//dist为你需要注册静态服务的文件夹
	    host:'localhost',
	    port: "8080",//端口
	    inline: true, //表示代码修改后页面自动刷新
	    hot: true//便是模块热替换
	   },
    watchOptions:{
        poll:1000,//监测修改的时间(ms)
        aggregateTimeout:500, //防止重复按键，500毫米内算按键一次
        ignored:/node_modules/,//不监测
    }
}
