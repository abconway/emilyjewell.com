const path = require('path');
const webpack = require('webpack');
const BundleTracker  = require('webpack-bundle-tracker');


module.exports = {

  context: path.resolve(__dirname, './assets'),

  entry: {
    app: './js/index.js',
  },

  output: {
    path: path.resolve(__dirname, './assets/dist/'),
    filename: '[name]-[hash].js',
    publicPath: 'http://localhost:3000/assets/bundles/',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [path.resolve(__dirname, './node_modules')],
        use: [
          'babel-loader',
          {
            loader: 'babel-loader',
            options: { presets: ['es2015', 'react'] },
          }
        ],
      },
    ],
  },

  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new BundleTracker({path: __dirname, filename: './assets/webpack-stats.json'})
  ],

  resolve: {
      modules: [
          'node_modules',
          path.resolve(__dirname, './node_modules')
      ],
      extensions: ['.js', '.jsx']
    }

};
