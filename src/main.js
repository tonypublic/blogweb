// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

//progressbar
import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
  color: '#2fb3db',
  failedColor: 'red',
  height: '2px',
  transition: {
    speed: '2s',
    opacity: '0.3s',
    termination: 3000
  }
})

//bootstrapvue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

import './style/mystyle.scss'

//vuequilleditor
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor)

//iview
// import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
