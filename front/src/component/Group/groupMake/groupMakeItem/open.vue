<template>
    <div style="width:100%;">
        <h1>그룹 공개 여부 설정</h1>
        <div class="btnWrapper">
            <div @click="checkOpen" :class="this.open">
                공개 그룹<br>
                <a>코드를 통해 누구나 열람 할 수 있습니다.</a>
            </div>
            <div @click="checkClose" :class="this.close">
                비공개 그룹<br>
                <a>비밀번호를 통하여 열람 할 수 있습니다.</a>
            </div>
        </div>
        <transition name="fade">
            <div v-if="!isOpen">
                <input @blur="valiOnInput" type="password" id="pw" maxlength="20" autocomplete="off">
                <div class="error">{{ this.error }}</div>
            </div>
        </transition>
        <div class="addBox">
            <div @click="back(0)" class="addContainer addBtn active">이전</div>
            <div @click="valiOnBtn" :class="this.class">다음</div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
    export default {
        data() {
            return {
                isOpen : true,
                open : "btn select",
                close : "btn",
                class : "addContainer addBtn active",
                error : "비밀번호는 6~20자 이내여야 합니다.",
            }
        },
        methods: {
            checkOpen() {
                this.isOpen = true;
                this.class = 'addContainer addBtn active';
                this.open = "btn select";
                this.close = "btn";
            },
            checkClose() {
                this.isOpen = false;
                this.class = 'addContainer addBtn disabled'
                this.open = "btn";
                this.close = "btn select";
            },
            valiOnInput() {
                const pw = document.getElementById("pw");
                const pwValue = pw.value;
                if((pwValue.length > 0 && pwValue.length < 6) || pwValue.length > 20) {
                    this.error = '비밀번호는 6자 이상 20자 이하여야 합니다.'
                    this.class = 'addContainer addBtn disabled';
                } else if(pwValue.length === 0) {
                    this.error = '비밀번호를 입력해주세요'
                    this.class = 'addContainer addBtn disabled';
                }
                else {
                    pw.style.borderBottom = '1.2px solid skyblue';
                    this.error = "다음 버튼을 눌러주세요";
                    this.class = 'addContainer addBtn active';
                }
            },
            valiOnBtn() {
                const parent = this.$parent;
                if(!this.isOpen) {
                    const pwValue = document.getElementById("pw").value;
                    if(pwValue.length > 5 && pwValue.length < 21) {
                        parent.password = pwValue;
                    }
                }
                parent.open = this.isOpen;
                parent.saveOpenAndPassword();
            },
            back(page) {
                this.$parent.back(page);
            }
        },
    }
</script>

<style scoped>
    div {
        text-align: center;
    }
    p {
        font-size: 0.9em;
        color:rgba(0,0,0,0.5);
    }
    input {
        margin-top:3em;
        width:30%;
        font-size: 1.3em;
        border: 0px;
        border-bottom: 1px solid lightgray;
        height:50px;
        text-align: center;
        font-weight: bold;
        transition:1s;
    }
    .input:focus {
        border: 0px;
        border-bottom: 2px solid lightgray;
    }
    .error {
        width:100%;
        text-align: center;
        color:gray;
        font-size:0.8em;
        margin-top:0.3em;
    }
    .addBox{
        display:flex;
        justify-content: center;
        align-items: center;
    }
    .addBox div:first-child {
        margin-right:1em;
    }
    .addContainer {
        width: 5%;
        height:40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2em;
    }
    .addBtn {
        transition: .3s;
        color: white;
        margin-top: 3em;
    }
    .active {
        background: #EF9A9A;
        cursor: pointer;
    }
    .disabled {
        background: gray;
        cursor: default;    
    }


    .wrappers {
        width:100%;
    }

    .btn {
        width:50%;
        background-color: rgba(0,0,0,0.1);
        padding: 8% 0%;
        transition: .3s;
        cursor: pointer;
        opacity: 0.3;
    }
    .btn:first-child {
        border-right: 1px solid lightgray;
    }

    .btnWrapper {
        width:30%;
        display: flex;
        margin:0 auto;
        border: 1px solid lightgray;
        font-size:1.3em;
        font-weight: bold;
    }
    .btnWrapper a{
        font-weight: normal;
        font-size:0.6em;
        color: gray;
    }
    .select {
        background-color: white;
        cursor: default;
        opacity: 1;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>