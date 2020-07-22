<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {
    top: top
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap");

body {
  margin: 0;
  font-family: "Nanum Gothic", sans-serif;
}
top {
  margin-bottom: 1%;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
button:focus {
  outline: none;
}
input:foucs {
  outline: none;
}
</style>
