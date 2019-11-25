<template>
    <div class="body">
        <!-- <div class="fix">
            <div></div>
            <div class="c-top">
                <div class="ct-item">
                    型号: 98575-1010
                </div>
                <div class="ct-item">              
                    数量: 800
                </div>
                <div class="ct-item">
                    未税单价: 9.0元
                </div>
                <div class="c-type sd">实单</div>
                <div v-else class="h-type">询价</div>
                <div class="c-time">上午 11:00</div>
            </div>
        </div> -->
        <div ref="messageList" class="c-main">
            <div></div>
            <div class="c-top">
                <div class="ct-item">
                    型号: 98575-1010
                </div>
                <div class="ct-item">              
                    数量: 800
                </div>
                <div class="ct-item">
                    未税单价: 9.0元
                </div>
                <div class="c-type sd">实单</div>
                <!-- <div v-else class="h-type">询价</div> -->
                <div class="c-time">上午 11:00</div>
            </div>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <div :style="mb"></div>
        </div>
        <div ref="sendWarpper" class="send-message">
            <div>
                <div ref="sendText" type="text" @input="inputText" contenteditable="true"></div>
            </div>
        </div>
        <div class="send-btn" @click="sendMessage">
            <div :class="{'sned':text!=''}">发送</div>
        </div>
        <!-- <Bottom/> -->
    </div>
</template>
<script>
import Bottom from '../components/tohome1'
import Message from '../components/chat/Message'
export default {
    data(){
        return {
            text: '',
            mb: ''
        }
    },
    components: {
        Message,
        Bottom
    },
    created(){
        document.title = '98575-1010'
    },
    mounted(){
        console.log(this.$refs.sendWarpper.clientHeight)
        this.mb = 'height: '+(this.$refs.sendWarpper.clientHeight+10)+'px;'
    },
    methods: {
        inputText(){
            console.log(this.$refs.sendText.innerHTML)
            this.text = this.$refs.sendText.innerHTML
            console.log(this.$refs.sendWarpper.clientHeight)
            this.mb = 'height: '+(this.$refs.sendWarpper.clientHeight+10)+'px;'
            this.$refs.messageList.scrollTop = this.$refs.messageList.scrollHeight
             this.$refs.sendText.scrollTop = this.$refs.sendText.scrollHeight
        },
        sendMessage(){
            console.log(this.text)
        }
    }
}
</script>
<style scoped>
.sned {
    color: #000000 !important
}
    .fix {
        position: fixed;
        z-index: 1000;
        background-color: #ffffff;
    }
    .fix>div:first-child {
        height: 25px;
    }
    .c-main {
        width: 100%;
        height: 100%;
        overflow: auto;
    }
    .c-top {
        width: 670px;
        height: 235px;
        margin-left: 40px;
        /* margin-top: 25px; */
        box-shadow: 0px 0px 10px 10px #f5f5f5;
        border-radius: 20px;
        position: relative;
    }
    .ct-item {
        height: 55px;
        line-height: 55px;
        text-indent: 20px;
        font-size: 32px;
    }
    .c-top>.ct-item:first-child {
        padding-top: 35px;
    }
    .c-type {
        position: absolute;
        width: 100px;
        height: 60px;
        top: 60px;
        right: 20px;
        background-color: #f17f3a;
        border-radius: 10px;
        color: #ffffff;
        font-size: 35px;
        text-align: center;
        line-height: 60px;
    }
    .c-time {
        color: #cacaca;
        position: absolute;
        top: 150px;
        right: 20px;
    }
    .c-main {
        /* margin-top: 30px; */
        width: 100%;
        height: 100%;
        overflow: auto
    }
    .c-main>div:first-child {
        height: 20px;
    }
    .send-message{
        width: 100%;
        min-height: 90px;
        position: fixed;
        bottom: 0;
        background: #ffffff;
        display: flex;
        flex-direction: row;
        box-shadow: 0px 0px 10px 10px #f5f5f5;
        display: flex;
        flex-direction: row;
    }
    .send-message>div:first-child{
        padding: 25px 0;
        width: 588px;
    }
    .send-message>div:first-child>div {
        width: 480px;
        min-height: 50px;
        max-height: 300px;
        line-height: 50px;
        padding: 0 25px;
        border-radius: 25px;
        border: 2px solid #989898;
        outline: none;
        margin-left: 55px;
        overflow: auto;
    }
    .send-btn {
        width: 150px;
        height: 100px;
        position: fixed;
        bottom: 0;
        right: 0;
        text-align: center;
        line-height: 100px;
        font-size: 30px;
        color: #989898;
    }
</style>