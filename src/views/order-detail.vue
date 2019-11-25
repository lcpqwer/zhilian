<template>
    <div class="body info-warpper">
        <div class="top">
            <div>
                <div class="state1">
                    <div>卖家已发货</div>
                </div>
                <div class="state2">
                    等待收货
                </div>  
            </div>
            <div class="order-log">
                <div class="dynamic"><div>包裹正在揽收</div></div>
                <div class="number">
                    <div>快递单号：88888899999999988888</div>
                    <div>
                        <img src="../assets/img/order-detail/copy.png" alt="">
                    </div>
                </div>
            </div>
            <div class="order-address">
                <div class="img-warpper">
                    <img src="../assets/img/order-detail/location.png" mode="widthFix" alt="">
                </div>
                <div class="user-info">
                    <div class="user-name">顾芊 <span>13450954230</span></div>
                    <div class="user-address">上海市浦东新区祖冲之路展讯中心</div>
                </div>
            </div>
        </div>
        <div class="shop-detail">
            <div class="three">
                <div class="model">型号：98743-012</div> 
                <div class="price">&yen;9.3</div>
                <div class="num">x1000</div>
            </div>
            <div class="total-price">
                &yen;9300
            </div>
        </div>
        <div class="order-detail">
            <div>订单信息</div>
            <div>订单编号: 2692849354974508</div>
            <div>订购时间: 2019-11-10</div>
            <div>发货时间: 2019-11-11</div>
        </div>
        <Bottom/>
    </div>
</template>
<script>
import Bottom from '../components/tohome1'
export default {
    created(){
        document.title = '订单详情'
    },
    components: {
        Bottom
    }
}
</script>
<style scoped>
    .top {
        width: 100%;
        height: 532px;
        background-color: #fff;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
        box-shadow: 0px 0px 10px 10px #f5f5f5;

    }
    .info-warpper {
        overflow: auto
    }
    .state1, .state2 {
        width: 100%;
        position: relative;
        color: white;
        background-color: #f7b243;
    }
    .state1>div {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        font-size: 42px;
    }
    .state1 {
        height: 95px;
    }
    .state2 {
        height: 105px;
        font-size: 30px;
        line-height: 105px;
        text-align: center;
    }
    .order-log {
        width: 670px;
        padding: 0 40px;
    }
    .dynamic {
        width: 100%;
        height: 65px;
        position: relative;
    }
    .dynamic>div {
        position: absolute;
        bottom: 0;
        font-size: 32px;
    }
    .number {
        width: 100%;
        height: 80px;
        line-height: 80px;
        display: flex;
        flex-direction: row;
        font-size: 28px;
        border-bottom: 1px solid #dddddd
    }
    .number>div{
        height: 100%;
        position: relative;
    }
    .number>div>img {
        width: 28px;
        height: 28px;
        position: absolute;
        top: 50%;transform: translateY(-50%);
        margin-left: 20px;
    }
    .order-address {
        width: 670px;
        padding: 0 40px;
        display: flex;
        flex-direction: row;
        height: 182px;
    }
    .img-warpper {
        width: 80px;
        height: 100%;
        position: relative;
    }
    .img-warpper>img {
        width: 55px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
    }
    .user-info {
        width: 590px;
        height: 100%;
        position: relative;
    }
    .user-name {
        position: absolute;
        bottom: 110px;
        font-size: 30px;
    }
    .user-name>span {
        font-size: 22px;
    }
    .user-address {
        position: absolute;
        bottom: 50px;
    }
    .shop-detail {
        width: 670px;
        padding: 0 40px;
        margin-top: 40px;
        box-shadow: 0 0 10px 10px #f5f5f5;
        background-color: #fff;
    }
    .three {
        width: 100%;
        height: 125px;
        border-radius: 20px;
        position: relative;
        font-size: 35px;   
    }
    .three>.model {
        line-height: 125px
    }
    .price, .num {
        position: absolute;
        right: 0;
    }
    .price {
        bottom: 66px;
        font-size: 25px;
    }
    .num {
        font-size: 17px;
        bottom: 34px;
    }
    .total-price {
        height: 90px;
        line-height: 90px;
        width: 100%;
        text-align: right;
        font-size: 35px;
    }
    .order-detail {
        width: 670px;
        padding: 30px 40px;
        height: 215px;
        margin-top: 40px;
        box-shadow: 0 0 10px 10px #f5f5f5;
        border-radius: 20px;
    }
    .order-detail>div {
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-size: 25px;
    }
    .order-detail>div:first-child {
        height: 65px;
        line-height: 65px;
        font-size: 30px;
    }
</style>