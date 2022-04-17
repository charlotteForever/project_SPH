module.exports = {
    productionSourceMap: false,
    // 关闭eslint
    lintOnSave: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://39.98.123.211',
                // 路径不需要重写了，因为上次已经所有的接口都带api了
                // pathRewrite: { '^/api': '' },
            },
        },
    },
}