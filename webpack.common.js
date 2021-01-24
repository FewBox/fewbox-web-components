const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    entry: path.resolve(__dirname, 'src/index.ts'),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js',
        libraryTarget: 'commonjs'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.svg']
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader', options: { configFile: 'tsconfig.webpack.json' } },
            { test: /\.tsx$/, loader: 'ts-loader', options: { configFile: 'tsconfig.webpack.json' } },
            { test: /\.svg$/, use: ['@svgr/webpack'] },
            {
                test: /\.(sa|sc)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'fewbox.min.css',
            chunkFilename: '[id].min.css',
        })
    ],
    externals: [nodeExternals()]
}
module.exports = config;