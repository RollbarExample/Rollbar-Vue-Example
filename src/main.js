import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = true
var Rollbar = require('vue-rollbar');
Vue.use(Rollbar, {
      accessToken: 'da15d7f183f44701ae91244b38f5501d',
      captureUncaught: true,
      environment: 'production',
});
Vue.config.errorHandler = function (err, vm, info) {
  console.error(err)
 //Vue.rollbar.errr(err);
}

new Vue({
  el: '#app',
  router,
  render: h=> h(App)
})



