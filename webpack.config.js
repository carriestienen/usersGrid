const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = (env, argv) => {
  const plugins =  [
    new webpack.HotModuleReplacementPlugin()
  ]

  const rules = [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }
  ]

  if(argv.mode === 'production'){
    rules.push({
      test: /\.s?css$/,
      use: ExtractTextPlugin.extract(
        {
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
    })
    plugins.push(new ExtractTextPlugin({filename: 'style.css'}))
  } else {
    rules.push({
      test: /\.s?css$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    })
  }

  const config = {
    entry: [
      'react-hot-loader/patch',
      './src/index.js'
    ],
    module: {
      rules
    },
    resolve: {
      extensions: ['*', '.js', '.jsx']
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins,
    devServer: {
      contentBase: './dist',
      hot: true
    }
  };
  return config;
}
