<template>
  <div @click="searchUser()" class="wrapper recentSearchItem">
    <div v-if="champion" class="profile" :style="style"></div>
    <div v-if="!champion" class="noImg">?</div>
    <div class="playerInfo">
      <div class="name">{{ this.sendData.ogName}}</div>
      <div class="info">LEVEL {{this.sendData.level}} · {{this.sendData.rankTier}}</div>
    </div>
    <div class="go">
      <span>
        <i class="fas fa-external-link-alt"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["sendData"],
  created() {
    this.isChampion();
  },
  data: function() {
    return {
      champion: false,
      style: `background-image: url('http://ddragon.leagueoflegends.com/cdn/10.13.1/img/champion/${this.sendData.recentChampion}.png'); background-size: contain;background-repeat:no-repeat; `
    };
  },
  methods: {
    searchUser() {
      this.$router.push({ path: `/user/${this.sendData.ogName}` });
    },
    isChampion() {
      if (this.sendData.recentChampion != "UNRANK") {
        this.champion = true;
      }
    }
  }
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  height: 4em;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  cursor: pointer;
}
.profile {
  width: 70px;
}
.noImg {
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: gray;
  font-size: 2em;
  font-weight: bold;
}
.itemCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}
.playerInfo {
  width: 60%;
  display: flex;
  flex-direction: column;
}
.playerInfo .name {
  width: 100%;
  padding: 3% 0% 0% 3%;
  height: 50%;
  font-size: 1.5em;
  font-weight: bold;
}
.playerInfo .info {
  width: 100%;
  height: 50%;
  padding: 0% 0% 0% 3%;
  font-size: 0.8em;
  color: rgba(0, 0, 0, 0.4);
}
.go {
  width: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 5%;
  color: lightgray;
}

.recentSearchItem:hover .playerInfo,
.recentSearchItem:hover .go {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>