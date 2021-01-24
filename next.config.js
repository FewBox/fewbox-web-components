const path = require('path');

module.exports = {
    compress: false,
    devIndicators: {
        autoPrerender: false,
    },
    poweredByHeader: false,
    exportPathMap: async function (defaultPathMap) {
        return {
            '/': { page: '/' },
            '/about': { page: '/about' },
            '/pricing': { page: '/pricing' }
        }
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'style')],
    },
    webpack: (config, { isServer }) => {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)x?$/,
            },
            use: ['@svgr/webpack'],
        });
        /*config.module.rules.push({
            test: /\.(sa|sc)ss$/,
            include: [path.resolve(__dirname, 'src')],
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader',
                {
                    loader: 'sass-loader',
                    options: {
                        prependData: (loaderContext) => {
                            return `@import 'src/theme/custom.scss';`;
                        },
                        sourceMap: true,
                    },
                },
            ],
        });*/
        return config;
    }
}