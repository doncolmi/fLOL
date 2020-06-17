<template>
  <div id="app">
    <top></top>
    <router-view></router-view>
  </div>
</template>

<script>
import top from './component/Top.vue';
export default {
  components: {
    'top' : top,
  },

}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
