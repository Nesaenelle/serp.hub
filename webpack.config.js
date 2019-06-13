const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var StylusNibPlugin = require('nib')
var CopyWebpackPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // publicPath: '/'
    },
    module: {
        rules: [
            // Include pug-loader to process the pug files
            {
                test: /\.pug$/,
                use: {
                    loader: 'pug-loader',
                    options: {
                        pretty: true
                    }
                }
            },
            {
              test: /\.scss$/,
              use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'sass-loader']
              })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        publicPath: 'src/img',
                    }
                }
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/template/pages/index.pug',
            page: 'home'
        }),
        new HtmlWebpackPlugin({
            filename: 'offers.html',
            template: 'src/template/pages/offers.pug',
            page: 'offers'
        }),
        new HtmlWebpackPlugin({
            filename: 'offer-cart.html',
            template: 'src/template/pages/offer-cart.pug',
            page: 'offer-cart'
        }),
        new HtmlWebpackPlugin({
            filename: 'auth.html',
            template: 'src/template/pages/auth.pug',
            page: 'auth'
        }),
        new ExtractTextPlugin({ allChunks: true, filename: "styles.css" }),
        new CopyWebpackPlugin([
            { from: 'src/img', to: 'img' }
        ]),
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery",
        //     "window.jQuery": "jquery'",
        //     "window.$": "jquery"
        // })
    ],

    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, ''),
        // publicPath: "/",
        port: 9000
    }
};