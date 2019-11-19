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
import User from '../views/User'
import MyInfo from '../views/my-info'
import ChangePhone from '../views/change-phone'
import Business from '../views/Business'
export default new Router({
  routes: [
    {path: '/', component: Register},
    {path: '/Login', component: Login},
    {path: '/Home', component: Home},
    {path: '/Register', component: Register},
    {path: '/Setuserinfo', component: Setuserinfo},
    {path: '/Hurrybuy', component: Hurrybuy},
    {path: '/MyInventory', component: MyInventory},
    {path: '/UpInventory', component: UpInventory},
    {path: '/User', component: User},
    {path: '/MyInfo', component: MyInfo},
    {path: '/ChangePhone', component: ChangePhone},
    {path: '/Business', component: Business},
  ]
})
