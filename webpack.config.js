const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  // This is the mode we want to run our webpack config in.
  // Development mode for less strict compilation
  // Production mode for more strict compilation
  mode: 'development',
  // This is the selected entry point into our application
  entry: { bundle: path.resolve(__dirname, 'src/index.js') },
  output: {
    // This is simply the path we want our bundled webpack plugin to be relative to
    path: path.resolve(__dirname, 'dist'),
    // This generates the file name using the set entry name and the content hash.
    // In the case of bundle file inn the entry object, a bundle file and a hash will be generated
    // If we add another entry file name, that filename and the content hash will be generated
    filename: '[name][contenthash].js',
    // This helps keep one generated file instead of multiple generated files
    // In the case of bundle, we'll only ever have one bundle file with the hash name
    clean: true,
    assetModuleFilename: '[name][ext]',
  },
  // More for debugging so we know what line our errors may be coming from
  devtool: 'source-map',
  // This is our webpack dev server configuration object
  devServer: {
    // Where we want our webpack development server to point to
    static: { directory: path.resolve(__dirname, 'dist') },
    // What port we want to listen on
    port: 3000,
    // If we shoould automatically open out application on the browser
    open: true,
    // Hotreload option for automatically reloading the server
    hot: true,
    // Compression to gzip
    compress: true,
    // Hav a fallback for our history
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    // This plugin creates an index.html file and injects our compiled js files in its script tags
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: 'src/template.html',
    }),
    // This plugin gives us a visual representation of the sizes and details of our installed packages
    new BundleAnalyzerPlugin(),
  ],
};
