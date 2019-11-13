//引入vue与vuex
import Vue from 'vue'
import Vuex from 'vuex'
//使用vuex
Vue.use(Vuex)

//创建一个store
let store = new Vuex.Store({
  state: {
    //存放数据
    carPanelData: [],
    //判断库存
    maxOff: false,
    //  控制购物车隐藏显示
    carShow: false,
    ball: {
      show: false,// 显示与隐藏
      el: null,//点击位置
      img: ''
    }
  },
  getters: {
    //计算
    //  数量
    totleCount (state) {
      let count = 0
      state.carPanelData.forEach(goods => {
        count += goods.count
      })
      return count
    },
    //价格
    totlePrice (state) {
      let price = 0
      state.carPanelData.forEach(goods => {
        price += goods.count * goods.price
      })
      return price
    },

  },
  mutations: {
    addCarpanelData (state, data) {
      //用来判断购物车中是否存在该商品
      let bOff = true

      state.carPanelData.forEach(goods => {
        if (goods.sku_id === data.sku_id) {
          bOff = false
          if (goods.count >= goods.limit_num) {
            state.maxOff = true
          }else {
            goods.count++
            state.carShow = true
            state.ball.show = true;
            state.ball.img = data.ali_image;
            state.ball.el = event.path[0]
          }

        }
      })

      //购物车没有该商品，需要新增
      if (bOff) {
        let goodsData = data
        Vue.set(goodsData, 'count', 1)
        state.carPanelData.push(goodsData)
        state.carShow = true
        state.ball.show = true;
        state.ball.img = data.ali_image;
        state.ball.el = event.path[0]
      }

      console.log(state.carPanelData)
    },
    //删除购物车数据
    delCaePanelData (state, id) {
      state.carPanelData.forEach((goods, index) => {
        if (goods.sku_id == id) {
          state.carPanelData.splice(index, 1)
          return
        }
      })
    },
    carShow (state) {
      return state.carShow
    }
  }
})

export default store


