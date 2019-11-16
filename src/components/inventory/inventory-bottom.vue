<template>
    <div>
        <div class="in-btn">立即上传</div>
        <div class="in-message">消息</div>
        <div class="in-home">首页</div>
    </div>
</template>
<script>
export default {
    
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
    .in-message, .in-home {
        width: 60px;
        height: 60px;
        background-color: rgba(0,0,0,0.5);
        text-align: center;
        line-height: 60px;
        color: #ffffff;
        font-size: 20px;
        border-radius: 50%;
        position: fixed;
        right: 40px;
        z-index: 10;
    }
    .in-message {
        bottom: 190px;
        
    }
    .in-home {
        bottom: 110px;
    }
</style>