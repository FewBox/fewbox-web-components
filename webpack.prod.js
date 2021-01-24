const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'src/**/*.scss',
                    to({ context, absoluteFilename }) {
                        return `${path.relative(context, absoluteFilename).split("src\\").join("").split("src/").join("")}`;
                    }
                }
            ]
        })
    ]
});