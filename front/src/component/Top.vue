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
  name: 'app',
  methods : {
    
  } 
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&display=swap');

header {
  width:100%;
  display: flex;
}

header .textCenter{
  display: flex;
  justify-content: center;
  align-items: center;
}

header .headerMenu {
  background-color: #FDD692;
  width:49%;
  padding: 0.5%;
  opacity: 0.5;
  cursor: pointer;
}

header .headerHome {
  background-color: #EC7357;
  width:2%;
  padding: 0.5%;
  color:white;
  cursor: pointer;
}

header .headerMenuFont {
  font-family: 'Black Han Sans';
  font-size: 2.0em;
}

header .headerMenu:hover {
  color:white;
  opacity: 1;
  transition: 0.5s;
}

.active {
  color:white !important;
  opacity: 1 !important;
  cursor:default !important;
}
</style>
