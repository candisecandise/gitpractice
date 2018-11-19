module.exports = {
	// 键值对的形式
  entry: {
  	bundle1:'./demo2/main1.js',
  	bundle2:'./demo2/main2.js'
  },
  // 占位符
  output: {
    filename: './demo2/[name].js'
  }
};