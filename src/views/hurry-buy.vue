<template>
    <div class="body">
        <hurryItem v-for="(item,index) in hurryInfo" :key="index" :hurryInfo="item"/>
        <div class="hub"></div>
        <div v-show="release" class="hub-bottom">
            <div class="hub-item shi" @click="showReal">实单</div>
            <div class="hub-item xun" @click="showInqu">询价</div>
        </div>
        <div v-show="realbool" class="uphub-warpper shi">
            <div class="uphub-title">
                实单
                <img @click="hideReal" class="uphub-img" src="../assets/img/hurrybuy/hide.png" alt="">
            </div>
            <div class="uphub-input">
                <div class="title">型号<span style="color:red">*</span></div>
                <input type="text" class="input shi-input" placeholder="请输入需要的产品型号(必填)">
            </div>
            <div class="uphub-input">
                <div class="title">数量<span style="color:red">*</span></div>
                <input type="text" class="input shi-input" placeholder="请输入需要的产品数量(必填)">
            </div>
            <div class="uphub-input price">
                <div class="title">价格</div>
                <input type="text" class="input shi-input" placeholder="请输入未税单价(选填)">
            </div>
            <div class="uphub-sub">
                <button class="sub shi-sub">发送</button>
            </div>
        </div>
        <div v-show="inquirybool" class="uphub-warpper xun">
            <div class="uphub-title">
                询价
                <img @click="hideInqu" class="uphub-img" src="../assets/img/hurrybuy/hide.png" alt="">
            </div>
            <div class="uphub-input">
                <div class="title">型号<span style="color:red">*</span></div>
                <input type="text" class="input xun-input" placeholder="请输入需要的产品型号(必填)">
            </div>
            <div class="uphub-input">
                <div class="title">数量<span style="color:red">*</span></div>
                <input type="text" class="input xun-input" placeholder="请输入需要的产品数量(必填)">
            </div>
            <div class="uphub-input price">
                <div class="title">价格</div>
                <input type="text" class="input xun-input" placeholder="请输入未税单价(选填)">
            </div>
            <div class="uphub-sub">
                <button class="sub xun-sub">发送</button>
            </div>
        </div>
        <Bottom/>
    </div>
</template>
<script>
import hurryItem from '../components/hurrybuy/hurrybuy-item'
import Bottom from '../components/tohome2'
export default {
    data(){
        return {
            hurryInfo: [
                {model: '98575-2858', num: 10000, time: '上午 11:00', type: '1', user: '2'},
                {model: '92575-2876', num: 10000, time: '上午 10:00', type: '2', user: '2'},
                {model: '98375-2656', num: 10000, time: '上午 09:00', type: '1', user: '2'},
                {model: '98575-5856', num: 10000, time: '上午 11:00', type: '2', user: '1'},
                {model: '98755-4856', num: 10000, time: '上午 05:00', type: '2', user: '2'},
                {model: '98565-2356', num: 10000, time: '上午 11:00', type: '1', user: '2'},
                {model: '98775-2826', num: 10000, time: '下午 13:00', type: '2', user: '1'},
                {model: '98875-2851', num: 10000, time: '上午 11:00', type: '1', user: '2'}
            ],
            // 底部点击发布栏
            release: true,
            // 实单信息填写面板
            realbool: false,
            // 询价信息填写面板
            inquirybool: false,
            // 下拉加载
        }
    },
    components: {
        hurryItem,
        Bottom
    },
    created(){
        document.title = '急购区'
    },
    methods:{
        showReal(){
            this.release = false;
            this.realbool = true;
        },
        hideReal(){
            this.realbool = false;
            this.release = true;
        },
        showInqu(){
            this.release = false;
            this.inquirybool = true;
        },
        hideInqu(){
            this.inquirybool = false;
            this.release = true;
        },
        onRefresh(){
            console.log(1)
        }
    }
}
</script>
<style>
    .hub-bottom {
        width: 750px;
        height: 90px;
        /* background-color: black; */
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        flex-direction: row;
    }
    .hub-item {
        width: 50%;
        height: 100%;
        line-height: 90px;
        text-align: center;
        font-size: 40px;
        color: white
    }
    .hub {
        height: 150px;
    }
    .uphub-warpper {
        width: 750px;
        height: 640px;
        position: fixed;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
    }
    .uphub-title {
        width: 100%;
        height: 120px;
        line-height: 120px;
        text-align: center;
        color: white;
        font-size: 40px;
        position: relative;
    }
    .uphub-img {
        width: 45px;
        height: 45px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 40px;
    }
    .uphub-input {
        width: 100%;
        height: 110px;
        position: relative;
    }
    .uphub-input>* {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    .uphub-input>.title {
        left: 40px;
        font-size: 34px;
        color: #ffffff
    }
    .uphub-input>.input {
        width: 570px;
        right: 40px;
        height: 90px;
        border-radius: 10px;
        text-indent: 20px;
        font-size: 25px;
        color: #000
    }
    .uphub-input>.input::-webkit-input-placeholder { /* Chrome/Opera/Safari */ 
        color: rgba(255,255,255,0.7);
    }
    .shi-input {
        background-color: #f8bf9c;
    }
    .xun-input {
        background-color: #fad8a1;
    }
    .uphub-warpper .price {
        margin-top: 10px;
    }
    .uphub-sub {
        width: 100%;
        height: 180px;
        position: relative;
    }
    .uphub-sub>.sub {
        width: 240px;
        height: 100px;
        line-height: 100px;
        text-align: center;
        font-size: 35px;
        position: absolute;
        top: 50%;
        right: 40px;
        transform: translateY(-50%);
        border-radius: 10px;
        background-color: white;
    }
    .shi-sub {
        color: #f17f3a;
    }
    .xun-sub {
        color: #f6b243;
    }
</style>