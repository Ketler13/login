var path = require('path')

module.exports = {
    devtool: 'source-map',
    entry: [
        './src/app.js'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    devServer: {
        proxy: {
            '/api/**': {
                target: 'http://smktesting.herokuapp.com',
                secure: false,
                changeOrigin: true
            }
        },
        historyApiFallback: true
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loaders: ['babel'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css$/,
                loaders: [
                    "style-loader",
                    "css-loader?importLoaders=1",
                    "postcss-loader"
                ]
            }
        ]
    }
}
