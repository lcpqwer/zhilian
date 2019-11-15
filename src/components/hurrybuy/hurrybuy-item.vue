<template>
  <div v-if="hurryInfo.user == '2'" class="message-warpper">
    <img class="me-img" src="../../assets/img/login/userhead.png" model="widthFix" alt />
    <div class="me-text">
      <div>
        <div class="me-angle"></div>
        <div class="met-item">型号：{{hurryInfo.model}}</div>
        <div class="met-item">数量：{{hurryInfo.num}}</div>
        <div class="met-item me-time">时间：{{hurryInfo.time}}</div>
        <button v-if="hurryInfo.type == '1'" class="me-sub xun">询价</button>
        <button v-else class="me-sub shi">实单</button>
      </div>
    </div>
  </div>
  <div v-else class="message-warpper">
    <img class="mer-img" src="../../assets/img/login/userhead.png" model="widthFix" alt />
    <div class="mer-text">
      <div>
        <div class="mer-angle"></div>
        <div class="mer-item">型号：{{hurryInfo.model}}</div>
        <div class="mer-item">数量：{{hurryInfo.num}}</div>
        <div class="mer-item me-time">时间：{{hurryInfo.time}}</div>
        <button v-if="hurryInfo.type == '1'" class="mer-sub xun">询价</button>
        <button v-else class="mer-sub shi">实单</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    hurryInfo: Object
  },
  data() {
    return {};
  }
};
</script>
<style>
.message-warpper {
  width: 100%;
  position: relative;
  margin-top: 20px;
  height: 200px;
}
/* 左边 */
.me-img {
  width: 84px;
  position: absolute;
  top: 0;
  left: 40px;
}
.me-angle {
  margin-left: 10px;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-right: 20px solid white;
  border-bottom: 15px solid transparent;
  position: absolute;
  top: 10px;
  /* left: 130px; */
  left: -30px;
}
.me-text {
  width: 470px;
  height: 180px;
  background-color: #ffffff;
  position: absolute;
  top: 20px;
  margin-left: 160px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 15px #f5f5f5;
}
.me-text > div {
  width: 100%;
  height: 100%;
  position: relative;
  /* display: flex;
        flex-direction: column; */
}
.me-time {
  color: #c0c0c0;
  font-size: 20px !important;
}
.met-item {
  width: 450px;
  height: 60px;
  line-height: 60px;
  font-size: 30px;
  margin-left: 20px;
}
.me-sub {
  width: 124px;
  height: 64px;

  border-radius: 15px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 20px;
  line-height: 64px;
  font-size: 35px;
  color: #ffffff;
  /* letter-spacing: 6px; */
  text-align: center;
}
/* 右边 */
.mer-img {
  width: 84px;
  position: absolute;
  top: 0;
  right: 40px;
}
.mer-angle {
  margin-left: 10px;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-left: 20px solid white;
  border-bottom: 15px solid transparent;
  position: absolute;
  top: 10px;
  /* left: 130px; */
  right: -20px;
}
.mer-text {
  width: 470px;
  height: 180px;
  background-color: #ffffff;
  position: absolute;
  top: 20px;
  right: 160px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 15px #f5f5f5;
}
.mer-text > div {
  width: 100%;
  height: 100%;
  position: relative;
  /* display: flex;
        flex-direction: column; */
}
.mer-item {
  width: 450px;
  height: 60px;
  line-height: 60px;
  text-indent: 20px;
  font-size: 30px;
  text-align: right;
}
.mer-sub {
  width: 124px;
  height: 64px;
  border-radius: 15px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 20px;
  line-height: 64px;
  font-size: 35px;
  color: #ffffff;
  /* letter-spacing: 6px; */
  text-align: center;
}

.xun {
  background-color: #f6b243;
}
.shi {
  background-color: #f17f3a;
}
</style>