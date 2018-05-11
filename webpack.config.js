const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
let Dotenv = require('dotenv');

module.exports = (env) => {
  Dotenv = Dotenv.config({ path: Path.join(__dirname, `/.env.${Object.keys(env)[0]}`) }).parsed;

  const common = {
    mode: process.env.NODE_ENV,
    entry: './src/index.jsx',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          include: Path.resolve(__dirname, 'src'),
          exclude: /(node_modules|build|bundle)/,
          use: ['babel-loader', 'eslint-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: Path.resolve(__dirname, 'src/index.html'),
        filename: 'index.html',
        inject: 'body',
      }),
      new Webpack.DefinePlugin({
        'process.env': JSON.stringify(Dotenv),
      }),
    ],
    resolve: {
      modules: [Path.resolve('src'), Path.resolve('node_modules')],
      extensions: ['.js', '.jsx'],
    },
  };

  if (process.env.NODE_ENV === 'production') {
    return {
      ...common,
      output: {
        path: Path.resolve(__dirname, 'build'),
        filename: 'index.js',
      },
      devtool: 'eval',
      optimization: {
        minimize: true,
      },
    };
  }

  return {
    ...common,
    output: {
      path: Path.resolve(__dirname, 'dev'),
      filename: 'index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
      compress: true,
      contentBase: Path.resolve(__dirname, 'dev'),
      port: process.env.SERVER_PORT,
      stats: 'minimal',
    },
  };
};
