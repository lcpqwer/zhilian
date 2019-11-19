<template>
<div>
    <div class="in-message in-mes">消息</div>
    <div class="in-home in-hom">首页</div>
</div>
    
</template>
<script>
export default {
    
}
</script>
<style scoped>
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
    .in-mes {
        bottom: 120px;
        
    }
    .in-hom {
        bottom: 40px;
    }
</style>