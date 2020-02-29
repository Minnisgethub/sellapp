import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 引入viewui
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI)//全局注册viewui组件，使全局都能使用ui框架
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
