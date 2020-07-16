<template>
  <div class="inputBox shadow">
    <input
      type="text"
      id="inputForm"
      v-on:keyup.enter="searchUser()"
      placeholder="그룹 코드를 입력해주세요."
      autocomplete="off"
    />
    <span @click="searchUser()" class="addContainer">
      <i class="addBtn fas fa-play" aria-hidden="true"></i>
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

<style scoped>
.inputBox {
  width: 50%;
  background: white;
  height: 50px;
  line-height: 50px;
  margin: 0 auto;
  text-align: justify;
  margin-top: 1%;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(168, 168, 168, 1);
  box-shadow: 0px 0px 10px 0px rgba(168, 168, 168, 1);
  -moz-box-shadow: 0px 0px 10px 0px rgba(168, 168, 168, 1);
}
.inputBox input {
  border-style: none;
  font-size: 1.1rem;
  width: 60%;
  margin-left:3%;
}
.inputBox input:focus {
  outline: none;
}
.addContainer {
  float: right;
  background: #EF9A9A;
  display: inline-block;
  width: 5rem;
  cursor: pointer;
  text-align: center;
}
.addBtn {
  color: white;
  vertical-align: middle;
  font-size: 1.5em;
}
@media ( min-height: 1300px ) {
  .inputBox {
    width: 30%;
    height: 100px;
    line-height: 100px;
    margin-top:2%;
  }
  .inputBox input {
    font-size: 1.6rem;
    height:90%;
  }
  .addBtn {
    font-size:2em;
  }
}

@media ( max-width: 1025px ) {
  .inputBox {
    width: 90%;
    height: 100px;
    line-height: 100px;
    margin-top:5%;
    margin-bottom:5%;
  }
  .inputBox input {
    font-size: 1.5rem;
    height:90%;
  }
  .addBtn {
    font-size:2em;
  }
}

@media ( max-width: 525px ) {
  .inputBox {
    width: 95%;
    height: 60px;
    line-height: 60px;
    margin-top:5%;
    margin-bottom:5%;
  }
  .inputBox input {
    font-size: 1.1rem;
    height:90%;
  }
  .addBtn {
    font-size:2em;
  }
}
</style>
