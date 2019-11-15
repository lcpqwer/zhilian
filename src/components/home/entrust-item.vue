<template>
    <div class="entrust-warpper">
        <div>
            <img class="ent-head" src="../../assets/img/login/userhead.png" model="widthFix" alt="">
            <div class="ent-level">
                VIP{{entrust.level}}
            </div>
            <div class="ent-name">{{entrust.name}}</div>

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
        width: 100%;
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
        padding: 5px 0px;
        font-size: 20px;
    }
</style>