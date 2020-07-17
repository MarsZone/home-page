import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import './routers/intercept'
import store from './store'
//导入接口
import request from './api/require';
import { apiUrl } from './api/apiUrl';
// 多语言
import i18n from './i18n'
// 自定义命令
import './directives/index'
// 导入 AOS 
import AOS from 'aos'
import 'aos/dist/aos.css'
// iView
import './plugins/iview.js'
// VueAwesomeSwiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.config.productionTip = false

let services = {};
Object.entries(apiUrl).forEach((item) => {
  services[item[0]] = function (options = {}) {
    return request(Object.assign({
      url: item[1]
    }, options))
  }
})
// 业务中引用的方法：this.$services.接口名（小驼峰）
Object.defineProperty(Vue.prototype, '$services', {
  value: services
});

//错误捕获
// Vue.config.errorHandler = (err, vm, info) => {
//   console.error(err);
// };

new Vue({
  router,
  store,
  i18n,
  created () {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
