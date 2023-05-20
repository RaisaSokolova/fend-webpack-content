const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlagin = require('html-webpack-plugin')

module.exports = {
    entry: './src/client/index.js',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlagin({
            template: './scr/client/views/index.html',
            filename: './index.html',
        })
    ]
}

