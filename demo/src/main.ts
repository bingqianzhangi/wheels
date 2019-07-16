import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
// 消除浏览器样式差异
import '@/scss/reset.scss';

// 去掉上线切到正式环境提示
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')