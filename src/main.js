import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// css初始化
import './assets/css/reset.css'
// iconfont
import './assets/css/iconfont.css'

Vue.config.productionTip = false
// 挂载网络请求非方法
import api from './api'
Vue.prototype.$api = api

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
