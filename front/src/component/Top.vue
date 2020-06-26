<template>
  <header class="headerShawdow">
    <router-link to="/" class="headerMenu textCenter headerFont">
      F
    </router-link>
    <div class="mainContext">
      <p class="titleContext">Flol은 전적 검색 사이트가 아닙니다.</p>
      <p class="descriptionContext">
        Flol은 친구들과 그룹을 만들어 팀 게임을 더 원활하게 할 수 있게 돕는 역할을 합니다.<br>
        자주 게임을 하는 친구들이나 내가 좋아하는 유저들로 그룹을 만드세요!<br>
        검색기능은 단순히 유저 조회와 재미를 위해 존재합니다.<br>
      </p>
    </div>
    <search></search>
    <find></find>
  </header>
</template>

<script>
import search from './search/SearchBar';
import find from './search/findGourp';

export default {
  components: {
        search: search,
        find: find,
    },
  name: "app",
  methods: {}
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
header {
  background : url('../../src/assets/main/headerBg.png');
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  padding: 2%;
}

.headerShawdow{
  -webkit-box-shadow: 0px 5px 10px 0px rgba(168, 168, 168, 1);
  -moz-box-shadow: 0px 5px 10px 0px rgba(168, 168, 168, 1);
  box-shadow: 0px 5px 10px 0px rgba(168, 168, 168, 1);
}

header .mainContext {
  text-align: center;
  margin: 1% 0%;
  color:white;
  font-weight: normal;
}

.titleContext {
  font-weight: bold;
  font-size: 3em;
}

.descriptionContext{
  font-size: 1.3em;
  line-height: 1.5em;
}

header .textCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}

header .headerMenu {
  width: 100%;
  cursor: pointer;
}

header .headerFont {
  color: white;
  font-size: 5em;
  font-family: "Lobster", cursive;

}
</style>
