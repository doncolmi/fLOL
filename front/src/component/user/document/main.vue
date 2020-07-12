<template>
  <div class="mainItem">
    <mainItem :send-data="this.tier"></mainItem>
    <mainItem :send-data="this.level"></mainItem>
  </div>
</template>

<script>
import mainItem from "./mainItem";
import update from "./update";
export default {
  props: ["sendData"],
  components: {
    mainItem: mainItem,
    update: update
  },
  data() {
    return {
      tier: {
        title: "RANK",
        first: this.sendData.rankTier,
        methods: "tier"
      },
      level: {
        title: "LEVEL",
        level: this.sendData.level,
        methods: "level"
      }
    };
  }
};
</script>

<style scoped>
.mainItem {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
