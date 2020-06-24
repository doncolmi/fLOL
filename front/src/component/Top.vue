<template>
  <header>
    <div class="textCenter headerMenu headerMenuFont active">
      유저 검색
    </div>
    <router-link to="/" tag="div" class="textCenter headerHome headerMenuFont">
      F
    </router-link>
    <div class="textCenter headerMenu headerMenuFont">
      그룹
    </div>
  </header>
</template>

<script>
export default {
  name: "app",
  methods: {}
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");
header {
  width: 100%;
  display: flex;
  -webkit-box-shadow: 0px 5px 11px 0px rgba(168, 168, 168, 1);
  -moz-box-shadow: 0px 5px 11px 0px rgba(168, 168, 168, 1);
  box-shadow: 0px 5px 11px 0px rgba(168, 168, 168, 1);
  font-weight: 700;
}

header .textCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}

header .headerMenu {
  background-color: #e57373;
  width: 48%;
  padding: 1%;
  opacity: 0.5;
  cursor: pointer;
}

header .headerHome {
  font-family: "Lobster", cursive;
  background-color: #d32f2f;
  width: 4%;
  padding: 0.5%;
  color: white;
  cursor: pointer;
}

header .headerMenuFont {
  font-size: 2em;
}

header .headerMenu:hover {
  opacity: 1;
}

.active {
  opacity: 1 !important;
  cursor: default !important;
}
</style>
