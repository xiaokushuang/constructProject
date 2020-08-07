// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
//引入高德
import VueAMap  from 'vue-amap';  //注意不要和 AMap原始名称覆盖
Vue.use(VueAMap);
// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: '9e02911b43f07eedb86e68444f11be51',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor','AMap.Geolocation'],
  v: '1.4.4'

});
//引入videojs
import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video
//引入axios
import axios from 'axios';
Vue.prototype.$axios =axios;
import QS from 'qs'; //用来解决vue中post请求（详情）
Vue.prototype.qs = QS;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

