<template>
  <div id="app">
    <top></top>
    <router-view></router-view>
  </div>
</template>

<script>
import top from "./component/Top.vue";
import aos from "aos";

export default {
  created() {
    aos.init();
  },
  components: {
    top: top
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap");

body {
  margin: 0;
  background-color: #ffebee;
  font-family: "Nanum Gothic", sans-serif;
}
top {
  margin-bottom: 1%;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
