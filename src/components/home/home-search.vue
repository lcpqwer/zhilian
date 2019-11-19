<template>
    <div class="sea">
        <div class="search-warpper">
            <input class="se-input" type="text" placeholder="请输入型号">
            <img model="widthFix" class="sea-img" src="../../assets/img/home/search.png" alt="">
            <img class="home-user" @click="toUser" src="../../assets/img/home/user.png" model="widthFix" alt="">
        </div>
    </div>
</template>
<script> 
export default {
    methods: {
        toUser(){
            this.$router.push({path: '/User'})
        }
    }
}
</script>
<style>
    .sea {
        height: 143px;
        width: 750px;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 100;
        background-color: #fff;
    }
    .search-warpper {
        height: 143px;
        width: 100%;
        /* background-color: #f8f6f4; */
        position: relative;
    }
    .se-input {
        height: 64px;
        width:  500px;
        padding-left: 80px;
        background-color: #f8f6f4;
        border: none;
        font-size: 30px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 40px;
        border-radius: 10px;
    }
    .sea-img {
        width: 45px;
        height: 45px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left:58px;
    }
    .home-user {
        position: absolute;
        top: 50%;
        right: 40px;
        transform: translateY(-50%);
        width: 53px;
    }
</style>