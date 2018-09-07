var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    'main': __dirname + '/src/main.js',
  },
  output: {
    path: __dirname + '/build',
    publicPath: __dirname + '/build/',
    filename: '[name].build.js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      vue: 'vue/dist/vue.js',
      bootstrap: 'bootstrap/scss/bootstrap.scss'
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
            loaders: {
                'scss': 'vue-style-loader!css-loader!sass-loader',
                'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
            }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.scss?$/,
        use: [
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.svg?$/,
        loader: 'vue-svg-loader',
      }
    ]
  }
}
