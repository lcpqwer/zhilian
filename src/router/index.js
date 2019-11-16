import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
import Setuserinfo from '../views/set-userinfo'
import Hurrybuy from '../views/hurry-buy'
import MyInventory from '../views/my-inventory'
import UpInventory from '../views/upload-inventory'
export default new Router({
  routes: [
    {path: '/', component: Register},
    {path: '/login', component: Login},
    {path: '/home', component: Home},
    {path: '/register', component: Register},
    {path: '/setuserinfo', component: Setuserinfo},
    {path: '/hurrybuy', component: Hurrybuy},
    {path: '/my-inventory', component: MyInventory},
    {path: '/upload-inventory', component: UpInventory}
  ]
})
