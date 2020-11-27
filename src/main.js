import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import animated from 'animate.css'
import VueParticles from 'vue-particles'
import aMap from 'vue-amap'
Vue.use(VueParticles)
Vue.use(ElementUI);
Vue.use(animated)
Vue.use(aMap)
Vue.config.productionTip = false

aMap.initAMapApiLoader({
  key: 'e44cdac0d2e93594f1b453e2dbfd6a6a',
  plugin: ['AMap.Geolocation', 'AMap.Geocoder']
})
Vue.prototype.VueAMap = aMap;

//css
import 'lib-flexible'
import "./style/heyui.css"
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/font/iconfont.css"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
