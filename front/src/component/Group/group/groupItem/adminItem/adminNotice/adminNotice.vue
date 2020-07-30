<template>
    <div class="wrapper">
        <div class="top">
            <Top />
        </div>
        <h1>공지사항 관리</h1>
        <div class="textarea">
            <textarea rows="10" v-model="text" placeholder="10자 이상의 내용을 적어주세요."></textarea>
            <button @click="test" v-bind:disabled="this.text.length < 10">작성</button>
        </div>
        
    </div>
</template>

<script>
    import Top from '../adminHome/adminHomeTop';
    import axios from 'axios';
    export default {
        components : {
            Top: Top,
        },
        data() {
            return {
                text : "",
            }
        },
        methods: {
            test() {
                const item = {
                    code: this.$route.params.code,
                    content : this.text
                }
                axios.post(`${VUE_APP_LOCAL_URI}/g/notice`, item)
                .then(({data}) => console.log("성공"))
                .catch(err => console.log(err))
            },
            // todo : 여기서 부터 이제 글 목록 보여주는걸 작성합니다.
        }
    }
</script>

<style scoped>
.textarea {
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 0px 5px 0px #FFCDD2;
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

.wrapper {
    width:30%;
}
.top {
    width: 100%;
}
</style>