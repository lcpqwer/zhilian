<template>
    <div>
        <div class="login-logo">
            <img class="log-logo" src="../assets/img/login/logo2.png" alt="logo">
        </div>
        <div class="login-item">
            <div class="logitem-title">
                手机号
            </div>
            <input v-model="username" class="logitem-input register-input" type="text" placeholder="请输入手机号">
        </div>
        <div class="login-item">
            <div class="logitem-title">
                验证码
            </div>
            <input v-model="password" class="logitem-input register-input" type="text" placeholder="请输入密码">
            <div class="get-yzm">获取验证码</div>
        </div>
        <div class="login-item">
            <div class="logitem-title">
                &ensp;密码
            </div>
            <input v-model="password" class="logitem-input register-input" type="text" placeholder="请设置6-18位数字&英文字母密码">
        </div>
        <div class="reg-agree">
            <img class="reg-agree-img" src="../assets/img/login/ok.png" alt="">
            <div class="reg-agree-text">注册即代表同意联置科技<span>用户服务协议</span></div>
        </div>
        <button class="reg-btn" @click="register">注册</button>
        <div class="reg-bottom">
            已有账号?&ensp;<span @click="toLogin">去登陆</span>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            username: '',
            password: ''
        }
    },
    created(){
        document.title = '注册'
    },
    methods: {
        register(){
            document.title = '123'
        },
        toLogin(){
            this.$router.push({path: '/login'})
        }
    }
}
</script>
<style>
    .register-input {
        width: 565px !important;
    }
</style>