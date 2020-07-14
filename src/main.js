import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 多语言
import i18n from './i18n'
// 自定义命令
import './directives/index'
// 导入 AOS 
import AOS from 'aos'
import 'aos/dist/aos.css'
// iView
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

// VueAwesomeSwiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(ViewUI);
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  created () {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
