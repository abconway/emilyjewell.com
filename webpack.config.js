const path = require('path');
const webpack = require('webpack');
const BundleTracker  = require('webpack-bundle-tracker');


var apiHost;

var setupAPI = function () {
  switch(process.env.NODE_ENV) {
    case 'production':
      console.log('Using PRODUCTION settings');
      apiHost = '"http://emilyjewell.com"';
      staticUrlBase = '"https://emily-jewell-media-production.s3.amazonaws.com"'
      break;
    case 'uat':
      console.log('Using UAT settings');
      apiHost = '"https://frozen-tor-73574.herokuapp.com/"';
      staticUrlBase = '"https://emily-jewell-media-uat.s3.amazonaws.com"'
      break;
    case 'local':
    default:
      console.log('Using LOCAL settings');
      apiHost = '"http://localhost:5000"';
      staticUrlBase = '"http://localhost:5000"'
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
        __API__: apiHost,
        __STATIC__: staticUrlBase
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