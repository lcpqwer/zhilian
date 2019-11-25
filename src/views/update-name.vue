<template>
    <div class="body">
        <div class="name-warpper">
            <input v-model="name" type="text">
            <img src="../assets/img/del-input.png" alt="">
        </div>
        <button class="edit-btn">保存昵称</button>
    </div>
</template>
<script>
export default {
  data () {
    return {
      name: '顾芊'
    }
  },
  created () {
    document.title = '设置昵称'
  }
}
</script>
<style scoped>
    .name-warpper {
        width: 670px;
        margin-left: 40px;
        height: 80px;
        position: relative;
        border-bottom: 2px solid #e9e9e9;
    }
    .name-warpper>input {
        width: 630px;
        height: 80px;
        /* padding-right: 30px; */
        font-size: 30px;
        border-radius: 10px;
    }
    .name-warpper>img {
        position: absolute;
        width: 30px;
        height: 30px;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }
    .edit-btn {
        width: 670px;
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        bottom: 40px;
        background-color: #f6b243;
        font-size: 35px;
        color: white;
        height: 90px;
        line-height: 90px;
        border-radius: 20px;
    }
</style>
