<template>
    <div>
        <img class="user-head" src="../assets/img/login/userhead.png" alt="">
        <div class="ushead-text">头像</div>
        <div class="login-item">
            <div class="logitem-title">
                昵称
            </div>
            <input class="logitem-input" type="text" placeholder="请输入昵称">
        </div>
        <div class="login-item">
            <div class="logitem-title">
                公司
            </div>
            <input class="logitem-input" type="text" placeholder="请输入公司">
        </div>
        <div class="login-sub">
            <button class="login-btn">完成</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script> 
<style>
    .logitem-title {
        font-weight: normal
    }
    .logitem-input {
        font-weight: bold
    }
    .login-sub {
        height: 230px;
    }
    .user-head {
        width: 120px;
        height: 120px;
        margin-left: 50%;
        transform: translateX(-50%);
        margin-top: 40px;
    }
    .ushead-text {
        width: 100px;
        text-align: center;
        font-size: 26px;
        margin-left: 50%;
        transform: translateX(-50%);
        margin-top: 30px;
        font-weight: 550;
    }
</style>