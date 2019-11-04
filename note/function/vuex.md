### 启用
+ 一般为了便于管理各个功能项目目录需要自己重新新建
    + 在src目录下新建store文件夹并在该文件夹中创建五个文件（index.js,mumations.js,getters.js,actions.js,state.js可能在安装vuex时系统默认会创建好store文件夹和index.js这里只需要确保文件都创建好，内容稍后修改）
    + 初始化五个文件内容(参考store文件夹中配置)
        + actions.js
            ```
                const actions = {}
                export default actions
            ```
        + getters.js
            ```
                const getters = {}
                export default getters
            ```
        + mutations.js
            ```
                const mutations = {}
                export default mutations
            ```
        + state.js
            ```
                const state = {}
                export default state
            ```
        + index.js
            ```
                import Vue from 'vue'
                import Vuex from 'vuex'
                import actions from './actions'
                import getters from './getters'
                import mutations from './mutations'
                import state from './state'

                Vue.use(Vuex)

                const store = new Vuex.Store({
                actions,
                getters,
                mutations,
                state
                })
                export default store
            ```
    + 在main.js中指定路径
        ```
            import store from './store/index'
        ```
    + 在各个文件中添加方法