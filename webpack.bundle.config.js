const path = require('path');
const webpack = require('webpack');
const BundleTracker  = require('webpack-bundle-tracker');


var apiHost;

var setupAPI = function () {
  switch(process.env.DJANGO_SETTINGS_MODULE) {
    case 'emilyjewell.settings.PRODUCTION':
      console.log('Using PRODUCTION settings');
      apiHost = 'http://emilyjewell.com';
      break;
    case 'emilyjewell.settings.DEVELOPMENT':
      apiHost = 'http://10.128.0.5';
      console.log('Using DEVELOPMENT settings');
      break;
    case 'emilyjewell.settings.TESTING':
    default:
      apiHost = 'http://localhost:8000';
      console.log('Using TESTING settings');
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
      new BundleTracker({path: __dirname, filename: './webpack-stats.json'}),
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