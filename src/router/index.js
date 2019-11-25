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
import Chat from '../views/Chat'
import MyUpload from '../views/my-upload'
import SessionList from '../views/session-list'
import Mall from '../views/Mall'
import ShopCar from '../views/shop-car'
import OrderList from '../views/order-list'
import OrderDetail from '../views/order-detail'
import MyAddress from '../views/my-address'
import EditAddress from '../views/edit-address.vue'
import UpdateName from '../views/update-name'
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
    {path: '/Chat', component: Chat},
    {path: '/MyUpload', component: MyUpload},
    {path: '/SessionList', name: 'SessionList', component: SessionList},
    {path: '/Mall', component: Mall},
    {path: '/ShopCar', component: ShopCar},
    {path: '/OrderList', component: OrderList},
    {path: '/OrderDetail', component: OrderDetail},
    {path: '/MyAddress', component: MyAddress},
    {path: '/EditAddress', component: EditAddress},
    {path: '/UpdateName', component: UpdateName},
  ]
})
