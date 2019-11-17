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
    + xxx父对象不存在
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
+ Duplicate keys detected: '0'. This may cause an update error.
    + v-for嵌套循环时的key变量名一样，修改名称使变量不同就可以，见search.vue第14行

+ xxx is not a function
    + 变量被当成函数传入了参数例如
        ```
            let i
            i(123)
        ```