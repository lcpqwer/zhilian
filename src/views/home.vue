<template>
<div class="body">
    <headSearch/>
    <div class="top"></div>
    <homeMain/>
    <div class="h-entrust-title">委托找料</div>
    <entrustItem v-for="(item, index) in entrus" :key="index" :entrust="item"/>
    <div class="home-advices">
        <div>
           消息
           <div class="had-red"></div> 
        </div>
    </div>
</div>
    
</template>
<script>
import headSearch from '../components/home/home-search'
import homeMain from '../components/home/home-main'
import entrustItem from '../components/home/entrust-item'
export default {
    data() {
        return {
            entrus: [{name: '供应商1', head: '../../assets/img/login/userhead.png', point: 1, level: 3},
                    {name: '供应商2', head: '../../assets/img/login/userhead.png', point: 4, level: 2},
                    {name: '供应商3', head: '../../assets/img/login/userhead.png', point: 5, level: 5},
                    {name: '供应商4', head: '../../assets/img/login/userhead.png', point: 5, level: 4},
                    {name: '供应商1', head: '../../assets/img/login/userhead.png', point: 1, level: 3},
                    {name: '供应商2', head: '../../assets/img/login/userhead.png', point: 4, level: 2},
                    {name: '供应商3', head: '../../assets/img/login/userhead.png', point: 5, level: 5},
                    {name: '供应商4', head: '../../assets/img/login/userhead.png', point: 5, level: 4},
                    {name: '供应商5', head: '../../assets/img/login/userhead.png', point: 2, level: 5}]
        }
    },
    created() {
        document.title = '联置科技'
    },
    components: {
        headSearch,
        homeMain,
        entrustItem
    },
    methods: {

    }
}
</script>
<style>
.top {
    height: 143px;
    width: 750px;
}
    .h-entrust-title {
        height: 80px;
        margin-top: 25px;
        line-height: 80px;
        font-size: 30px;
        text-indent: 40px;
        font-weight: bold;
    }
    .home-advices {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        position: fixed;
        bottom: 30px;
        background-color: rgba(0,0,0,0.5);
        right: 40px;
        color: #ffffff;
        font-size: 20px;
    }
    .home-advices>div {
        width: 100%;
        height: 100%;
        position: relative;
        line-height: 60px;
        text-align: center;
    }
    .had-red {
        width: 10px;
        height: 10px;
        border-radius: 20px;
        position: absolute;
        top: 5px;
        right: 5px;
        background-color: red;
    }
</style>