<template>
  <header class="headerShawdow">
    <router-link to="/" class="headerMenu textCenter headerFont">
      F
    </router-link>
    <div class="mainContext">
      <p class="titleContext">Flol은 전적 검색 사이트가 아닙니다.<br>
        <a>FLoL is not a match search site.</a>
      </p>
      <p class="descriptionContext">
        자주 게임을 하는 친구들이나 내가 좋아하는 유저들로 그룹을 만드세요!<br>
        검색기능은 단순히 유저 조회와 재미를 위해 존재합니다.<br>
      </p>
      <p class="titleContextMobile">친구들과 그룹을 만드세요.<br>
        <a>Make Group with Your Friends</a></p>
    </div>
    <div class="searchZone">
      <search></search>
      <find></find>
    </div>
  </header>
</template>

<script>
import search from '../search/SearchBar';
import find from '../search/findGourp';

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
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
  html, body{
    height:100%;
  }

  #app {
    height:100%;
  }

  header {
    background : url('../../../src/assets/main/headerBg.png');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    display: flex;
    flex-direction: column;
    font-weight: 700;
    padding: 2% 0%;
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
    line-height: 0.9em;
  }
  .titleContext a{
    font-size:0.7em;
    font-weight: normal;
    font-family: 'Roboto', sans-serif;
  }

  .descriptionContext{
    font-size: 1.3em;
    line-height: 1.5em;
    font-weight: bold;
  }

  .titleContextMobile {
    line-height: 0.9em;
    display: none;
  }

  .titleContextMobile a{
    font-size:0.7em;
    font-weight: normal;
    font-family: 'Roboto', sans-serif;
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
    color: #FFCDD2;
    font-size: 5em;
    font-family: "Lobster", cursive;
  }

  @media ( min-height: 1300px ) {
    header {
      padding: 3% 0%;
    }
    .headerShawdow{
      -webkit-box-shadow: 0px 5px 15px 0px rgba(168, 168, 168, 1);
      -moz-box-shadow: 0px 5px 15px 0px rgba(168, 168, 168, 1);
      box-shadow: 0px 5px 15px 0px rgba(168, 168, 168, 1);
    }

    header .mainContext {
      margin: 0% 0%;
    }

    .titleContext {
      font-size: 5em;
    }

    .descriptionContext{
      font-size: 1.8em;
      line-height: 1.5em;
    }

    header .headerFont {
      font-size: 7em;
    }
  }


  @media ( max-width: 1025px ) {
    header{
      background-position: 25% 40%;
      height: 100%;
    }

    header .mainContext {
      margin: 5% 0%;
    }

    .titleContext {
      font-size: 2.8em;
    }

    .descriptionContext{
      font-size: 1.5em;
      line-height: 1.5em;
      font-weight: normal;
    }

    header .headerFont {
      font-size: 7em;
    }

    .headerMenu {
      height: 20%;
    }
    .mainContext{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 40%;
    }

    .searchZone {
      height: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }


  @media ( max-width: 525px ) {
    .titleContext { 
      display: none;
    }

    .descriptionContext{
      display: none;
    }

    header{
      background-position: 25% 40%;
      height: 100%;
    }

    header .mainContext {
      margin: 5% 0%;
    }

    .titleContext {
      font-size: 1.5em;
    }

    .descriptionContext{
      font-size: 0.5em;
      line-height: 2em;
    }

    header .headerFont {
      font-size: 7em;
    }

    .headerMenu {
      height: 20%;
    }
    .mainContext{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 50%;
    }

    .searchZone {
      height: 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .titleContextMobile {
      font-size: 1.8em;
      display: block;
    }
  }
</style>
