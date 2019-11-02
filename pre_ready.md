+ 将资源文件夹赋值到asset目录下
+ main.js中引入资源
    ```
        import './assets/css/reset.css'
        import './assets/fonts/iconfont.css'
    ```
+ api搭建
    ```
        抱大腿
        https://github.com/Binaryify/NeteaseCloudMusicApi

        $ git clone git@github.com:Binaryify/NeteaseCloudMusicApi.git
        $ npm install
        $ node app.js 或者 $ set PORT=4000 && node app.js
    ```
+ flexible
    + flexible作用
        ```
            适配不同设备视图大小
            根据不同的设备自动选择viewport的值，使用时需要将public index.html中viewport相关的meta字段注释
        ```
    + flexible安装使用
        ```
            npm install lib-flexable --save

            main.js下
            import 'lib-flexible';
        ```

+ postcss
    + 作用
        ```
            将单位转换为rem
        ```
    + 安装
        ```
            npm install postcss-pxtorem --save-dev
        ```
    + 配置
        ```
            在postcss.config.js中
            module.exports = {
                plugins: {
                    autoprefixer: {},
                    'postcss-pxtorem': {
                    rootValue: 75,
                    propList:['*']
                    //propList所有值都会被转换成rem
                    }
                },
            };
        ```

    + 语法报错
        ```
            package.json文件
            "lint": "eslint --fix --ext .js,.vue src"
        ```