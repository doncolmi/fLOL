<template>
    <div style="width:100%;">
        <h1>그룹 관리 비밀번호 설정</h1>
        <p>
            관리 비밀번호는 그룹 내 유저 추가/삭제 및 기타 관리에 사용됩니다.
        </p>
        <input @blur="valiOnInput" type="password" id="pw" maxlength="20" autocomplete="off">
        <div class="error">{{ this.error }}</div>
        <div class="addBox">
            <div @click="back(1)" class="addContainer addBtn active">이전</div>
            <div @click="valiOnBtn" :class="this.class">다음</div>
        </div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
    export default {
        data() {
            return {
                class : "addContainer addBtn disabled",
                error : "비밀번호는 6~20자 이내여야 합니다.",
            }
        },
        methods: {
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
                const pwValue = document.getElementById("pw").value;
                if(pwValue.length > 5 && pwValue.length < 21) {
                    this.$parent.adminPassword = pwValue;
                }
                this.$parent.saveAdminPassword();
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

    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>