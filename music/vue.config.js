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
        }
    }
}



//重写的原因是前端需要通过/api来判别需要请求代理服务器的url但是请求发起后代理服务器中的url都不带有api字样