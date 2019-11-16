<template>
    <div class="home-main">
        <div class="homain-top">
            <div class="ht-left" @click="changePag(0)">
                <img class="main-img" src="../../assets/img/home/hurry-buy.png" alt="">
                <div>急购专区</div>
            </div>
            <div class="ht-right">
                <div class="htr-top" @click="changePag(1)">
                    <img class="main-img" src="../../assets/img/home/mall.png" alt="">
                   <div>自营商城</div>
                </div>
                <div class="htr-bottom" @click="changePag(2)">
                    <img class="main-img" src="../../assets/img/home/inventory.png" alt="">
                    <div>发布库存</div> 
                </div>
            </div>
        </div>
        <div class="homain-bottom" @click="changePag(3)">
            <img class="main-img" src="../../assets/img/home/business.png" alt="">
            <div>我的商机</div> 
        </div>
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
                case 2:
                    this.$router.push({path:'/my-inventory'})
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
        /* background-color: #d8d8d8;
        border: 2px solid #8e8e8e; */
        /* text-align: center; */
        /* line-height: 186px; */
        font-size: 44px;
        color: #ffffff;
        box-sizing: border-box;
        color: #000;
        position: relative;
        font-size: 40px;
    }
    .main-img {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
    }
    .ht-left>div {
        position: absolute;
        top: 30px;
        left: 30px;
        z-index: 10;
    }
    .htr-top>div, .htr-bottom>div {
        position: absolute;
        top: 50%;
        right: 20px;
        transform: translateY(-50%);
        z-index: 10;
        font-size: 30px;
    }
    .homain-bottom>div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: 10;
        font-size: 30px;
    }
</style>