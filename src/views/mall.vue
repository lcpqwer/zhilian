<template>
    <div class="body">
        <Top/>
        <Title/>
        <div class="m-main">
            <div class="top"></div>
            <div v-for="(item, index) in shopList" :key="index" class="shop-warpper">
                <div class="shop-model">
                    <span :class="{'num-color': item.num>0}">{{item.model}}</span>
                </div>
                <div class="shop-price">
                  <span :class="{'num-color': item.num>0}">{{item.price}}</span>
                </div>
                <div class="shop-num">
                    <div class="sn-left" @click="reduceNum(index)">-</div>
                    <input @input="intNum(index)" type="text" placeholder="输入数量" v-model="item.num" :class="['sn-center',{'num-color': item.num>0}]">
                    <div class="sn-right" @click="addNum(index)">+</div>
                </div>
            </div>
            <div class="pag-warpper">
                <div :class="['pag-up', {'no-pag': pag==1}]" @click="pagUp">上一页</div>
                <div class="pag-num">{{pag}}</div>
                <div :class="['pag-down', {'no-pag': pag==pagTotal}]" @click="pagDown">下一页</div>
                <div class="pag-total">共{{pagTotal}}页</div>
            </div>
        </div>
        <div @click="shopCar" class="purchase">
            立即购买
        </div>
        <Bottom/>
    </div>
</template>
<script>
import Top from '../components/mall/top'
import Title from '../components/mall/title'
import Bottom from '../components/tohome2'
export default {
  data () {
    return {
      shopList: [
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3}
      ],
      pag: 1,
      pagTotal: 30
    }
  },
  components: {
    Top,
    Title,
    Bottom
  },
  created () {
    document.title = '自营商城'
  },
  methods: {
    addNum (index) {
      this.shopList[index].num = parseInt(this.shopList[index].num) + 1
    },
    reduceNum (index) {
      this.shopList[index].num = parseInt(this.shopList[index].num) - 1
    },
    pagUp () {
      if (this.pag != 1) {
        this.pag -= 1
      }
    },
    pagDown () {
      if (this.pag != this.pagTotal) {
        this.pag += 1
      }
    },
    intNum (index) {
      // console.log(this.shopList[index].num)
      let num = this.shopList[index].num
      if (num != '') {
        let numLs = num.match(/\d+/g)
        this.shopList[index].num = ~~numLs.join('')
      }

      // console.log(this.shopList[index].num)
    },
    shopCar () {
      this.$router.push({
        path: '/ShopCar'
      })
    }
  }
}
</script>
<style scoped>
    .m-main {
        /* width: 670px; */
        /* padding: 0 40px; */
        height: 100%;
        overflow: auto
    }
    .top {
        height: 190px;
    }
    .shop-warpper {
        width: 670px;
        height: 75px;
        margin-top: 20px;
        line-height: 75px;
        margin-left: 40px;
        display: flex;
        flex-direction: row;
        border-bottom: 2px solid #c5c5c5
    }
    .shop-model, .shop-price, .shop-num {
        height: 100%;
        font-size: 25px;
        position: relative;
    }
    .shop-model {
        width: 180px;
    }
    .shop-price {
        width: 220px;
    }
    .shop-num {
        width: 280px;
    }
    .shop-model, .shop-price {
        /* line-height: 95px; */
        text-align: center;
    }
    .sn-left, .sn-center, .sn-right {
        position: absolute;
        border: 2px solid #000000;
    }
    .sn-left, .sn-right {
        top: 50%;
        width: 40px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        transform: translateY(-50%);
        font-size: 40px;
    }
    .sn-left {
        left: 20px;
    }
    .sn-center {
        width: 120px;
        height: 40px;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        text-align: center;
        line-height: 40px;
    }
    .sn-right {
        right: 20px;
    }
    .num-color {
        color: #f5a92d
    }
    .pag-warpper {
        width: 100%;
        height: 85px;
        margin-top: 20px;
        position: relative;
        margin-bottom: 100px;
    }
    .pag-total, .pag-down, .pag-up, .pag-num {
        font-size: 30px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    .pag-total {
        right: 0
    }
    .pag-down, .pag-up {
        height: 45px;
        line-height: 45px;
        border-bottom: 2px solid #000000
    }
    .pag-down {
        right: 110px;
    }
    .pag-up {
        right: 338px;
    }
    .pag-num {
        right: 203px;
        height: 45px;
        line-height: 45px;
        width: 125px;
        text-align: center;
        border: 1px solid #000000
    }
    .no-pag {
        color: #9e9e9e;
        border-bottom: 2px solid #9e9e9e
    }
    .purchase {
        width: 100%;
        height: 88px;
        line-height: 88px;
        text-align: center;
        font-size: 40px;
        color: white;
        position: fixed;
        bottom: 0;
        z-index: 100;
        background-color: #f6b243;
    }
</style>
