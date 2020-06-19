<template>
    <div>
        <div v-if="loading">
            Loading...
        </div>
        <div v-if="error">
            {{ error }}
        </div>
        <div v-if="user" class="user">
            <div>
                <div class="documentTop">
                    <div class="userName"> {{ user.ogName }} </div>
                </div>
                <div v-for="item in toast" v-bind:key="item">
                    <toast :class="item.class" :send-data="item" v-bind:ogName="user.ogName"></toast>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import toast from './toast';
import axios from 'axios';

export default {
    components: {
        'toast' : toast,
    },
    data() {
        return {
            loading : false,
            user: null,
            error: null,
            toast: null,
        }
    },
    created() {
        this.getUserData()
    },
    watch: {
        '$route': 'getUserData'
    },
    methods: {
        getUserData () {
            this.error = this.post = null;
            this.loading = true;
            axios.get(`http://localhost:15000/user/${this.$route.params.ogName}`)
            .then(async ({ data }) => {
                const toastList = [];
                for(const item of data.etc) {
                    const toasts = await axios.get(`http://localhost:15000/toast/${item}`);
                    toastList.push(toasts.data);
                }
                this.loading = false;
                this.toast = toastList;
                this.user = data;
            })
            .catch(err => {
                this.loading = false;
                this.error = err.toString();
            });

        }
    }
}
</script>

<style>
.user {
    width: 70%;
    margin:0 auto;
}

.documentTop {
    text-align: left;
}

.documentTop .userName {
    font-size: 2em;
    font-family: 'Noto Sans KR', sans-serif;
}

</style>
