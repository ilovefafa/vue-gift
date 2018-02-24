import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import signIn from '@/components/sign-in'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/signIn',
      name: 'signIn',
      component: signIn
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
