import Vue from 'vue'
import App from './App'
import router from './router'
/*Raven.config('https://f98a92322464438a8ad643cc27f80965@sentry.io/1236768')
    .addPlugin(RavenVue, Vue)
    .install();*/
Vue.config.productionTip = false
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
  render: h => h(App, Vue.config.errorHandler= err => {
    console.log('handling error calling:')
    Vue.rollbar.error(err);
  })
})



