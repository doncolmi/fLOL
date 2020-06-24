<template>
  <div id="app">
    <top></top>
    <router-view></router-view>
  </div>
</template>

<script>
import top from './component/Top.vue';
import aos from 'aos';

export default {
  created() {
    aos.init();
  },
  components: {
    'top' : top,
  },

}
</script>

<style>
body{
  margin:0;
  background-color: #EFFFE9;
}
top {
  margin-bottom: 1%;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
