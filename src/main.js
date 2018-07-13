// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
//引入
import store from './store/store'
import bus from './store/bus'
import netWork from './assets/netWork'

//自定义组件
import myComponents from './assets/myComponents'
Vue.use(myComponents)

Vue.prototype.$bus = bus;
Vue.prototype.$netWork = netWork;


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
