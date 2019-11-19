<template>
    <div class="body">
        <div class="login-logo">
            <img class="log-logo" src="../assets/img/login/logo2.png" alt="logo">
        </div>
        <div class="login-item">
            <div class="logitem-title">
                帐号
            </div>
            <input v-model="username" class="logitem-input" type="text" placeholder="账号/手机号/微信号">
        </div>
        <div class="login-item">
            <div class="logitem-title">
                密码
            </div>
            <input v-model="password" class="logitem-input" type="text" placeholder="请输入密码">
        </div>
        <div class="login-sub">
            <button class="login-btn" @click="login">登陆</button>
        </div>
        <div class="other-login">
            ———————&emsp;其他登陆方式&emsp;———————
        </div>
        <div class="wx-login">
            <img class="wx-img" src="../assets/img/login/weixin.png" alt="">
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            username: '',
            password: '',
            images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
        }
    },
    created(){
        document.title = '登陆'
    },
    methods: {
        login(){
            console.log(this.username)
            console.log(this.password)
            this.$router.push({path: '/Home'})
        }
    }
}
</script>
<style>
    
</style>