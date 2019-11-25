<template>
    <div>
        <div class="time">上午 11:00</div>
        <!-- <div style="position: relative;display: inline-block;width:100%">
            <img class="img right" src="../../assets/img/login/userhead.png" alt="">
            <div class="mt"></div>
            <div class="conrtent-warpper">
                <div class="c-content">
                    123133124144141242421412323222141241241421412412414144141241414
                    <div class="c-angle"></div>
                </div>
            </div>
        </div> -->
        <div style="position: relative;display: inline-block;width:100%">
            <img class="img-l" src="../../assets/img/login/userhead.png" alt="">
            <div class="mt"></div>
            <div class="conrtent-warpper-l">
                <div class="c-content-l">
                    123133124144141242421412323222141241241421412412414144141241414
                    <div class="c-angle-l"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
/* 右边 */
    .time {
        margin-top: 20px;
        height: 40px;
        line-height: 40px;
        padding: 0 10px;
        border-radius: 20px;
        background-color: rgba(130, 130, 148, 0.2);
        margin-left: 50%;
        transform: translateX(-50%);
        /* width: 0; */
        display: inline-block
    }
    .mt {
        height: 20px;
    }
    .conrtent-warpper {
        float: right;
    }
    .img {
        width: 85px;
        height: 85px;
        /* margin-left: 625px; */
        position: absolute;
        right: 40px;
    }
    .c-content {
        max-width: 420px;
        padding: 25px;
        background-color: #f6b243;
        word-wrap:break-word;
        line-height: 50px;
        font-size: 35px;
        border-radius: 20px;
        position: relative;
        margin-right: 150px;
    }
    .c-angle {
        margin-left: 10px;
        width: 0;
        height: 0;
        border-top: 8px solid transparent;
        border-left: 20px solid #f6b243;
        border-bottom: 15px solid transparent;
        position: absolute;
        top: 20px;
        /* left: 130px; */
        right: -20px;
    }
/* 左边 */
.conrtent-warpper-l {
        float: left;
    }
    .img-l {
        width: 85px;
        height: 85px;
        /* margin-left: 625px; */
        position: absolute;
        left: 40px;
    }
    .c-content-l {
        max-width: 420px;
        padding: 25px;
        background-color: #f6b243;
        word-wrap:break-word;
        line-height: 50px;
        font-size: 35px;
        border-radius: 20px;
        position: relative;
        margin-left: 150px;
    }
    .c-angle-l {
        margin-left: 10px;
        width: 0;
        height: 0;
        border-top: 8px solid transparent;
        border-right: 20px solid #f6b243;
        border-bottom: 15px solid transparent;
        position: absolute;
        top: 20px;
        /* left: 130px; */
        left: -30px;
    }
</style>
