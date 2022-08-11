const path = require('path');
module.exports = [{
	entry: './home/js/sample.js',
	output: {
		path: path.resolve(__dirname, './home/build'),
		filename: 'index.js'
	},
	module: {
		rules: [{ test: /\.js$/, use: 'babel-loader' }]
	},
	optimization: { minimizer: [] }
}]