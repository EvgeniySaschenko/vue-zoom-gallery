const path = require("path");

module.exports = {
	configureWebpack: {
		module: {
			rules: [
				{
					test: /\.pug$/,
					loader: 'pug-plain-loader',
					options: {
						basedir: path.resolve(__dirname, '')
					}
				},
			]
		},
	},

	css: {
		loaderOptions: {
			sass: {
				data: `@import "src/assets/style/_variables.sass"`
			}
		}
	},
}