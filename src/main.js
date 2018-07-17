import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Table } from 'iview';
import 'iview/dist/styles/iview.css';

Vue.component('Button', Button);
Vue.component('Table', Table);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
