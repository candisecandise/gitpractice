// context: path.resolve(__dirname, "app") //设置使用当前文件路径为默认路径
const path = require("path") //引入 node.js的内置模块
var HtmlWebpackPlugin = require('html-webpack-plugin'); //打包html的插件
// var MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
	entry:{
        index:'./src/js/main.js',  //入口文件
        // index2:'./src/js/main2.js'
     },
     output:{
          filename: '[name].js',
          path: path.resolve(__dirname, "./dist")
     },
     module:{
     	rules:[
            // 打包css
     		{
     			test:/\.css$/,
     			use:['style-loader','css-loader']
                // use:[MiniCssExtractPlugin.loader,'css-loader']
     		},
            // 加载图片
            {
                test:/\.(png|jpg|gif|jpeg)/,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:500
                    }
                }]
            }
     	]
     },
     plugins:[
        // 打包html
        new HtmlWebpackPlugin({
        	filename:'index.html',
        	template:'./src/index.html'
        }),
        // new MiniCssExtractPlugin({
        //     filename:'[name].css'// 输出目录
        // }
        // )
     ],
    devServer: {
	    contentBase: path.resolve(__dirname, "./dist"),//dist为你需要注册静态服务的文件夹
	    host:'localhost',
	    port: "8080",//端口
	    inline: true, //表示代码修改后页面自动刷新
	    hot: true//便是模块热替换
	}
}
