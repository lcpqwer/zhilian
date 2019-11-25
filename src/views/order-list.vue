<template>
    <div class="body">
        <Top/>
        <div class="order-nav">
            <div @click="changePag(0)">
                <div :class="{'select-order':pag == 0}">全部</div>
            </div>
            <div @click="changePag(1)">
                <div :class="{'select-order':pag == 1}">未发货</div>
            </div>
            <div @click="changePag(2)">
                <div :class="{'select-order':pag == 2}">已发货</div>
            </div>
            <div @click="changePag(3)">
                <div :class="{'select-order':pag == 3}">已完成</div>
            </div>
        </div>
        <div v-show="pag == 0" class="order-list">
            <div></div>
            <OrderItem v-for="(item,index) in orderList" :key="index" :OrderItem="item"/>
        </div>
        <div v-show="pag == 1" class="order-list">
            <div></div>
            <OrderItem v-for="(item,index) in order0" :key="index" :OrderItem="item"/>
        </div>
        <div v-show="pag == 2" class="order-list">
            <div></div>
            <OrderItem v-for="(item,index) in order1" :key="index" :OrderItem="item"/>
        </div>
        <div v-show="pag == 3" class="order-list">
            <div></div>
            <OrderItem v-for="(item,index) in order2" :key="index" :OrderItem="item"/>
        </div>
        <Bottom/>
    </div>
</template>
<script>
import Top from '../components/order-list/top'
import OrderItem from '../components/order-list/order-item'
import Bottom from '../components/tohome1'
export default {
    data(){
        return {
            pag: 0,
            orderList: [
                {model: '90575-1010', num: 100, price: 9.3, state: 0},
                {model: '90575-1010', num: 101, price: 9.3, state: 1},
                {model: '90575-1010', num: 102, price: 9.3, state: 0},
                {model: '90575-1010', num: 103, price: 9.3, state: 2},
                {model: '90575-1010', num: 104, price: 9.3, state: 0},
                {model: '90575-1010', num: 105, price: 9.3, state: 2},
                {model: '90575-1010', num: 106, price: 9.3, state: 1},
                {model: '90575-1010', num: 107, price: 9.3, state: 3},
                {model: '90575-1010', num: 108, price: 9.3, state: 2},
                {model: '90575-1010', num: 109, price: 9.3, state: 1},
                {model: '90575-1010', num: 100, price: 9.3, state: 0},
                {model: '90575-1010', num: 140, price: 9.3, state: 2},
                {model: '90575-1010', num: 141, price: 9.3, state: 1},
                {model: '90575-1010', num: 142, price: 9.3, state: 1},
                {model: '90575-1010', num: 60, price: 9.3, state: 2},
                {model: '90575-1010', num: 61, price: 9.3, state: 0},
                {model: '90575-1010', num: 79, price: 9.3, state: 1},
                {model: '90575-1010', num: 12, price: 9.3, state: 0},
            ],
            order0: [
                {model: '90575-1010', num: 100, price: 9.3, state: 0},
                {model: '90575-1010', num: 101, price: 9.3, state: 0},
                {model: '90575-1010', num: 120, price: 9.3, state: 0},
                {model: '90575-1010', num: 122, price: 9.3, state: 0},
                {model: '90575-1010', num: 1000, price: 9.3, state: 0},
                {model: '90575-1010', num: 200, price: 9.3, state: 0},
                {model: '90575-1010', num: 234, price: 9.3, state: 0},
                {model: '90575-1010', num: 1230, price: 9.3, state: 0},
                {model: '90575-1010', num: 2330, price: 9.3, state: 0},
                {model: '90575-1010', num: 112, price: 9.3, state: 0},
                {model: '90575-1010', num: 123, price: 9.3, state: 0},
                {model: '90575-1010', num: 1320, price: 9.3, state: 0},
                {model: '90575-1010', num: 1431, price: 9.3, state: 0},
                {model: '90575-1010', num: 1412, price: 9.3, state: 0},
                {model: '90575-1010', num: 4211, price: 9.3, state: 0},
            ],
            order1: [
                {model: '90575-1010', num: 100, price: 9.3, state: 1},
                {model: '90575-1010', num: 101, price: 9.3, state: 1},
                {model: '90575-1010', num: 120, price: 9.3, state: 1},
                {model: '90575-1010', num: 122, price: 9.3, state: 1},
                {model: '90575-1010', num: 1000, price: 9.3, state: 1},
                {model: '90575-1010', num: 200, price: 9.3, state: 1},
                {model: '90575-1010', num: 234, price: 9.3, state: 1},
                {model: '90575-1010', num: 1230, price: 9.3, state: 1},
                {model: '90575-1010', num: 2330, price: 9.3, state: 1},
                {model: '90575-1010', num: 112, price: 9.3, state: 1},
                {model: '90575-1010', num: 123, price: 9.3, state: 1},
                {model: '90575-1010', num: 1320, price: 9.3, state: 1},
                {model: '90575-1010', num: 1431, price: 9.3, state: 1},
                {model: '90575-1010', num: 1412, price: 9.3, state: 1},
                {model: '90575-1010', num: 4211, price: 9.3, state: 1},
            ],
            order2: [
                {model: '90575-1010', num: 100, price: 9.3, state: 2},
                {model: '90575-1010', num: 101, price: 9.3, state: 2},
                {model: '90575-1010', num: 120, price: 9.3, state: 2},
                {model: '90575-1010', num: 122, price: 9.3, state: 2},
                {model: '90575-1010', num: 1000, price: 9.3, state: 2},
                {model: '90575-1010', num: 200, price: 9.3, state: 2},
                {model: '90575-1010', num: 234, price: 9.3, state: 2},
                {model: '90575-1010', num: 1230, price: 9.3, state: 2},
                {model: '90575-1010', num: 2330, price: 9.3, state: 2},
                {model: '90575-1010', num: 112, price: 9.3, state: 2},
                {model: '90575-1010', num: 123, price: 9.3, state: 2},
                {model: '90575-1010', num: 1320, price: 9.3, state: 2},
                {model: '90575-1010', num: 1431, price: 9.3, state: 2},
                {model: '90575-1010', num: 1412, price: 9.3, state: 2},
                {model: '90575-1010', num: 4211, price: 9.3, state: 2},
            ]
        }
    },
    components: {
        Top,
        OrderItem,
        Bottom
    },
    created(){
        document.title = '我的订单'
    },
    methods: {
        changePag(index) {
            this.pag = index
        }
    }
}
</script>
<style scoped>
    .order-nav {
        width: 100%;
        height: 75px;
        display: flex;
        flex-direction: row;
        position: fixed;
        top: 110px;
        background-color: #fff;
        z-index: 10;
    }
    .order-nav>div {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .order-nav>div>div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-size: 30px;
        padding: 10px 0;
    }
    .select-order {
        color: #f6b243;
        border-bottom: 2px solid #f6b243
    }
    .order-list {
        width: 100%;
        height: 100%;
        overflow: auto;
    }
    .order-list>div:first-child {
        height: 195px;
    }
    .order-list>div:last-child {
        margin-bottom: 30px;
    }
</style>