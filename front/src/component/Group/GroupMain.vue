<template>
    <div>
        <TopBanner></TopBanner>
        <SearchBar></SearchBar>
        <div class="hr"></div>
        <GroupHome></GroupHome>
    </div>
</template>

<script>
import TopBanner from '../TopBanner';
import SearchBar from './bar/SearchBar';
import GroupHome from './groupHome/GroupHome';
    export default {
        components : {
            TopBanner : TopBanner,
            SearchBar : SearchBar,
            GroupHome : GroupHome,
        }
    }
</script>

<style scoped>
.hr {
    margin: 0 auto;
    width:80%;
    border-bottom: 1px solid lightgray;
}
</style>