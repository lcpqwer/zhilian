<template>
    <div class="body">
        <div class="input-warpper">
            <div class="i-item">
                <div class="title">联系人</div>
                <input class="input" v-model="name" placeholder="请输入姓名" type="text">
            </div>
            <div class="i-item imt">
                <div class="title">联系电话</div>
                <input class="input" v-model="phone" @input="checkPhone" placeholder="请输入手机号" type="tel" maxlength="11">
            </div>
            <div class="i-item imt">
                <div class="title">城市/区域</div>
                <input class="input" v-model="area" placeholder="请选择城市" disabled type="text">
            </div>
            <div class="i-item imt">
                <div class="title">详细地址</div>
                <input class="input" v-model="address" placeholder="请输入详细地址" type="text">
            </div>
        </div>
        <button class="edit-btn">保存地址</button>
        <Bottom/>
    </div>
</template>
<script>
import Bottom from '../components/tohome1'
export default {
  data () {
    return {
      name: '',
      phone: '',
      area: '',
      address: ''
    }
  },
  created () {
    document.title = '编辑地址'
  },
  components: {
    Bottom
  },
  methods: {
    checkPhone () {

    }
  }
}
</script>
<style scoped>
    .imt {
        margin-top: 20px;
    }
    .input-warpper {
        width: 670px;
        padding-left: 40px;
        padding-top: 20px;
    }
    .i-item {
        width: 100%;
        height: 80px;
        display: flex;
        flex-direction: row;
    }
    .title {
        width: 150px;
        height: 100%;
        line-height: 80px;
        font-size: 30px;
    }
    .i-item>input {
        width: 500px;
        height: 100%;
        border-bottom: 1px solid #e9e9e9;
        font-size: 35px;
        background-color: #fff;
        padding-left: 20px;
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
    input::-webkit-input-placeholder{
        font-size: 25px;
    }
    .in-home {
        bottom: 180px !important;
    }
</style>
