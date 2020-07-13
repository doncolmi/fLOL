<template>
  <div class="item">
    <div class="name">주의!</div>
    <img src="/src/assets/toast/ghost.png" class="mainImg" />
    <div class="title">{{ this.toast.title }}</div>
    <div class="content">{{ this.toast.content.replace('[name]', this.name) }}</div>
  </div>
</template>

<script>
export default {
  props: ["name","toast"],
  data() {
    return {
    };
  },
  methods: {
  },
  created() {
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