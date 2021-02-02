const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    plugins: [
        new CopyWebpackPlugin([
            { from: './assets', to: './assets' }
        ]),
        new HtmlWebpackPlugin({ template: './containers/index.tmpl.html', title: 'FewBox' })
    ]
});