import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/reset.css';
import './assets/fonts/iconfont.css';
import 'lib-flexible';


Vue.config.productionTip = false;

Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
