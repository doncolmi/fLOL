<template>
    <div>
        <h1>그룹 이름 작성</h1>
        <p>
            그룹 이름은 중복이 상관 없으며, 2~30자 이내로 작성해주셔야 합니다.
        </p>
        <input @blur="valiOnInput" type="text" id="name" maxlength="30" autocomplete="off">
        <div class="error">{{ this.error }}</div>
        <div @click="valiOnBtn" :class="this.class">다음</div>
    </div>
</template>

<script>
import Swal from 'sweetalert2';
    export default {
        data() {
            return {
                error : "그룹 이름을 입력해주세요",
                class : "addContainer addBtn disabled",
            }
        },
        methods: {
            valiOnInput() {
                const name = document.getElementById("name");
                const nameValue = name.value;
                if((nameValue.length > 0 && nameValue.length < 2) || nameValue.length > 30) {
                    this.error = '그룹 이름은 2자 이상 30자 이하여야 합니다.'
                    this.class = 'addContainer addBtn disabled';
                } else if(nameValue.length === 0) {
                    this.error = '그룹 이름을 입력해주세요'
                    this.class = 'addContainer addBtn disabled';
                }
                else {
                    name.style.borderBottom = '1.2px solid skyblue';
                    this.error = "다음 버튼을 눌러주세요";
                    this.class = 'addContainer addBtn active';
                }
            },
            valiOnBtn() {
                const nameValue = document.getElementById("name").value;
                if(nameValue.length > 1 && nameValue.length < 31) {
                    this.$parent.name = nameValue;
                    this.$parent.saveName();
                }
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
        width:100%;
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
    .addContainer {
        width:3rem;
        height:40px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2em;
        margin: 0 auto;
    }
    .addBtn {
        transition: .3s;
        color: white;
        margin-top: 3em;
        padding: 0% 10%;
    }
    .active {
        background: #EF9A9A;
        cursor: pointer;
    }
    .disabled {
        background: gray;
        cursor: default;    
    }
</style>