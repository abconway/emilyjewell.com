const path = require('path');
const webpack = require('webpack');
const BundleTracker  = require('webpack-bundle-tracker');


module.exports = {

  context: path.resolve(__dirname, './src'),

  entry: {
    app: 'app.js',
  },

  output: {
    path: path.resolve(__dirname, './static/dist/'),
    filename: '[name]-[hash].js',
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
            options: { presets: ['es2015', 'stage-2'] },
          }
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          postcss: [
            require('autoprefixer')({
              browsers: ['last 3 versions']
            })
          ]
        }
      }
    ],
  },

  plugins: [
      new BundleTracker({path: __dirname, filename: './webpack-stats.json'})
  ],

  resolve: {
      modules: [
          'node_modules',
          path.join(__dirname, 'src'),
          path.resolve(__dirname, './node_modules')
      ],
      extensions: ['.js', '.jsx'],
    }

};