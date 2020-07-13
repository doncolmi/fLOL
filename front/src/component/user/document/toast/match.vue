<template>
  <div class="item">
    <div class="name">MATCH</div>
    <img :src="src" class="mainImg" :style="imgSize"/>
    <div class="title">{{ this.toast.title }}</div>
    <div class="content">{{ this.toast.content.replace('[name]', this.user.ogName) }}</div>
  </div>
</template>

<script>
export default {
  props: ["user","toast"],
  data() {
    return {
      src: `/src${this.toast.img}`,
      imgSize: null
    };
  },
  methods: {
    getImgSize() {
      let match = this.user.recentMatch;
      if (match === "솔랭") {
            this.imgSize="width:18em";
      }
      else if (match === "자랭") {
          this.imgSize="width:12em";
      }
    }
  },
  created() {
    this.getImgSize();
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