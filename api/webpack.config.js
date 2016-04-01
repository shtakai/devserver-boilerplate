'use strict';
var path = require('path');

module.exports = {
  entry: {
    app: [
      './src/index.js'
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/public/'
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      }, {
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: ['style', 'css'],
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      }, {
        test: /\.html$/,
        exclude: /node_modules/,
        loaders: ['html-loader'],
      }
    ]
  }
};
