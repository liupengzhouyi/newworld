module.exports = {
    publicPath: '/', // 设置打包文件相对路径
    devServer: {
        // open: process.platform === 'darwin',
        // host: 'localhost',
        port: 9090,
        // open: true, //配置自动启动浏览器
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8080/', //对应自己的接口
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },

    // lintOnSave: false // 取消 eslint 验证
}