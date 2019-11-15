<template>
    <div class="search-warpper">
        <input class="se-input" type="text" placeholder="请输入型号">
        <div class="sea-warpper">
           <div>
               <img model="widthFix" src="../../assets/img/home/search.png" alt="">
           </div>
        </div>
        <img class="home-user" src="../../assets/img/home/user.png" model="widthFix" alt="">
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    .search-warpper {
        height: 143px;
        width: 100%;
        /* background-color: #f8f6f4; */
        position: relative;
    }
    .se-input {
        height: 64px;
        width: 580px;
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
    .sea-warpper {
        width: 80px;
        height: 100%;
        position: absolute;
        left: 40px;
    }
    .sea-warpper>div{
        height: 100%;
        width: 100%;
        position: relative;
    }
    .sea-warpper>div>img {
        width: 45px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%)
    }
    .home-user {
        position: absolute;
        top: 50%;
        right: 40px;
        transform: translateY(-50%);
        width: 53px;
    }
</style>