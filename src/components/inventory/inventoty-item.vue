<template>
    <div class="in-item">
        <div>{{inItem.model}}</div>
        <div>{{inItem.price}}</div>
        <div class="number">
            <input type="number" v-model="inItem.num">
        </div>
    </div>
</template>
<script>
export default {
    props: {
        inItem: Object
    }
}
</script>
<style>
    .in-item {
        width: 100%;
        height: 80px;
        /* padding: 0 40px; */
        display: flex;
        flex-direction: row;
    }
    .in-item>div {
        width: 100%;
        height: 100%;
        line-height: 80px;
        text-align: center;
        font-size: 25px;
        border-bottom: 1px solid #c5c5c5
    }
    .number {
        position: relative;
    }
    .number>input {
        width: 120px;
        height: 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        font-size: 25px;
        border: 1px solid #ef6f21;
        z-index: 1;
        text-align: center;
    }
</style>