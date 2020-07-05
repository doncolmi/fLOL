<template>
  <div>
    <TopBanner></TopBanner>
    <router-view></router-view>
  </div>
</template>

<script>
import TopBanner from "../TopBanner";
import SearchBar from "./bar/SearchBar";
export default {
  components : {
    TopBanner : TopBanner,
    SearchBar : SearchBar,
  }
};
</script>

<style>
@media ( min-height: 1300px ) {

}

@media ( max-width: 1025px ) {

}

@media ( max-width: 525px ) {

}
</style>
