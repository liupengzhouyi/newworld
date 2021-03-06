import Vue from 'vue'
import App from './App.vue'
import router from './router'

import globalVariable from '../global_variable';
Vue.prototype.$GLOBAL = globalVariable

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import VueVirtualScroller from "vue-virtual-scroller";



import Resource from 'vue-resource';
import axios from 'axios';
Vue.prototype.$axios = axios

axios.defaults.baseURL = '/api/'  //关键代码

//自己写的样式
import './style/theme.css'
import './style/characters.css'
import store from './store'


Vue.use(ElementUI)
Vue.use(Resource)
Vue.use(VueVirtualScroller);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
