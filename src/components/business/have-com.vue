<template>
    <div class="item-warpper">
        <div class="h-top">
            <div class="h-model">型号：{{HcItem.model}}</div>
            <div class="h-num">数量：{{HcItem.num}}</div>
            <div class="h-num">未税单价：{{HcItem.price}}</div>
            <div v-if="HcItem.type == '1'" class="h-type shi">实单</div>
            <div v-else class="h-type">询价</div>
        </div>
        <div class="h-time">
            {{HcItem.time}}
            <div class="h-text">已沟通</div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        HcItem: Object 
    }
}
</script>
<style scoped>
    .item-warpper {
        width: 100%;
        height: 237px;
        box-shadow: 0px 0px 10px 10px #e9e9e9;
        border-radius: 10px;
        margin-top: 20px;
    }
    .h-top {
        position: relative;
    }
    .h-model, .h-price {
        padding-top: 25px;
        font-size: 27px;
        text-indent: 45px;
    }
    .h-num {
        padding-top: 25px;
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
    .shi {
        color: #f17f3a 
    }
    .h-time{
        width: 100%;
        height: 80px;
        line-height: 80px;
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
