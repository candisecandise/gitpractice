module.exports = {
	// 键值对的形式
  entry: {
  	bundle:'./demo4/main.js',
  },
  output: {
    filename: './demo4/[name].js'
  },
  module: {
    rules:[
		{ 
			test: /\.css$/, 
			// use:['style-loader','css-loader']
			loader: 'style-loader!css-loader' 
		},
    ]
  }
};