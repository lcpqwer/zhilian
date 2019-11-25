<template>
    <div class="body">
        <Title/>
        <div class="m-main">
            <div class="top"></div>
            <div v-for="(item, index) in shopList" :key="index" class="shop-warpper" v-if="item.num>0">
                <div class="shop-model">
                    <span>{{item.model}}</span>
                </div>
                <div class="shop-price">
                  <span>{{item.price}}</span>
                </div>
                <div class="shop-num">
                    <div class="sn-left" @click="reduceNum(index)">-</div>
                    <input @input="intNum(index)" type="text" placeholder="输入数量" v-model="item.num" class="sn-center">
                    <div class="sn-right" @click="addNum(index)">+</div>
                </div>
            </div>
            <div class="bottom-warpper">
                <div>
                    <div class="price-total">合计：<span>&yen;666</span></div>
                    <div class="b-btn">立即结算</div>
                </div>
            </div>
        </div>
        <Bottom/>
    </div>
</template>
<script>
import Title from '../components/shop-car/title'
import Bottom from '../components/tohome2'
export default {
  data () {
    return {
      shopList: [
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 1000, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 2000, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 1000, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3},
        {model: '90575-1010', num: 0, price: 9.3}
      ]
    }
  },
  components: {
    Title,
    Bottom
  },
  created () {
    document.title = '立即购买'
  },
  methods: {
    addNum (index) {
      this.shopList[index].num = parseInt(this.shopList[index].num) + 1
    },
    reduceNum (index) {
      this.shopList[index].num = parseInt(this.shopList[index].num) - 1
    },
    intNum (index) {
      // console.log(this.shopList[index].num)
      let num = this.shopList[index].num
      if (num != '') {
        let numLs = num.match(/\d+/g)
        this.shopList[index].num = ~~numLs.join('')
      }
      // console.log(this.shopList[index].num)
    }
  }
}
</script>
<style scoped>
    .m-main {
        width: 670px;
        padding: 0 40px;
        height: 100%;
        overflow: auto
    }
    .top {
        height: 80px;
    }
    .shop-warpper {
        width: 680px;
        height: 75px;
        margin-top: 20px;
        line-height: 75px;
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
    .bottom-warpper {
        width: 100%;
        height: 90px;
        position: fixed;
        bottom: 0;
    }
    .bottom-warpper>div {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .b-btn {
        width: 260px;
        height: 100%;
        line-height: 90px;
        background-color: #f6b243;
        text-align: center;
        font-size: 30px;
        color: white;
        position: absolute;
        right: 0;
        top: 0;
        border-top-left-radius: 20px;
    }
    .price-total {
        position: absolute;
        right: 280px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 30px;
    }
    .price-total>span {
        color: #f6b243;
    }
</style>
