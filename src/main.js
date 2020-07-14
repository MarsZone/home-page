import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//多语言
import i18n from './i18n'
//自定义命令
import './directives/index'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);


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
