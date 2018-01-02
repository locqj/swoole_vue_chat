// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './vuex/store'
import action from './vuex/actions'
import getter from './vuex/getters'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  action,
  getter,
  template: '<App/>',
  components: { App }
})
