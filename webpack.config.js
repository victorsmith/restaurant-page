const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: './src/index.js',
		menu: './src/menu.js',
		contact: './src/contact.js',
		navigation: './src/navigation.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Food Inc.',
		}),
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
};
