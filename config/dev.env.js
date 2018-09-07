'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    IS_CLOSED: 'false',
    NODE_ENV: '"development"',
    EVN_CONFIG: '"dev"',
    WEBSITE_URL: '"https://dev.fcoin.com"',

    // 测试数据
    // API_URL: '"http://broker-api-sandbox.fcoin.com"',
    // EXCHANGE_URL: '"https://exchange-sandbox.fcoin.com"',
    // WS_URL: '"wss://api-sandbox.fcoin.com/v2/ws"',

    // 线上数据
    API_URL: '"https://broker-api.fcoin.com"',
    EXCHANGE_URL: '"https://exchange.fcoin.com"',
    WS_URL: '"wss://ws.fcoin.com/api/v2/ws"',

});

