<template>
  <div class="mainItem">
    <ghost v-if="ghost" :name="this.sendData.ogName" :toast="this.ghost"></ghost>
    <rank v-if="rank" :user="this.sendData" :toast="this.rank"></rank>
    <match v-if="match" :user="this.sendData" :toast="this.match"></match>
    <level v-if="level" :user="this.sendData" :toast="this.level"></level>
    <position v-if="position" :user="this.sendData" :toast="this.position"></position>
    <winlose v-if="winlose" :user="this.sendData" :toast="this.winlose"></winlose>
  </div>
</template>

<script>
import rank from "./toast/rank";
import ghost from "./toast/ghost";
import match from "./toast/match";
import level from "./toast/level";
import position from "./toast/position";
import winlose from "./toast/winlose";

export default {
  props: ["sendData", "toast"],
  components: {
    rank: rank,
    ghost: ghost,
    match: match,
    level: level,
    position: position,
    winlose: winlose,
  },
  data() {
    return {
      winlose: null,
      ghost: null,
      rank: null,
      position: null,
      level: null,
      match: null,
    };
  },
  created() {
    
    for(const item of this.toast) {
      if(item.class === 'winlose') this.winlose = item;
      else if(item.class === 'ghost') this.ghost = item;
      else if(item.class === 'rank') this.rank = item;
      else if(item.class === 'position') this.position = item;
      else if(item.class === 'level') this.level = item;
      else if(item.class === 'match') this.match = item;
    }
    console.log(this.rank);
  }
};
</script>

<style scoped>
.item {
  margin-bottom: 1em;
}

.mainItem {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
