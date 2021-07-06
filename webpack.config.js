let webpack = require('webpack');
let path = require('path');

module.exports = {
    entry: './es6-module-bundling-with-webpack/main.js',
    output: {
        path: path.resolve(__dirname, 'es6-module-bundling-with-webpack'),
        filename: 'bundle.js',
        publicPath: ''
    },
    mode: 'development',
    devtool: false,
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
}