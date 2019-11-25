<template>
    <div class="item-warpper">
        <div class="h-top">
            <div class="h-model">型号：{{NcItem.model}}</div>
            <div class="h-num">数量：{{NcItem.num}}</div>
            <div v-if="NcItem.type == '1'" class="h-type sd">实单</div>
            <div v-else class="h-type">询价</div>
        </div>
        <div class="h-time">
            {{NcItem.time}}
            <div class="h-text">未沟通</div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    NcItem: Object
  }
}
</script>
<style scoped>
    .item-warpper {
        width: 100%;
        height: 188px;
        box-shadow: 0px 0px 10px 10px #e9e9e9;
        border-radius: 10px;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
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
