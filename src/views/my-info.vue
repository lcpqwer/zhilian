<template>
    <div class="myinfo">
        <input @change="upImg" style="display: none" id="upload" type="file" accept="image/*" class="abc">
        <div class="info-item item-one">
            <div class="info-left">头像</div>
            <img class="info-center head" src="../assets/img/login/userhead.png" alt="">
            <img class="info-right" src="../assets/img/user/route.png" alt="">
        </div>
        <div class="info-item"  @click="changePage(1)">
            <div class="info-left">昵称</div>
            <div class="info-center">顾芊</div>
            <img class="info-right" src="../assets/img/user/route.png" alt="">
        </div>
        <div class="info-item">
            <div class="info-left">账号</div>
            <div class="account">121342423</div>
        </div>
        <div class="info-item" @click="changePage(2)">
            <div class="info-left">绑定的手机号</div>
            <div class="info-center">18936391637</div>
            <img class="info-right" src="../assets/img/user/route.png" alt="">
        </div>
        <div class="info-item">
            <div class="info-left">绑定的微信号</div>
            <div class="info-center">343dsds</div>
            <img class="info-right" src="../assets/img/user/route.png" alt="">
        </div>
        <div class="info-item">
            <div class="info-left">公司</div>
            <div class="info-center">联置科技</div>
            <img class="info-right" src="../assets/img/user/route.png" alt="">
        </div>
    </div>
</template>
<script>
import Cropper from 'cropperjs'
export default {
  data () {
    return {
      avatar: ''
    }
  },
  created () {
    document.title = '个人信息'
  },
  methods: {
    changePage (index) {
      switch (index) {
        case 1:
          this.$router.push({path: '/UpdateName'})
          break
        case 2:
          this.$router.push({path: '/ChangePhone'})
          break
        case 3:
          document.getElementById('upload').click()
          break
      }
    },
    upImg (event) {
      console.log(event)
      let self = this
      let file = event.target.files[0]
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function (e) {
        self.avatar = this.result
      }
    }
  }
}
</script>
<style scoped>
    .myinfo {
        width: 670px;
        padding: 0 40px;
    }
    .info-item {
        width: 100%;
        height: 80px;
        position: relative;
        border-bottom: 2px solid #e9e9e9
    }
    .item-one {
        height: 120px !important;
    }
    .info-left, .info-center, .info-right, .account {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        font-size: 30px;
    }
    .info-right {
        width: 20px;
        height: 30px;
        right: 0
    }
    .info-center {
        right: 40px;
    }
    .head {
        width: 80px;
        height: 80px;
    }
    .account {
        right: 0;
    }
</style>
