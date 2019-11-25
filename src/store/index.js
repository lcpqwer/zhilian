//引入vue与vuex
import Vue from 'vue'
import Vuex from 'vuex'
//使用vuex
Vue.use(Vuex)

//创建一个store
let store = new Vuex.Store({
  state: {
    //存放数据
    SessionList: {
      seList: [],
      order: Object,
    }
  }
})

export default store


