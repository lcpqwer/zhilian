<template>
     <div class="item-warpper">
        <div class="h-top">
            <div class="h-model">型号：{{UpItem.model}}</div>
            <div class="h-num">数量：{{UpItem.num}}</div>
            <div v-if="ItemType == 'sd'" class="h-type">实单</div>
            <div v-else class="h-type">询价</div>
        </div>
        <div class="h-time">
            {{UpItem.time}}
            <div class="h-text">已有{{UpItem.chat}}人和你沟通</div>
        </div>
    </div>
   
</template>
<script>
export default {
    props: {
        UpItem: Object,
        ItemType: String,
    }
}
</script>
<style scoped>
    .item-warpper {
        width: 670px;
        height: 188px;
        box-shadow: 0px 0px 10px 10px #e9e9e9;
        border-radius: 10px;
        /* margin-top: 20px; */
        display: flex;
        flex-direction: column;
        position: fixed;
        top: 110px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 100;
        background-color: #fff;
    }
    .h-top {
        /* width: 100%;
        height: 132px; */
        position: relative;
    }
    .h-model {
        width: 100%;
        height: 78px;
        line-height: 78px;
        font-size: 27px;
        text-indent: 45px;
    }
    .h-num {
        width: 100%;
        height: 54px;
        font-size: 27px;
        text-indent: 45px;
    }
    .h-type {
        font-size: 40px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 40px;
    }
    .sd {
        color: #f17f3a;
 
    }
    .h-time{
        width: 100%;
        height: 56px;
        line-height: 56px;
        text-indent: 45px;
        color: #cacaca;
        position: relative;
    }
    .h-text {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 40px;
        color: #252525
    }
</style>
