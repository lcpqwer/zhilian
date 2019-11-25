<template>
    <div class="order-warpper">
        <div @click="orderDetail">
            <div class="o-top">
                <div class="o-model">型号：{{OrderItem.model}}</div>
                <div class="o-type" v-if="OrderItem.state == 0">待发货</div>
                <div class="o-type" v-if="OrderItem.state == 1">卖家已发货</div>
                <div class="o-type" v-if="OrderItem.state == 2">交易完成</div>
            </div>
            <div class="o-center">
                <div class="o-num">&yen;{{OrderItem.price}} <span>x{{OrderItem.num}}</span></div>
                <div class="o-price">&yen;{{(OrderItem.price*OrderItem.num).toFixed(2)}}</div>
            </div>
        </div>
        <div class="o-bottom">
            <div @click="checkLog">查看物流</div>
            <div @click="confirmGood">确认收货</div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    OrderItem: Object
  },
  methods: {
    orderDetail () {
      this.$router.push({path: '/OrderDetail'})
    },
    checkLog () {
      console.log(1)
    },
    confirmGood () {
      console.log(2)
    }
  }
}
</script>
<style scoped>
    .order-warpper {
        width: 670px;
        height: 257px;
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 0px 0px 10px 10px #f5f5f5;
        margin-left: 40px;
        margin-top: 20px;
    }
    .o-top, .o-center {
        width: 100%;
        height: 80px;
        position: relative;
    }
    .o-top>div,.o-center>div {
        position: absolute
    }
    .o-model {
        bottom: 0;
        left: 20px;
        font-size: 30px;
    }
    .o-type {
        top: 50%;
        transform: translateY(-50%);
        right: 20px;
        font-size: 25px;
        color: #f6b243
    }
    .o-center {
        border-bottom: 2px solid #d4d4d4
    }
    .o-center>div {
        position: absolute;
        bottom: 35px;
        font-size: 25px;
    }
    .o-center span {
        font-size: 15px;
    }
    .o-num {
        left: 20px;
        color: #747474;
    }
    .o-price {
        right: 20px;
    }
    .o-bottom {
        width: 100%;
        height: 95px;
        position: relative;
    }
    .o-bottom>div {
        width: 170px;
        height: 52px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        text-align: center;
        line-height: 52px;
        font-size: 30px;
    }
    .o-bottom>div:first-child {
        border: 1px solid #a1a1a1;
        right: 210px;
    }
    .o-bottom>div:last-child {
        border: 1px solid #f6b243;
        color: #f6b243;
        right: 20px;
    }
</style>
