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
  border-radius: 30px 30px 0px 0px;
  background-color: #EEEEEE;
  padding: 0.5% 3%;
}

.documentTop .userName {
  font-size:3em;
  font-family: "Noto Sans KR", sans-serif;
}
</style>