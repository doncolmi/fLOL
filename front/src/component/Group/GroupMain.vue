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
import SearchBar from './groupHome/GroupSearchForm';
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
    -webkit-box-shadow: 0px 0px 10px 0px rgba(168, 168, 168, 1);
    box-shadow: 0px 0px 10px 0px rgba(168, 168, 168, 1);
    -moz-box-shadow: 0px 0px 10px 0px rgba(168, 168, 168, 1);
}
</style>