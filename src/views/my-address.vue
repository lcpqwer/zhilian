<template>
    <div class="body">
        <div class="address-warpper">
            <div>
                <div class="are-left">
                    <div class="user-info">顾芊 <span>13450954230</span> </div>
                    <div class="address">上海市浦东新区粗冲之路展讯中心</div>
                </div>
                <div @click="toEdit" class="are-right">
                    编辑
                </div>
            </div>
        </div>
        <button @click="toEdit" class="edit-btn">编辑地址</button>
        <Bottom/>
    </div>    
</template>
<script>
import Bottom from '../components/tohome2'
export default {
    created(){
        document.title = '地址管理'
    },
    components: {
        Bottom
    },
    methods: {
        toEdit() {
            this.$router.push({
                path: '/EditAddress'
            })
        }
    }
}
</script>
<style scoped>
    .address-warpper {
        width: 670px;
        padding-left: 40px;
        padding-right: 40px;
        padding-top: 40px;
    }
    .address-warpper>div {
        width: 100%;
        height: 190px;
        border-radius: 20px;
        background-color: #fff;
        box-shadow: 0 0 10px 10px #f5f5f5;
        display: flex;
        flex-direction: row;
    }
    .are-left {
        width: 556px;
        height: 130px;
        margin-left: 20px;
        margin-top: 30px;
        border-right: 1px solid #e9e9e9;
    }
    .are-left>div {
        width: 100%;
        height: 65px;
        line-height: 65px;
        font-size: 30px;
    }
    .address {
        font-size: 33px;
    }
    .are-right {
        width: 103px;
        height: 100%;
        line-height: 190px;
        text-align: center;
        font-size: 30px;
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
    .in-home {
        bottom: 180px !important;
    }
</style>