<template>
    <div class="main">
        <div class="pormpt p-one">更换手机号后，下次登陆可使用新手机号登陆</div>
        <div class="pormpt">当前绑定手机号为: 13153508401</div>
        <div class="p-input i-one">
            <div>手机号</div>
            <input type="text" placeholder="请输入手机号">
        </div>
        <div class="p-input">
            <div>手机号</div>
            <input type="text" placeholder="请输入手机号">
            <div class="yzm">获取验证码</div>
        </div>
        <button class="p-sub">确认更换</button>
    </div>
</template>
<script>
export default {
  created () {
    document.title = '更换手机号'
  }
}
</script>
<style scoped>
    .pormpt {
        width: 100%;
        height: 50px;
        line-height: 50px;
        font-size: 30px;
        color: #686868
    }
    .p-one {
        margin-top: 40px;
    }
    .p-input {
        width: 100%;
        height: 110px;
        position: relative;
    }
    .p-input>div, .p-input>input {
        font-size: 28px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        color: #000
    }
    .p-input>input {
        height: 85px;
        width: 566px;
        right: 0;
        border: 2px solid #949494;
        border-radius: 10px;
        text-indent: 20px;
    }
    .yzm {
        width: 180px;
        text-align: center;
        height: 85px;
        line-height: 85px;
        border-left: 2px solid #949494;
        right: 0
    }
    .i-one {
        margin-top: 90px;
    }
    .p-sub {
        height: 90px;
        width: 100%;
        background-color: #f6b234;
        border-radius: 10px;
        font-size: 30px;
        color: white;
        margin: 200px 0;
    }
</style>
