<template>
  <div class="documentTop">
    <div class="userName">{{ this.sendData.ogName }}</div>
  </div>
</template>

<script>
export default {
  props: ["sendData"],
  data: function() {
    return {};
  }
};
</script>
  
<style>
.documentTop {
  text-align: left;
  background-color: rgba(0,0,0,0.05);
  padding: 0.5% 3%;
  -webkit-box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.3);
  -moz-box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.3);
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.3);
}

.documentTop .userName {
  font-size:2em;
  font-family: "Noto Sans KR", sans-serif;
}
</style>