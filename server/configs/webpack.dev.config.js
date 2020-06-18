const { resolve } = require('path'),
      HTMLPlugin = require('html-webpack-plugin'),
      MiniCSS = require('mini-css-extract-plugin'),
      webpack = require('webpack'),
      { CleanWebpackPlugin } = require('clean-webpack-plugin');

const config = {
  entry: [
    'react-hot-loader/patch', 
    'webpack-hot-middleware/client?reload=true&timeout=500', 
    './client'
  ], 
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '..', '..', 'dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }, 
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [
        'react-hot-loader/webpack', 
        {
          loader: 'babel-loader', 
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          } 
        }
      ]
    }, {
      test: /\.(scss|css)$/,
      use: [
        { loader: MiniCSS.loader, options: { hmr: true }},
        'css-loader', 
        'sass-loader'
      ]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLPlugin({ template: './client/index.html'}),
    new MiniCSS(),
    new webpack.HotModuleReplacementPlugin()
  ]
};

module.exports = config;