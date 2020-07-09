<template>
  <div class="documentTop">
    <div v-if="!style" class="noImg">?</div>
    <div v-if="style" class="profile" :style="style"></div>
    <div class="userName">{{ this.sendData.ogName }}</div>
    <div class="userInfo">LEVEL {{this.sendData.level}} · {{this.sendData.rankTier}}</div>
    <div class="hrLine"></div>
  </div>
</template>

<script>
export default {
  props: ["sendData"],
  data: function() {
    return {
        style : null,
    };
  },
  created() {
    this.getProfile();
  },
  methods : {
    getProfile() {
      if(this.sendData.recentChampion !== 'UNRANK') {
          this.style = `background-image: url('http://ddragon.leagueoflegends.com/cdn/10.13.1/img/champion/${this.sendData.recentChampion}.png'); background-size: contain;background-repeat:no-repeat;`;
      }
    }
  }
};
</script>
  
<style scoped>
.documentTop {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin: 1% 0%;
}

.documentTop .userName {
  font-size:2em;
  font-family: "Noto Sans KR", sans-serif;
}

.profile {
    width: 6em;
    height: 6em;
    box-shadow: 0px 0px 5px 0px lightgray;
    border-radius: 3em;
}
.noImg {
    width: 3em;
    height: 3em;
    box-shadow: 0px 0px 5px 0px lightgray;
    border-radius: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: gray;
    font-size: 2em;
    font-weight: bold;
}
.hrLine {
  width:25%;
  border-bottom: 1px solid gray;
  margin: 1% 0%;  
}
.userInfo {
  color: rgba(0,0,0,0.4);
}
</style>