require('dotenv').config();

const Webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

var config = {
  entry: './client/main.js',
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'index.js'
  },
  devServer: {
    contentBase: __dirname + '/client',
    inline: true,
    port: 8080,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
    }
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new Webpack.EnvironmentPlugin(Object.keys(process.env))
  ]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new UglifyJsPlugin());
}

module.exports = config;
