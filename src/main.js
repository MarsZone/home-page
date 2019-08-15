import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
//多语言
import i18n from './i18n'
//字体
import './assets/fonts.js'
//自定义命令
import './directives/index'
// iView
import './plugins/iview.js'
// 导入 AOS 
import AOS from 'aos'
import 'aos/dist/aos.css'
// require styles
import 'swiper/dist/css/swiper.css'
// 导入black主题
import BlackDashboard from "./plugins/blackDashboard";
Vue.use(BlackDashboard);

// swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'

import './plugins/vant.js'
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  created () {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
