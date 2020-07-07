<template>
    <div class="wrapper">
        <SearchHomeBar></SearchHomeBar>
        <div class="bottomItem">
            <SearchHomeContents></SearchHomeContents>
        </div>
    </div>
</template>

<script>
import SearchHomeBar from "../bar/SearchBarHome"
import SearchHomeContents from "../searchHome/SearchHomeContents"
    export default {
        components : {
            SearchHomeBar : SearchHomeBar,
            SearchHomeContents : SearchHomeContents,
        }
    }
</script>

<style scoped>
.bottomItem {
    position: absolute;
    width:100%;
    bottom: 0;
}
@media ( min-height: 1300px ) {

}

@media ( max-width: 1025px ) {

}

@media ( max-width: 525px ) {

}
</style>