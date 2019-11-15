import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
import Setuserinfo from '../views/set-userinfo'
export default new Router({
  routes: [
    {path: '/', component: Login},
    {path: '/home', component: Home},
    {path: '/register', component: Register},
    {path: '/set-userinfo', component: Setuserinfo}
  ]
})
