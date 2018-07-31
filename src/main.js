import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
/*const bugsnagClient = bugsnag('4bbab171981be0c734928b2628b49741')
// Initialize Vue before we start the BugsnagVue plugin

const bugsnagVue = require('bugsnag-vue')
bugsnagClient.use(bugsnagVue(Vue))*/
var Rollbar = require('vue-rollbar');
Vue.use(Rollbar, {
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
});

new Vue({
  el: '#app',
  router,
  render: h=> h(App)
})



