<template>
  <div class="item">
    <div class="title">{{ this.sendData.title }}</div>
    <img :src="src" class="mainImg" />
    <div class="level" v-if="level">{{ this.sendData.level }}</div>
    <div class="first">{{ this.sendData.first }}</div>
    <div class="second"></div>
  </div>
</template>

<script>
export default {
  props: ["sendData"],
  data() {
    return {
      tier: "GOLD IV",
      src: null,
      level: false
    };
  },
  methods: {
    getTier() {
      let tier = this.sendData.first.split(" ");
      if (tier[0] === "IRON") this.src = "/src/assets/rank/Iron.png";
      else if (tier[0] === "BRONZE") this.src = "/src/assets/rank/Bronze.png";
      else if (tier[0] === "SILVER") this.src = "/src/assets/rank/Silver.png";
      else if (tier[0] === "GOLD") this.src = "/src/assets/rank/Gold.png";
      else if (tier[0] === "PLATINUM")
        this.src = "/src/assets/rank/Platinum.png";
      else if (tier[0] === "DIAMOND") this.src = "/src/assets/rank/Diamond.png";
      else if (tier[0] === "MATSER") this.src = "/src/assets/rank/Master.png";
      else if (tier[0] === "GRANDMASTER")
        this.src = "/src/assets/rank/Grandmaster.png";
      else if (tier[0] === "CHALLENGER")
        this.src = "/src/assets/rank/Challenger.png";
      else this.src = "/src/assets/rank/unrank.png";
    }
  },
  created() {
    if (this.sendData.methods === "tier") this.getTier();
    else if (this.sendData.methods === "level") this.level = true;
  }
};
</script>

<style scoped>
.item {
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  font-size: 2em;
  font-weight: bold;
}
.mainImg {
  width: 12em;
}
.first {
  font-size: 1.1em;
  color: gray;
}
.level {
  padding: 2em;
}
</style>