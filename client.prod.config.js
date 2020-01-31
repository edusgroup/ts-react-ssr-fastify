const path = require('path')
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.ts',
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name]/index.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
    alias: {
      calen: path.resolve(__dirname, 'node_modules/ts-calendar/src/'),
    }
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin(),
  ],
}
