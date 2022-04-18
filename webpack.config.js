const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',  // instead of adding in package.json as 'webpack --mode development'
  entry: {
    // can add more than one input file here, key is the file name
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js', // matches file name defined in entry - including content hash
    clean: true,  // remove old files in dist folder
  },
  devtool: 'source-map',  // generate source map
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 3000, 
    open: true, // open browser automatically
    hot: true,  // hot reload
    compress: true, // gzip
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test:/\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      }
    ],
  },
  plugins: [
    // generate a copy of template html file
    new HtmlWebpackPlugin({
      title: 'Webpack test',
      filename: 'index.html',
      template: 'src/template.html'
    })
  ]
}