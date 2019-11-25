<template>
    <div class="body">
        <Top/>
        <Card :UpItem="item"/>
        <div class="body">
            <div class="main-top"></div>
            <div @click="toChat" v-for="(item,index) in seList" :key="index" class="session-warpper">
                <div class="se-left">
                    <img src="../assets/img/login/userhead.png" alt="">
                </div>
                <div class="se-right">
                    <div class="ser-top">
                        <div class="se-name">用户</div>
                        <div class="se-time">上午 9:30</div>
                    </div>
                    <div class="ser-bottom">
                        <div class="se-content">你好。</div>
                        <div class="se-num">99+</div>
                    </div>
                </div>
            </div>
        </div>
        <Bottom/>
    </div>
</template>
<script>
import Top from '../components/session-list/top'
import Card from '../components/session-list/upItem'
import Bottom from '../components/tohome1'
export default {
    data(){
        return {
            type: null,
            item: '',
            seList: [1,2,3,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,]
        }
    },
    created(){
        document.title = '消息列表'
        this.item = this.$store.state.SessionList.order
    },
    components: {
        Top,
        Card,
        Bottom
    },
    methods: {
        toChat(){
            this.$router.push({path: '/Chat'})
        }
    }
}
</script>
<style scoped>
    .main-top {
        height: 320px;
    }
    .session-warpper {
        width: 670px;
        height: 110px;
        display: flex;
        flex-direction: row;
        padding: 0 40px;
    }
    .se-left {
        width: 105px;
        height: 100%;
        position: relative;
    }
    .se-left>img {
        width: 80px;
        height: 80px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%)
    }
    .se-right {
        width: 565px;
        height: 100%;
        border-bottom: 1px solid #e9e9e9;
        display: flex;
        flex-direction: column;
    }
    .ser-top {
        width: 100%;
        height: 70px;
        position: relative;
    }
    .se-name, .se-time {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 26px;
    }
    .se-time {
        right: 0;
        color: #9e9e9e
    }
    .ser-bottom {
        width: 100%;
        height: 40px;
        position: relative;
    }
    .se-content, .se-num {
        position: absolute;
        top: 0;
        font-size: 25px;
        color: #9e9e9e
    }
    .se-num {
        color: white;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        line-height: 30px;
        text-align: center;
        right: 0;
        background-color: red;
        font-size: 10px;
    }
    
</style>