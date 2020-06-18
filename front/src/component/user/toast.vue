<template>
<transition name="fade">
    <div class="toastBg" v-if="show">
            <div class="toast">
                <div class="topToast">
                    <span class="closeBtn" @click="show = !show">
                        <i class="fas fa-times" aria-hidden="true"></i>
                    </span> 
                </div>
                <div class="toastBridge"></div>
                <div class="toastContents" :style="style">
                    <div class="toastTitle"><a class="caution">{{ this.sendData.title }}</a></div>
                    <div class="toastContent">
                        {{ this.sendData.content.replace('[name]', this.ogName) }}
                    </div>
                </div>
            </div>
    </div>  
    </transition>
</template>
<script>
export default {
    props: ['sendData', 'ogName'],
    created() {
    },
    data : function() {
        return {
            show : true,
            style : `background-image:url('../../src${this.sendData.img}'); background-repeat:no-repeat; background-position: 97% 65%; background-size: 9%`
        }
    },
    methods: {
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@500&display=swap');

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.toastBg {
    width:100%;
    margin-bottom:0.5%;
}
.toast {
    width:70%;
    margin:0 auto;
}
.topToast{
    text-align: right;
    padding:0% 1%;
    border-radius: 20px 20px 0 0;
}
.redToast .topToast {
    background-color:#eb3b5a;
}
.blueToast .topToast {
    background-color:#45aaf2;
}
.greenToast .topToast {
    background-color:#27ae60;
}
.blackToast .topToast {
    background-color:#000000;
}

.closeBtn {
    color:white;
    font-size:1.5em;
    cursor:pointer;
}
.closeBtn:hover {
    color:lightgray;
    transition:0.5s;
}

.toastBridge {
    height:5px;
}
.redToast .toastBridge {
    border-left: 2px solid #eb3b5a;
    border-right: 2px solid #eb3b5a;
}
.blueToast .toastBridge {
    border-left: 2px solid #45aaf2;
    border-right: 2px solid #45aaf2;
}
.greenToast .toastBridge {
    border-left: 2px solid #27ae60;
    border-right: 2px solid #27ae60;
}
.blackToast .toastBridge {
    border-left: 2px solid #000000;
    border-right: 2px solid #000000;
}

.toastContents{
    padding: 0.5% 1% 2% 1%;
    border-radius: 0px 0px 20px 20px;
    font-family: 'Noto Sans KR', sans-serif;
    background-image:url(`../../src${this.sendData.img}`); 
    background-repeat:no-repeat; 
    background-position: 97% 65%;
     background-size: 9%;
}

.redToast .toastContents{
    border: 2px solid #eb3b5a;
    border-top: 0;
}
.blueToast .toastContents{
    border: 2px solid #45aaf2;
    border-top: 0;
}
.greenToast .toastContents{
    border: 2px solid #27ae60;
    border-top: 0;
}
.blackToast .toastContents{
    border: 2px solid #000000;
    border-top: 0;
}

.toastTitle {
    font-family: 'Black Han Sans';
    font-size:2.5em;
    text-align:center;
    margin-bottom:1%;
}

.toastContent{
    font-size:1.1em;
}
</style>
