const path = require('path');

module.exports = {
    stories: ['./welcome-story.js', '../src/**/__stories__/*-story.tsx'],
    addons: [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-storysource',
            options: {
                rule: {
                    test: [/-story\.tsx/, /welcome-story\.js/],
                    include: [path.resolve(__dirname, '..', 'src'), __dirname],
                },
                loaderOptions: {
                    prettierConfig: {printWidth: 80, singleQuote: false},
                },
            },
        },
        './.storybook/theme-selector-addon/register',
        './.storybook/platform-selector-addon/register',
    ],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.tsx$/,
            use: [
                {
                    loader: require.resolve('babel-loader'),
                },
            ],
        });
        config.resolve.extensions.push('.tsx');
        return config;
    },
};
