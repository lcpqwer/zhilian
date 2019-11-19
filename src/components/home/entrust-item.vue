<template>
    <div class="entrust-warpper">
        <div>
            <img class="ent-head" src="../../assets/img/login/userhead.png" model="widthFix" alt="">
            <div class="ent-level">
                VIP{{entrust.level}}
            </div>
            <div class="ent-name">{{entrust.name}}</div>
            <div class="ent-point">
                <img v-for="index of entrust.point" :key="index" class="entp-img" src="../../assets/img/home/point.png" mode="widthFix" alt="">
                <!-- <img class="entp-img" src="../../assets/img/home/point.png" mode="widthFix" alt="">
                <img class="entp-img" src="../../assets/img/home/point.png" mode="widthFix" alt="">
                <img class="entp-img" src="../../assets/img/home/point.png" mode="widthFix" alt="">
                <img class="entp-img" src="../../assets/img/home/point.png" mode="widthFix" alt=""> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
        entrust: Object
    }
}
</script>
<style>
    .entrust-warpper {
        width: 670px;
        height: 170px;
        padding: 0 40px;
    }
    .entrust-warpper>div {
        width: 100%;
        height: 100%;
        box-shadow: 0px 0px 10px 10px #f8f8f8;
        border-radius: 15px;
        position: relative;
    }
    .ent-head {
        width: 100px;
        position: absolute;
        top: 50%;
        left: 20px;
        transform: translateY(-50%)
    }
    .ent-name {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 140px;
        font-size: 33px;
        color: #313131;
    }
    .ent-level {
        width: 80px;
        background: #000000;
        border-radius: 40px;
        position: absolute;
        top: 110px;
        left: 30px;
        text-align: center;
        color: #e9aa42;
        font-size: 20px;
        padding-top: 4px;
    }
    .ent-point {
        position: absolute;
        right: 120px;
        top: 50%;
        transform: translate(50%,-50%)
    }
    .entp-img {
        width: 25px;
        margin: 0 3px;
    }
</style>