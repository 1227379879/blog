import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {install, Button } from 'heyui';

Vue.use(install, { components: { Button }});
import "heyui/themes/index.less";
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
