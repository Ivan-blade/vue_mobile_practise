+ 理论不该出现的bug解决方式
    + 重启服务
    + 重写服务

+ 当访问某url时该页面有源码但是浏览器显示空白
    + 换浏览器。。。

+ TypeError:cannot read property 'xxxx' of undefined
    + 原因：无法获取该变量获取的数据
    + 排查方式：确定该数据隶属哪个父对象

+ api数据获取失败
    + 跨域设置问题
    + 接口可能需要联网
    + 服务在设置之后没有重启

+ Property or method "xxx" is not defined on the instance but referenced during render
    + xxx没有在data或者methods中定义

+ 定义样式不起效
    + 层级问题
    + 文件内重名
    + 局部没有scoped导致的重名

+ xxx is defined but never used
    + 在eslintrc.js中的rule中添加如下代码
    ```
        "no-unused-vars": 'off'
    ```