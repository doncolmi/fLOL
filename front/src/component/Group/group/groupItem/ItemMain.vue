<template>
  <transition name="component-fade" mode="out-in">
    <component v-bind:is="view"></component>
  </transition>
</template>

<script>
    import axios from 'axios';
    import Swal from 'sweetalert2';

    import Home from './Home';
    import NotFound from './404';
    import Notice from './homeItem/Notice';
    import Password from './homeItem/Password';
    export default {
        data() {
            return {
                group: null,
                code: null,
                view: null,
                token: null,
            };
        },
        components: {
            Home : Home,
            NotFound : NotFound,
            Notice : Notice,
            Password : Password,
        },
        async created() {
            this.getGroupInfo();
        },
        methods : {
            checkPassword(password) {
                const auth = {
                    code : this.code,
                    password : password
                };

                axios.post(`${VUE_APP_LOCAL_URI}/g/auth`, auth)
                .then(({data}) => {
                    if(data.success) {
                        this.view = Home;
                        this.$store.state.authGroupCode = data.code;
                    } else {
                        Swal.fire({
                            icon: "error",
                            text: "비밀번호가 일치 하지 않습니다."
                        });
                    }  
                });
            },
            getGroupInfo() {
                this.code = null;
                this.code = this.$route.params.code;
                this.group = null;

                axios.get(`${VUE_APP_LOCAL_URI}/g/${this.code}`)
                .then(({data}) => {
                    if(data) {
                        this.group = data;
                        if(data.open || this.$store.state.authGroupCode === this.code) {
                            this.view = Home;
                        } else {
                            this.view = Password;
                        }
                        return;
                    }
                    this.view = NotFound;
                });
            },
            go(num) {
                if(num === 0) { this.view = Notice; }
            }
        }
    }
</script>

<style scoped>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
</style>