const path = require('path');
const webpack = require('webpack');
const BundleTracker  = require('webpack-bundle-tracker');


var apiHost;

var setupAPI = function () {
  switch(process.env.NODE_ENV) {
    case 'production':
      console.log('Using PRODUCTION settings');
      apiHost = '"http://emilyjewell.com"';
      break;
    case 'local':
    default:
      apiHost = '"http://localhost:5000"';
      console.log('Using LOCAL settings');
      break;
  }
};

setupAPI();

module.exports = {

  context: path.resolve(__dirname, './src'),

  entry: {
    app: 'app.js',
  },

  output: {
    path: path.resolve(__dirname, './emilyjewell/static/dist/'),
    filename: 'app.js',
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
      new BundleTracker({path: __dirname, filename: './emilyjewell/webpack-stats.json'}),
      new webpack.DefinePlugin({
        __API__: apiHost
      })
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