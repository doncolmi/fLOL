<template>
    <div class="wrapper">
        <div class="title">관리 비밀번호 입력</div>
        <div class="exp">관리 모드에 들어가려면 그룹 만들기 당시의 비밀번호가 필요합니다.</div>
        <input type="password" v-model="password" class="password">
        <div>
            <button @click="go()" class="btn">이전</button>
            <button @click="checkPassword()" v-bind:disabled="this.password.length < 6" class="btn">완료</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import AdminHome from './adminHome/adminHome';
    import Swal from 'sweetalert2';

    export default {
        data() {
            return {
                password : "",
            }
        },
        components: {
            AdminHome : AdminHome,
        },
        methods : {
            go() {
                this.$parent.go(-1);
            },
            checkPassword() {
                const auth = {
                    code : this.$parent.code,
                    password : this.password
                };

                axios.post(`${VUE_APP_LOCAL_URI}/g/admin`, auth)
                .then(({data}) => {
                    this.$parent.view = AdminHome;
                    axios.defaults.headers.common['Authorization'] = `Bearer ${data}`;
                })
                .catch((err) => {
                    console.log(err);
                    Swal.fire({
                        icon: "error",
                        text: "비밀번호가 일치 하지 않습니다."
                    });
                });
            },
        }
    }
</script>

<style scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .title {
        font-size : 3em;
        font-weight: bold;
    }
    .exp {
        font-size: 0.9em;
        color:rgba(0,0,0,0.6);
        margin-bottom:2em;
    }
    .password {
        border: 1px solid rgba(0,0,0,0.1);
        box-shadow: 0px 0px 5px 0px lightgray;
        border-radius: 1em;
        padding: 0.5em 1em;
        font-size:1.3em;
        margin-bottom: 0.4em;
    }
    .password:focus {
        outline: none;
    }
    .btn {
        color:white;
        border: 0px;
        background-color: #EF9A9A;
        border-radius: 1em;
        padding: 0.5em 1.5em;
        cursor:pointer;
    }
    .btn:focus{
        outline: none;
    }
    .btn:disabled {
        background-color: gray;
        cursor: default;
    }
</style>