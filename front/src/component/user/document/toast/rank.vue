<template>
  <div class="item">
    <div class="name">RANK</div>
    <img :src="src" class="mainImg" />
    <div class="rankTier">{{ this.user.rankTier }}</div>
    <div class="title">{{ this.toast.title }}</div>
    <div class="content">{{ this.toast.content.replace('[name]', this.user.ogName) }}</div>
  </div>
</template>

<script>
export default {
  props: ["user","toast"],
  data() {
    return {
      tier: "GOLD IV",
      src: null,
      level: false
    };
  },
  methods: {
    getTier() {
      let tier = this.user.rankTier.split(" ");
      if (tier[0] === "IRON") this.src = "/src/assets/rank/Iron.png";
      else if (tier[0] === "BRONZE") this.src = "/src/assets/rank/Bronze.png";
      else if (tier[0] === "SILVER") this.src = "/src/assets/rank/Silver.png";
      else if (tier[0] === "GOLD") this.src = "/src/assets/rank/Gold.png";
      else if (tier[0] === "PLATINUM")
        this.src = "/src/assets/rank/Platinum.png";
      else if (tier[0] === "DIAMOND") this.src = "/src/assets/rank/Diamond.png";
      else if (tier[0] === "MASTER") this.src = "/src/assets/rank/Master.png";
      else if (tier[0] === "GRANDMASTER")
        this.src = "/src/assets/rank/Grandmaster.png";
      else if (tier[0] === "CHALLENGER")
        this.src = "/src/assets/rank/Challenger.png";
      else this.src = "/src/assets/rank/unrank.png";
    }
  },
  created() {
    this.getTier();
  }
};
</script>

<style scoped>
.item {
  padding: 2% 1%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 2px 0px;
}
.name {
  font-size: 2em;
  font-weight: bold;
}
.mainImg {
  width: 8em;
}
.rankTier {
  font-size:0.9em;
  color:gray;
}
.title {
  margin-top:1em;
  font-size: 1.2em;
  font-weight: bold;
}
.content {
  margin-top:0.5em;
  font-size: 0.9em;
  color: gray;
}
.level {
  padding: 2em;
}
</style>