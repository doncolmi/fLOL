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
}

.documentTop .userName {
  font-size: 3em;
  font-family: "Noto Sans KR", sans-serif;
}
</style>

<!-- 계정에 아이콘 추가할까...? -->