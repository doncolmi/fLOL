<template>
    <div class="textarea">
        <textarea rows="10" v-model="text" placeholder="10자 이상의 내용을 적어주세요."></textarea>
        <button @click="save" v-bind:disabled="this.text.length < 10">작성</button>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
    export default {
        data() {
            return {
                text : "",
            }
        },
        methods: {
            save() {
                const item = {
                    code: this.$route.params.code,
                    content : this.text
                }
                axios.post(`${VUE_APP_LOCAL_URI}/g/notice`, item)
                .then(res => {
                    Swal.fire({
                        icon: "success",
                        text: "게시글이 작성되었습니다."
                    });
                    this.text = "";
                })
                .catch(err => {
                    Swal.fire({
                        icon: "error",
                        text: "게시글 작성 오류 입니다."
                    });
                })
            },
        }
    }
</script>

<style scoped>
.textarea {
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 5px 0px #FFCDD2;
    margin-bottom:2em;
}
.textarea button {
    width:100%;
    border: 0px;
    background: #FFCDD2;
    padding: 0.7em 0em;
    font-size: 0.9em;
    cursor:pointer;
}
.textarea button:disabled {
    background: gray;
    color:white;
    cursor: default;
}
textarea {
    width:100%;
    resize: none;
    border: 0px;
    padding:1em;
    box-sizing: border-box;
}
textarea:focus {
    outline: none;
}

</style>