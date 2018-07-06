import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: 'https://s3.us-east-2.amazonaws.com/rollbar-example',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
