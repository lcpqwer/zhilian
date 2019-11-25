<template>
    <div class="body">
        <div class="user-img">
            <img src="../assets/img/user/userimg.png" alt="">
            <div class="user-inte">积分：960</div>
            <div class="user-eval">
                <img src="../assets/img/home/point.png" alt="">
                <img src="../assets/img/home/point.png" alt="">
                <img src="../assets/img/home/point.png" alt="">
                <img src="../assets/img/home/point.png" alt="">
                <img src="../assets/img/home/point.png" alt="">
            </div>
        </div>
        <div class="user-top">
            <img @click="userClick(0)" src="../assets/img/login/userhead.png" alt="">
            <div>顾芊</div>
        </div>
        <div class="user-main">
            <div @click="userClick(1)" class="user-item">
                <div>我的库存</div>
                <img src="../assets/img/user/route.png" alt="">
            </div>
            <div @click="userClick(2)" class="user-item">
                <div>我的订单</div>
                <img src="../assets/img/user/route.png" alt="">
            </div>
            <div @click="userClick(3)" class="user-item">
                <div>我的历史发布</div>
                <img src="../assets/img/user/route.png" alt="">
            </div>
            <div @click="userClick(4)" class="user-item">
                <div>我的商机</div>
                <img src="../assets/img/user/route.png" alt="">
            </div>
            <div @click="userClick(5)" class="user-item">
                <div>我的地址</div>
                <img src="../assets/img/user/route.png" alt="">
            </div>
        </div>
        <Bottom/>
    </div>
</template>
<script>
import Bottom from '../components/tohome1'
export default {
  created () {
    document.title = '个人信息'
  },
  components: {
    Bottom
  },
  methods: {
    userClick (index) {
      switch (index) {
        case 0:
          this.$router.push({path: '/MyInfo'})
          break
        case 1:
          this.$router.push({path: '/MyInventory'})
          break
        case 2:
          this.$router.push({path: '/OrderList'})
          break
        case 3:
          this.$router.push({path: '/MyUpload'})
          break
        case 4:
          this.$router.push({path: '/Business'})
          break
        case 5:
          this.$router.push({path: '/MyAddress'})
          break
      }
    }
  }
}
</script>
<style>
    .user-img {
        width: 750px;
        height: 300px;
        position: relative;
    }
    .user-img>img {
        width: 100%;
        height: 100%;
    }
    .user-inte, .user-eval {
        position: absolute;
        bottom: 13px;
        font-size: 25px;
        color: #ffffff
    }
    .user-inte {
        left: 40px;
    }
    .user-eval {
        right: 40px;
        display: flex;
        flex-direction: row;
    }
    .user-eval>img {
        width: 25px;
        height: 25px;
    }
    .user-eval>img {
        margin-left: 12px;
    }
    .user-top {
        width: 670px;
        height: 170px;
        padding: 0 40px;
        position: relative;
        border-bottom: 2px solid #e9e9e9;
    }
    .user-top>img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        border: 5px solid #ffffff;
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%,-50%)
    }
    .user-top>div {
        position: absolute;
        bottom: 50px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 30px;
    }
    .user-main {
        width: 670px;
        padding: 0 40px;
    }
    .user-item {
        width: 100%;
        height: 90px;
        border-bottom: 2px solid #e9e9e9;
        position: relative;
    }
    .user-item>* {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 30px;
    }
    .user-item>img {
        height: 30px;
        width: 20px;
        right: 0;
    }
</style>
