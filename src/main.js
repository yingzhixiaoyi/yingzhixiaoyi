import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/style.less'
import './assets/font/iconfont.css'
import {parseTime} from './utils'
// 引入makrdown插件
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

require('./Mock');
Vue.use(mavonEditor);

Vue.config.productionTip = false;
Vue.filter('parseTime', (v) => parseTime(v, '{y}-{m}-{d}'));
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
