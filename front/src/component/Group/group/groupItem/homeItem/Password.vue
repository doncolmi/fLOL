<template>
  <div class="wrapper">
    <div class="title">그룹 비밀번호 입력</div>
    <div class="exp">현재 접속하려는 그룹은 비공개 그룹입니다. 해당 그룹 열람시 비밀번호가 필요합니다.</div>
    <input type="password" v-model="password" class="password" />
    <button @click="checkPassword()" v-bind:disabled="this.password.length < 6" class="btn">완료</button>
  </div>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
import Home from "../Home";

export default {
  data() {
    return {
      password: ""
    };
  },
  components: {
    Home: Home
  },
  methods: {
    checkPassword() {
      const auth = {
        code: this.$route.params.code,
        password: this.password
      };
      axios
        .post(`${VUE_APP_LOCAL_URI}/g/auth`, auth)
        .then(({ data }) => {
          this.$parent.view = Home;
          this.$store.state.authGroupCode = data.code;
        })
        .catch(err => {
          Swal.fire({
            icon: "error",
            text: "비밀번호가 일치 하지 않습니다."
          });
        });
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  font-size: 3em;
  font-weight: bold;
}
.exp {
  font-size: 0.9em;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 2em;
}
.password {
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 5px 0px lightgray;
  border-radius: 1em;
  padding: 0.5em 1em;
  font-size: 1.3em;
  margin-bottom: 0.4em;
}
.password:focus {
  outline: none;
}
.btn {
  color: white;
  border: 0px;
  background-color: #ef9a9a;
  border-radius: 1em;
  padding: 0.5em 1.5em;
  cursor: pointer;
}
.btn:disabled {
  background-color: gray;
  cursor: default;
}
</style>