<template>
    <div>
        <div class="in-btn" @click="upload">立即上传</div>
    </div>
</template>
<script>
export default {
    methods: {
        upload(){
            this.$router.push({path: '/UpInventory'})
        }
    }
}
</script>
<style>
    .in-btn {
        width: 100%;
        height: 90px;
        line-height: 90px;
        text-align: center;
        position: fixed;
        bottom: 0;
        z-index: 10;
        background-color: #f6b243;
        font-size: 35px;
        color: #ffffff;
        left: 0;
    }
</style>