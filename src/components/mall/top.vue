<template>
<!-- <div class="sea-warpper"> -->
    <div class="sea-main">
        <div>
            <input type="text" class="sea-input" placeholder="搜索型号">
            <img src="../../assets/img/home/search.png" class="sea-img" alt="">
            <div class="se-btn">搜索</div>
        </div>
    </div>
<!-- </div> -->
</template>
<script>
export default {

}
</script>
<style scoped>
    .sea-warpper {
        width: 100%;
        height: 185px;
    }
    .sea-main {
        width: 100%;
        height: 110px;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #fff;
        z-index: 10;
    }
    .sea-main>div:first-child {
        width: 100%;
        height: 100%;
        position: relative;
    }
    .sea-input {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #f6f8f4;
        width: 460px;
        height: 64px;
        border-radius: 10px;
        /* text-indent: 78px; */
        padding-left: 78px;
        padding-right: 132px;
        font-size: 25px;
    }
    .sea-img {
        width: 45px;
        height: 45px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left:58px;
    }
    .se-btn {
        height: 64px;
        width: 120px;
        background-color: #f6b243;
        position: absolute;
        top: 50%;
        right: 40px;
        transform: translateY(-50%);
        color: white;
        line-height: 64px;
        text-align: center;
        font-size: 30px;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
</style>
