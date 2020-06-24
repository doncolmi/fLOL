<template>
  <div class="inputBox shadow">
    <input type="text" id="inputForm" v-on:keyup.enter="searchUser()" placeholder="유저 이름을 검색해주세요" autocomplete="off" />
    <span @click="searchUser()" class="addContainer">
      <i class="addBtn fas fa-search" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script>
export default {
  methods: {
    searchUser() {
      const inputForm = document.getElementById("inputForm");
      if (inputForm.value.length < 1) {
        alert("검색할 사용자 이름을 입력해주세요");
        return;
      }
      this.$router.push({ path: `/user/${inputForm.value}` });
    }
  }
};
</script>

<style>
.inputBox {
  width: 80%;
  background: white;
  height: 70px;
  line-height: 70px;
  margin: 0 auto;
  border-radius: 20px 20px 20px 20px;
  text-align:center;
  margin-top:2%;
  margin-bottom: 2%;
  border: 2px solid #EC7357;
}
.inputBox input {
  border-style: none;
  font-size: 1.4rem;
  width: 60%;
  text-align: center;
  font-weight: bold;
}
.inputBox input:focus {
  outline: none;
}
.addContainer {
  float: right;
  background: #EC7357;
  display: inline-block;
  width: 5rem;
  cursor: pointer;
  border-radius: 0px 18px 18px 0px;
}
.addBtn {
  color:white;
  vertical-align: middle;
  font-size: 1.5em;
}
</style>
