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
                <div class="toastContents">
                    <div class="toastTitle"><a class="caution">⚠주의⚠</a> 심해냄새가 납니다!</div>
                    <div class="toastContent">
                            이 문서의 주인 {{ $route.params.ogName }}은 아이언, 브론즈에 거주하고있을 확률이 높습니다. 심해냄새에 면역이 없다면 이 문서를 빠르게 나가십시오.
                    </div>
                </div>
            </div>
    </div>  
    </transition>
</template>
<script>
export default {
    created() {
    },
    data : function() {
        return {
            show : true
        }
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

.toastContents{
    padding: 0.5% 1% 2% 1%;
    border-radius: 0px 0px 20px 20px;
    font-family: 'Noto Sans KR', sans-serif;
    background-image:url("../../assets/toast/simhae.png");
    background-repeat: no-repeat;
    background-position: 98% 75%;
    background-size: 10%;
}

.redToast .toastContents{
    border: 2px solid #eb3b5a;
    border-top: 0;
}
.blueToast .toastContents{
    border: 2px solid #45aaf2;
    border-top: 0;
}

.toastTitle {
    font-family: 'Black Han Sans';
    font-size:2.5em;
    text-align:center;
    margin-bottom:1%;
}
.caution {
    font-weight: bold;
}
.toastContent{
    font-size:1.1em;
}
</style>
