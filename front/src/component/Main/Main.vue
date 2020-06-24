<template>
  <div>
    <search></search>
    <div>
        <searchItem></searchItem>
        <groupItem></groupItem>
    </div>
  </div>
</template>

<script>
import search from "../search/SearchBar"
import searchItem from "./SearchItem";
import groupItem from "./GroupItem";

export default {
    components: {
        search: search,
        searchItem : searchItem,
        groupItem : groupItem,
    },
}
</script>

<style>

</style>
