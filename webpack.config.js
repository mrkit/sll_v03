const r = require('path').resolve,
      html = require('html-webpack-plugin'),
      css = require('mini-css-extract-plugin');

const config = {
  entry: './client',
  output: {
    filename: 'bundle.js',
    path: r(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react'],
        plugins: [
          // Stage 2
          ["@babel/plugin-proposal-decorators", { "legacy": true }],
          "@babel/plugin-proposal-function-sent",
          "@babel/plugin-proposal-export-namespace-from",
          "@babel/plugin-proposal-numeric-separator",
          "@babel/plugin-proposal-throw-expressions",

          // Stage 3
          "@babel/plugin-syntax-dynamic-import",
          "@babel/plugin-syntax-import-meta",
          ["@babel/plugin-proposal-class-properties", { "loose": false }],
          "@babel/plugin-proposal-json-strings"
        ]
      }
    }, {
      test: /\.(scss|css)/,
      use: [
        css.loader,
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  plugins: [
    new html({ template: './client/index.html' }),
    new css()
  ]
};

module.exports = config;
