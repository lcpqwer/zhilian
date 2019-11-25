<template>
    <div class="body">
        <Top/>
        <div class="bu-title">
            <div @click="changePag(0)">
                <div :class="{'selected':pag==0}">未沟通</div>
                <div class="t-num1"></div>
            </div>
            <div @click="changePag(1)">
                <div :class="{'selected':pag==1}">已沟通</div>
                <div class="t-num">99+</div>
            </div>
        </div>
        <div class="main-warpper" v-show="pag == 0">
            <div class="sea-warpper"></div>
            <NoCom v-for="(item,index) in NcList" :key="index" :NcItem="item"/>
        </div>
        <div class="main-warpper" v-show="pag == 1">
            <div class="sea-warpper"></div>
            <HaveCom v-for="(HcItem,index) in HcList" :key="index" :HcItem="HcItem"/>
        </div>
        <Bottom/>
    </div>
</template>
<script>
import Bottom from '../components/tohome1'
import Top from '../components/business/top'
import HaveCom from '../components/business/have-com'
import NoCom from '../components/business/no-com'
export default {
    data(){
        return {
            pag: 0,
            // 未沟通数据
            NcList:[
                {model: '90575-1010', num: 10000, time: '上午 11:00', type: '1'},
                {model: '90575-1010', num: 10000, time: '上午 11:00', type: '1'},
                {model: '90575-1010', num: 10000, time: '上午 11:00', type: '0'},
                {model: '90575-1010', num: 10000, time: '上午 11:00', type: '1'},
                {model: '90575-1010', num: 10000, time: '上午 11:00', type: '0'},
                {model: '90575-1010', num: 10000, time: '上午 11:00', type: '1'},
                {model: '90575-1010', num: 10000, time: '上午 11:00', type: '1'},
                {model: '90575-1010', num: 10000, time: '上午 11:00', type: '0'},
                {model: '90575-1010', num: 10000, time: '上午 11:00', type: '1'},
            ],
            HcList:[
                {model: '90575-1010', num: 10000, time: '2019年10月11日 上午 11:00', type: '0', price: '9.6元'},
                {model: '90575-1010', num: 10000, time: '2019年10月11日 上午 11:00', type: '1', price: '9.6元'},
                {model: '90575-1010', num: 10000, time: '2019年10月11日 上午 11:00', type: '1', price: '9.6元'},
                {model: '90575-1010', num: 10000, time: '2019年10月11日 上午 11:00', type: '0', price: '9.6元'},
                {model: '90575-1010', num: 10000, time: '2019年10月11日 上午 11:00', type: '1', price: '9.6元'},
                {model: '90575-1010', num: 10000, time: '2019年10月11日 上午 11:00', type: '1', price: '9.6元'},
                {model: '90575-1010', num: 10000, time: '2019年10月11日 上午 11:00', type: '0', price: '9.6元'},
                {model: '90575-1010', num: 10000, time: '2019年10月11日 上午 11:00', type: '1', price: '9.6元'},
            ]
        }
    },
    components: {
        Bottom,
        Top,
        HaveCom,
        NoCom
    },
    created(){
        document.title = '商机'
    },
    methods: {
        changePag(pag){
            if (this.pag != pag){
               this.pag == 0 ? this.pag = 1: this.pag = 0 
            }
        }
    }
}
</script>
<style scoped>
    .main-warpper {
        width: 670px;
        padding: 0 40px;
        height: 100%;
        overflow-y: auto
    }
    .main-warpper>div:last-child {
        margin-bottom: 20px;
    }
    .sea-warpper {
        width: 100%;
        height: 185px;
    }
    .bu-title {
        width: 670px;
        padding: 0 40px;
        height: 75px;
        position: fixed;
        top: 110px;
        left: 0;
        display: flex;
        flex-direction: row;
        background-color: #fff;
        z-index: 10;
    }
    .bu-title .t-num, .t-num1 {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: red;
        color: #ffffff;
        line-height: 30px;
        text-align: center;
        font-size: 8px;
        position: absolute;
        left: 50%;
        transform: translateX(40px);
        top: 10px;
    }
    .t-num1 {
        width: 15px;
        height: 15px;
        top: 15px;
    }
    .bu-title>div {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .bu-title>div>div:first-child {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        /* height: 40px; */
        /* line-height: 50px; */
        /* width: 100px; */
        padding: 10px;
        text-align: center;
        font-size: 30px;
    }
    .selected{
        color: #f5b141;
        border-bottom: 2px solid #f5b141
    }
</style>