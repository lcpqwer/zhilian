<template>
    <div class="body">
        <Top/>
        <div class="bu-title">
            <div @click="changePag(0)">
                <div :class="{'selected':pag==0}">实单</div>
                <div class="t-num">99+</div>
            </div>
            <div @click="changePag(1)">
                <div :class="{'selected':pag==1}">询价</div>
                <div class="t-num">99+</div>
            </div>
        </div>
        <div v-show="pag == 0" class="main-warpper">
            <div class="sea-warpper"></div>
            <UpItem v-for="(item,index) in SdList" :key="index" :UpItem="item" ItemType="sd"/>
        </div>
        <div v-show="pag == 1" class="main-warpper">
            <div class="sea-warpper"></div>
            <UpItem v-for="(item,index) in XjList" :key="index" :UpItem="item" ItemType="xj"/>
        </div>
       
        <Bottom/>
    </div>
</template>
<script>
import Bottom from '../components/tohome1'
import Top from '../components/my-upload/top'
import UpItem from '../components/my-upload/upItem'
export default {
    data(){
        return {
            pag: 0,
            // 未沟通数据
            SdList:[
                {model: '90575-1010', num: 10000, time: '2019年10月11日 上午 11:00', chat: 111},
                {model: '90575-1010', num: 10000, time: '2019年10月11日 上午 11:00', chat: 111},
                {model: '90575-1010', num: 10000, time: '2019年10月11日 上午 11:00', chat: 111},
                {model: '90575-1010', num: 10000, time: '2019年10月11日 上午 11:00', chat: 111},
                {model: '90575-1010', num: 10000, time: '2019年10月11日 上午 11:00', chat: 111},
                {model: '90575-1010', num: 10000, time: '2019年10月11日 上午 11:00', chat: 111},
                {model: '90575-1010', num: 10000, time: '2019年10月11日 上午 11:00', chat: 111},
                {model: '90575-1010', num: 10000, time: '2019年10月11日 上午 11:00', chat: 111},
                {model: '90575-1010', num: 10000, time: '2019年10月11日 上午 11:00', chat: 111},
                {model: '90575-1010', num: 10000, time: '2019年10月11日 上午 11:00', chat: 111},
                {model: '90575-1010', num: 10000, time: '2019年10月11日 上午 11:00', chat: 111},
                {model: '90575-1010', num: 10000, time: '2019年10月11日 上午 11:00', chat: 111},
            ],
            XjList:[
                {model: '90575-1011', num: 10000, time: '2019年10月11日 上午 11:00', chat: 111},
                {model: '90575-1011', num: 10000, time: '2019年10月11日 上午 11:00', chat: 111},
                {model: '90575-1011', num: 10000, time: '2019年10月11日 上午 11:00', chat: 111},
                {model: '90575-1011', num: 10000, time: '2019年10月11日 上午 11:00', chat: 111},
                {model: '90575-1011', num: 10000, time: '2019年10月11日 上午 11:00', chat: 111},
                {model: '90575-1011', num: 10000, time: '2019年10月11日 上午 11:00', chat: 111},
                {model: '90575-1011', num: 10000, time: '2019年10月11日 上午 11:00', chat: 111},
                {model: '90575-1011', num: 10000, time: '2019年10月11日 上午 11:00', chat: 111},
                {model: '90575-1011', num: 10000, time: '2019年10月11日 上午 11:00', chat: 111},
                {model: '90575-1011', num: 10000, time: '2019年10月11日 上午 11:00', chat: 111},
                {model: '90575-1011', num: 10000, time: '2019年10月11日 上午 11:00', chat: 111},
                {model: '90575-1011', num: 10000, time: '2019年10月11日 上午 11:00', chat: 111},
            ]
        }
    },
    components: {
        Bottom,
        Top,
        UpItem
    },
    created(){
        document.title = '我的发布'
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
    .sea-warpper {
        width: 100%;
        height: 185px;
    }
    .main-warpper>div:last-child {
        margin-bottom: 20px;
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
        /* position: relative; */
    }
    .bu-title>div {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .bu-title .t-num {
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
        transform: translateX(20px);
        top: 10px;
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
        color: #a2a2a2
    }
    .selected{
        color: #f5b141 !important;
        border-bottom: 2px solid #f5b141
    }
</style>