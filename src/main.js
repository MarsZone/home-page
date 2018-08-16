import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import { Button, Table } from 'iview';
import 'iview/dist/styles/iview.css';
import i18n from './i18n'

Vue.component('Button', Button);
Vue.component('Table', Table);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
