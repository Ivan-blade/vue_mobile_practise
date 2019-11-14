module.exports = {
    devServer: {
        proxy: {
            'api': {
                target: 'http://localhost:3000',
                changeOrigin:false,
                pathRewrite: {
                    '/api': '/'
                }
            }
        },
        host: '0.0.0.0'
    }
}