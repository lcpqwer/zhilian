<template>
    <div class="in-title">
        <div>型号</div>
        <div>价格</div>
        <div>数量</div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .in-title {
        width: 100%;
        padding: 0 40px;
        height: 75px;
        position: fixed;
        top: 110px;
        left: 0;
        display: flex;
        flex-direction: row;
        background-color: #fff;
        z-index: 10;
    }
    .in-title>div {
        width: 100%;
        height: 100%;
        line-height: 75px;
        text-align: center;
        font-size: 25px;
    }
</style>