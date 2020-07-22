<template>
  <div>
    <h1>그룹 이름 작성</h1>
    <p>그룹 이름은 중복이 상관 없으며, 2~30자 이내로 작성해주셔야 합니다.</p>
    <input type="text" v-model="name" maxlength="30" autocomplete="off" />
    <div class="error">{{ this.error }}</div>
    <button @click="valiOnBtn" v-bind:disabled="this.name.length < 2" class="btn">다음</button>
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      error: "그룹 이름을 입력해주세요",
      name: ""
    };
  },
  methods: {
    valiOnInput() {
      const name = this.name;
      if ((name.length > 0 && name.length < 2) || name.length > 30) {
        this.error = "그룹 이름은 2자 이상 30자 이하여야 합니다.";
        this.class = "addContainer addBtn disabled";
      } else if (name.length === 0) {
        this.error = "그룹 이름을 입력해주세요";
        this.class = "addContainer addBtn disabled";
      } else {
        name.style.borderBottom = "1.2px solid skyblue";
        this.error = "다음 버튼을 눌러주세요";
        this.class = "addContainer addBtn active";
      }
    },
    valiOnBtn() {
      if (this.name.length > 1 && this.name.length < 31) {
        this.$parent.name = this.name;
        this.$parent.saveName();
      }
    }
  }
};
</script>

<style scoped>
div {
  text-align: center;
}
p {
  font-size: 0.9em;
  color: rgba(0, 0, 0, 0.5);
}
input {
  width: 100%;
  font-size: 1.3em;
  border: 0px;
  border-bottom: 1px solid lightgray;
  height: 50px;
  text-align: center;
  font-weight: bold;
  transition: 1s;
}
input:focus {
  outline: none;
}
.error {
  width: 100%;
  text-align: center;
  color: gray;
  font-size: 0.8em;
  margin-top: 0.3em;
  margin-bottom: 1em;
}
.btn {
  color: white;
  border: 0px;
  background-color: #ef9a9a;
  border-radius: 1em;
  padding: 0.5em 1.5em;
  cursor: pointer;
  transition: 0.3s;
}
.btn:focus {
  outline: none;
}
.btn:disabled {
  background-color: gray;
  cursor: default;
}
</style>