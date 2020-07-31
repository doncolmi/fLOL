<template>
    <div class="wrapper">
        <Contents :page="this.page.current" ref="notice" />
        <div class="page">
            <div v-if="page.prev" @click="calPage(-1)" class="btn prev">◀</div>
            <div class="pageList">{{ this.page.current }} / {{ this.page.max }}</div>
            <div v-if="page.next" @click="calPage(1)" class="btn next">▶</div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
    import Contents from './adminNoticeReplyContents';
    export default {
        components: {
            Contents : Contents,
        },
        data() {
            return {
                page : {
                    current : 1,
                    max : 0,
                    prev : true,
                    next : true,
                },
            }
        },
        created() {
            this.getMax();
        },
        async updated() {
            this.pageCheck();
        },
        methods : {
            getMax() {
                axios.get(`${VUE_APP_LOCAL_URI}/g/${this.$route.params.code}/notice/max`)
                .then(({data}) => this.page.max = data)
                .catch(err => console.log(err));
            },
            pageCheck() {
                if(this.page.current === 1 && this.page.max === 1) {
                    this.page.prev = false;
                    this.page.next = false;
                    return;
                }
                if(this.page.current === 1) {
                    this.page.prev = false;
                    this.page.next = true;
                    return;
                }
                if(this.page.current === this.page.max) {
                    this.page.prev = true;
                    this.page.next = false;
                    return;
                }
                this.page.prev = true;
                this.page.next = true;
            },
            calPage(num) {
                this.page.current = this.page.current + num;
                this.$refs.notice.getData(this.page.current);
            }
        }
    }
</script>

<style scoped>
.wrapper {
    width:100%;
}

.page {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1% 0%;
}
.pageList {
    font-weight: bold;
    font-size: 1.2em;
}

.page .btn {
    width: 2%;
    padding: 0.2%;
    margin: 0% 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    cursor:pointer;
}

</style>