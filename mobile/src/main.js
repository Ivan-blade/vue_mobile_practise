import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyLoad from 'vue-lazyload'
import 'swiper/dist/css/swiper.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import './assets/css/common.css'
import './assets/fonts/iconfont.css'
import 'lib-flexible'
Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)

Vue.use(VueLazyLoad, {
  loading: '/load.gif'
  // 这里引用的图片需要使用绝对路径,而public文件夹下就是编译之后的根文件，所以将图片放在public下可以直接引用
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
