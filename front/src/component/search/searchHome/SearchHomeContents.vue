<template>
    <div class="wrapper shadow">
        <SearchHomeItem :send-data="this.firstUser"></SearchHomeItem>
        <SearchHomeItem :send-data="this.mostSearched"></SearchHomeItem>
    </div>
</template>

<script>
    import SearchHomeItem from "./SearchHomeItem";
    export default {
        components: {
            SearchHomeItem : SearchHomeItem,
        },
        data : function() {
            return {
                firstUser : {
                    "title" : "오늘 최초로 검색된 유저",
                    description : "00시 이후로 제일 처음 검색된 유저입니다.",
                    method : 1,
                },
                mostSearched : {
                    "title" : "오늘 가장 많이 검색된 유저",
                    description : "00시 이후로 가장 많이 검색된 유저입니다.",
                    method : 2,
                }
            }
        },
    }
</script>

<style scoped>
.wrapper {
    width: 100%;
    display:flex;
}
.shadow {
    -webkit-box-shadow: 0px 0px 5px 0px rgba(168, 168, 168, 1);
    box-shadow: 0px 0px 5px 0px rgba(168, 168, 168, 1);
    -moz-box-shadow: 0px 0px 5px 0px rgba(168, 168, 168, 1);
}
</style>