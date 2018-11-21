import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import i18n from './i18n'
// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// iView
import './plugins/iview.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 导入 AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// require styles
import 'swiper/dist/css/swiper.css'

library.add(faUserCircle)
Vue.component('font-awesome-icon', FontAwesomeIcon)
// swiper
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false;
Vue.directive('click-outside', {
  bind: function (el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      // here I check that click was outside the el and his childrens
      if (!(el == event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };
    document.addEventListener('click', el.clickOutsideEvent);
  },
  unbind: function (el) {
    document.removeEventListener('click', el.clickOutsideEvent);
  },
});

new Vue({
  router,
  store,
  i18n,
  created () {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
