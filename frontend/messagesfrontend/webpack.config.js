//require our dependecies
var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const source = path.resolve(__dirname, 'src');
const appDirectory = path.resolve(source, 'app');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
      //the base directory (absolute path) for resolving the entry option
      context: __dirname,
      //the entry point we created earlier. Note that './' means
      //your current directory. You don't have to specify the extension  now,
      //because you will specify extensions later in the `resolve` section
      // entry: './assets/js/index/',
      // entry: './src/app/',
      entry: ['./src/index','./src/styles.css'],

      output: {
        //where you want your compiled bundle to be stored
        path: path.resolve('./dist/'),
        publicPath : path.resolve('/assets/'),
        //naming convention webpack should use for your files
        filename: '[name]-[hash].js'
      },

      plugins: [
          //tells webpack where to store data about your bundles.
          new BundleTracker({filename: './dist/webpack-stats.json'}),
          //makes jQuery available in every module
          new webpack.ProvidePlugin({
              $: 'jquery',
              jQuery: 'jquery',
              'window.jQuery': 'jquery'
          }),
          new HtmlWebpackPlugin({
            template: './index.html'
          }),
          new ExtractTextPlugin('styles.css')
      ],

      module: {
          loaders: [
              //a regexp that tells webpack use the following loaders on all
              //.js and .jsx files
              // {test: /\.jsx?$/,
              {test: /\.ts$/,
                  //we definitely don't want babel to transpile all the files in
                  //node_modules. That would take a long time.
                  exclude: /node_modules/,
                  //use the babel loader
                  // loader: 'babel-loader'
                  loader: ['babel-loader','awesome-typescript-loader','angular2-template-loader']
                  // query: {
                      //specify that we will be dealing with React code
                      // presets: ['react']
                  // }
              },
              {
                test: /\.(css|html)$/,
                include: appDirectory,
                loader : 'raw-loader'
              },
              {
                test: /\.css$/,
                exclude: appDirectory,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader?sourceMap'
                })
              },
          ]
      },

      resolve: {
          //tells webpack where to look for modules
          // modulesDirectories: ['node_modules'],
          modules: ['node_modules'],
          //extensions that should be used to resolve modules
          //extensions: ['', '.js', '.jsx']
          extensions: ['.ts', '.js']
      }
};

