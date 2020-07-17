<template>
    <div>
        <Top-Banner></Top-Banner>
        <div>
            <Search-Bar :input-value="keyword"></Search-Bar>
        </div>
        <div v-if="loading">
            <div class="load">
                <img src="/src/assets/827.svg" />
                <a>Loading...</a>
            </div>
        </div>
        <transition name="fade">
            <div v-if="data" class="data">
                <Group-Search-List :data="data"></Group-Search-List>
                <div class="page">
                    <div v-if="page.prev" @click="getSearchData('-')" class="btn prev">◀</div>
                    <div class="pageList">{{ this.page.current }} / {{ this.page.max }}</div>
                    <div v-if="page.next" @click="getSearchData('+')" class="btn next">▶</div>
                </div>
            </div>
        </transition>
        <transition name="fade">
            <div v-if="isNone" class="load">
                <img width="30%" src="/src/assets/notFound.png" />
                <a>찾으시는 키워드에 대한 검색 결과가 없습니다.</a>
            </div>
        </transition>
    </div>
</template>

<script>
import axios from 'axios';

import TopBanner from '../../TopBanner';
import SearchBar from '../bar/SearchBar';
import GroupSearchList from './GroupSearchList';
    export default {
        async created() {
            await this.getSearchDataCount();
        },
        async updated() {
            this.pageCheck();
        },
        data() {
            return {
                loading: false,
                error: null,
                keyword : this.$route.params.keyword,
                page : {
                    current : 0,
                    max : 0,
                    prev : false,
                    next : false,
                },
                countData : null,
                data : null,
                isNone : false,
            }
        },
        components : {
            TopBanner : TopBanner,
            SearchBar : SearchBar,
            GroupSearchList : GroupSearchList,
        },
        methods : {
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
            set() {
                this.loading = false;
                this.error = null;
                this.keyword = this.$route.params.keyword;
                this.page = {
                    current : 0,
                    max : 0,
                    prev : false,
                    next : false,
                };
                this.countData = null;
                this.data = null;
                this.isNone = false;
            },
            async getSearchDataCount() {
                this.set();
                this.loading = true;
                const {data} = await axios
                .get(`${VUE_APP_LOCAL_URI}/g/search/${this.keyword}`);
                if(data < 1) {
                    this.loading = false;
                    this.isNone = true;
                } else {
                    this.loading = false;
                    this.isNone = false;
                    this.countData = data;
                    this.page.max = Math.ceil(data / 10);
                    this.getSearchData("+");
                }
            },
            async getSearchData(set) {
                if(set === "+") this.page.current += 1;
                else if(set === "-") this.page.current -= 1;
                const searchData = {
                    keyword : this.keyword,
                    page : this.page.current
                }
                const {data} = await axios
                .post(`${VUE_APP_LOCAL_URI}/g/search`, searchData);
                this.data = data;
            }
        },
        watch: {
            $route: [ "getSearchDataCount"]
        },
    }
</script>

<style scoped>
.load {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
}

.load a {
  margin-top: 2%;
  font-size: 2em;
  font-weight: bold;
}

.title {
    display: none;
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
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    cursor:pointer;
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>