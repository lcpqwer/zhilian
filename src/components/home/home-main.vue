<template>
    <div class="home-main">
        <div class="homain-top">
            <div class="ht-left" @click="changePag(0)">急购专区</div>
            <div class="ht-right">
                <div class="htr-top" @click="changePag(1)">自营商城</div>
                <div class="htr-bottom" @click="changePag(2)">发布库存</div>
            </div>
        </div>
        <div class="homain-bottom" @click="changePag(3)">我的商机</div>
    </div>
</template>
<script>
export default {
    methods: {
        changePag(index){
            switch (index){
                case 0:
                    this.$router.push({path:'/hurrybuy'})
                    break
            }
        }
    }
}
</script>
<style>
    .home-main {
        width: 100%;
        /* height: 610px; */
        display: flex;
        flex-direction: column;
        padding: 0 40px;
    }
    .homain-top {
        width: 100%;
        height: 380px;
        /* background-color: #000; */
        display: flex;
        flex-direction: row;
    }
    .ht-left {
        width: 334px;
    }
    .ht-right {
        width: 326px;
        margin-left: 20px;
        display: flex;
        flex-direction: column;
    }
    .htr-top, .htr-bottom {
        height: 186px;
    }
    .htr-bottom {
        margin-top: 10px;
    }
    .homain-bottom {
        width: 100%;
        height: 185px;
        margin-top: 40px;
    }
    .homain-bottom, .ht-left, .htr-top, .htr-bottom {
        background-color: #d8d8d8;
        border: 2px solid #8e8e8e;
        text-align: center;
        line-height: 186px;
        font-size: 44px;
        color: #ffffff;
        box-sizing: border-box
    }
    .ht-left {
        line-height: 380px;
    }
</style>