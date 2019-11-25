<template>
    <div class="body">
        <div class="in-input-warpper first"> 
            <div class="title">型号<span>*</span></div>
            <input type="text" class="input" placeholder="请输入产品型号">
        </div>
        <div class="in-input-warpper"> 
            <div class="title">数量<span>*</span></div>
            <input type="text" class="input" placeholder="请输入产品数量">
        </div>
        <div class="in-input-warpper"> 
            <div class="title">价格</div>
            <input type="text" class="input" placeholder="请输入产品未税单价">
        </div>
        <div class="in-input-warpper"> 
            <div class="title">货期<span>*</span></div>
            <input type="text" class="input" placeholder="请输入货期">
        </div>
        <div class="in-input-warpper"> 
            <div class="title">是否持续备货</div>
            <button class="stock">是</button>
            <button class="no-stock">否</button>
        </div>
        <button class="in-sub xun">提交</button>
        <div class="in-tip">带“*”选项为必填项</div>
        <div class="batch">
            <button class="ba-left">批量上传</button>
            <button class="ba-right">下载批量模板</button>
        </div>
        <Bottom/>
    </div>   
</template>
<script>
import Bottom from '../components/tohome1'
export default {
    created(){
        document.title = '发布库存'
    },
    components: {
        Bottom
    }
}
</script>
<style>
    .in-input-warpper {
        width: 100%;
        height: 104px;
        position: relative;
    }
    .first {
        margin-top: 30px;
    }
    .in-input-warpper>.title,.in-input-warpper>.input {
        position: absolute;
        top: 50%;
        transform: translateY(-50%)
    }
    .in-input-warpper>.title{
        left: 40px;
        font-size: 30px;
    }
    .in-input-warpper span {
        color: red
    }
    .in-input-warpper>.input {
        right: 40px;
        height: 80px;
        width: 570px;
        background-color: #74747445;
        font-size: 25px;
        border-radius: 10px;
        text-indent: 20px;
    }
    .stock, .no-stock {
        height: 80px;
        width: 200px;
        position: absolute;
        font-size: 30px;
        line-height: 80px;
        text-align: center;
        background-color: #74747445;
        border-radius: 10px;
    }
    .stock {
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%)
    }
    .no-stock {
        top: 50%;
        transform: translateY(-50%);
        right: 40px;
    }
    .in-sub {
        width: 670px;
        height: 80px;
        line-height: 80px;
        text-align: center;
        background-color: #f6b243;
        margin-left: 40px;
        margin-top: 70px;
        border-radius: 10px;
        color: white;
        font-size: 35px;
    }
    .in-tip {
        width: 100%;
        height: 75px;
        line-height: 75px;
        text-align: center;
        color: red;

    }
    .batch {
        width: 100%;
        position: relative;
        
    }
    .ba-left, .ba-right {
        font-size: 30px;
        text-align: center;
        line-height: 80px;
        height: 80px;
        border-radius: 10px;
        position: absolute;
        margin-top: 125px;
        margin-bottom: 50px;
    }
    .ba-left {
        width: 208px;
        background-color: #ffffff;
        border: 2px solid #74747445;
        left: 40px;
    }
    .ba-right {
        width: 273px;
        background-color: #f17f3a;
        right: 40px;
    }
</style>