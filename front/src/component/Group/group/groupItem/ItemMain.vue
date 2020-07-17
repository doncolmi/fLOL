<template>
  <transition name="component-fade" mode="out-in">
    <component v-bind:is="view"></component>
  </transition>
</template>

<script>
    import axios from 'axios';

    import Home from './Home';
    import NotFound from './404';
    export default {
        data() {
            return {
                group: null,
                code: null,
                view: null,
            };
        },
        components: {
            Home : Home,
            NotFound : NotFound,
        },
        async created() {
            this.getGroupInfo();
        },
        methods : {
            getGroupInfo() {
                this.code = this.$route.params.code;
                this.group = null;

                axios.get(`${VUE_APP_LOCAL_URI}/g/${this.code}`)
                .then(({data}) => {
                    if(data) {
                        this.group = data;
                        this.view = Home;
                        return;
                    }
                    this.view = NotFound;
                });
            },
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