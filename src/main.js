import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
//var Rollbar = require('vue-rollbar');
/*Vue.use(Rollbar, {
      accessToken: 'da15d7f183f44701ae91244b38f5501d',
      captureUncaught: true,
      captureUnhandledRejections: true,
      enabled: true,
      source_map_enabled: true,
      environment: 'production',
      payload: {
        client: {
             javascript: {
                code_version: '1.0'
             }
        }
      }
});*/
Vue.config.errorHandler = function (err, vm, info) {
  console.log('hererereeeees')
 //Vue.rollbar.errr(err);
}

new Vue({
  el: '#app',
  router,
  render: h=> h(App)
})



