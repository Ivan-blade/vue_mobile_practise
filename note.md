+ 安装vue-cli 3.x(见github vue-study中的random笔记)
+ 打开vue项目图形管理界面
    ```
        vue ui

        这个。。。图形化操作不利于开发效率，知道就可以
    ```
+ 创建项目
    ```
        vue create music
        选择manunal
        上下切换，空格选中，回车确定
        是否为router选用history模式：n
        选择css预处理器：less
        选择语法标准：eslint + airbnb
        eslint触发时间：保存时触发，提交时触发并修正
        是否将上面用的模块分别单独保存成一个文件还是合并到package.json文件中
        是否保留以上配置（以后创建项目可以默认选择以上选择） 
    ```
+ 启动项目
    ```
        npm run serve(顺便一提vue-cli 3.x中同样可以执行vue-cli 2.x的运行命令)
    ```
+ 生成配置
    ```
        在vue-cli 3.x创建的项目中没有2.x中的webpack等信息，如果想要查看
        对应目录终端中输入：vue inspect > out.js (将配置信息输出到out.js中)
    ```
+ 修改配置
    ```
        项目所在目录创建vue.config.js,然后根据官网指导修改对应文件
        https://cli.vuejs.org/zh/config/
    ```

+ 跨域请求
    ```
        vue.config.js下
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
    ```
+ postcss配置
    ```
        npm install postcss-pxtorem --save-dev

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
+ axios安装
    ```
        npm install axios
    ```

+ 轮子使用案例。。。swiper
    + 找轮子（github搜swiper）
    + 确定要哪个轮子（。。看文档）
        ```
            https://github.com/surmon-china/vue-awesome-swiper
        ```
    + 看着文档装轮子
        ```
            npm install vue-awesome-swiper --save
        ```
    + 看着文档用轮子...