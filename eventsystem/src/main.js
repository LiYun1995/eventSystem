// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import '../mt-theme/dist/iview.css'
import echarts from 'echarts'
import BaiduMap from 'vue-baidu-map'


Vue.config.productionTip = false
Vue.use(iView)
Vue.prototype.$echarts = echarts
Vue.use(BaiduMap,{
  ak:'LW8kCWZboNKNbfMMgI6u5CGi0ZtG2FLK'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render:h => h(App)
})
