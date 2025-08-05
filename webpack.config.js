

const path = require('path');


module.exports = {
	mode: 'development',
	entry: './src/js/main.js',
	output: {
		filename: 'bundel.js',
		path: path.resolve(__dirname, 'build/js')
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'] 
					}
				}
			}
		]
	}
}