
const  webpack = require('webpack');

module.exports = {
  entry: [
    './components/main.js'
  ],
  output: {
    path: __dirname,
    filename: 'app.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
