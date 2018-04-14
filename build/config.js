'use strict';
const pkg = require('../package');

module.exports = {
    title: 't5',
    // Options for webpack-dev-server
    // See https://webpack.js.org/configuration/dev-server
    devServer: {
        host: 'localhost',
        port: 4000,
        proxy: {
            '/weatherApi': {
                changeOrigin: true,
                secure: false,
                target: 'https://www.apiopen.top/'
            }
        }
    },
    // when you use electron please set to relative path like ./
    // otherwise only set to absolute path when you're using history mode
    publicPath: './',
};
