import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import animated from 'animate.css'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.use(ElementUI);
Vue.use(animated)
Vue.config.productionTip = false
import 'lib-flexible'
import "./style/heyui.css"
import 'element-ui/lib/theme-chalk/index.css';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
