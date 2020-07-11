<template>
  <div>
    <div v-if="!ing" class="update">
      <div v-if="date" class="updateDate">최근 새로고침 : {{ this.date }}</div>
      <div class="button" @click="updateUser()">새로고침</div>
    </div>
    <div v-if="ing" class="update">
      <div class="grayButton" @click="updateUser()">새로고침 중...</div>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import axios from "axios";

export default {
  props: ["sendDate", "account"],
  data() {
    return {
      date: null,
      ing: false
    };
  },
  methods: {
    getDate() {
      const now = new Date();
      const updated = new Date(this.sendDate);
      let minus;
      if (now.getFullYear() > updated.getFullYear()) {
        minus = now.getFullYear() - updated.getFullYear();
        this.date = `${minus}년 전`;
        return;
      }
      if (now.getMonth() > updated.getMonth()) {
        minus = now.getMonth() - updated.getMonth();
        this.date = `${minus}달 전`;
        return;
      }
      if (now.getDate() > updated.getDate()) {
        minus = now.getDate() - updated.getDate();
        this.date = `${minus}일 전`;
        return;
      }

      if (now.getTime() > updated.getTime()) {
        const hour = now.getHours() - updated.getHours();
        const min = now.getMinutes() - updated.getMinutes();
        const sec = now.getSeconds() - updated.getSeconds();
        if (hour > 0) {
          this.date = `${hour}시간 전`;
          return;
        } else if (min > 2) {
          this.date = `${min}분 전`;
          return;
        } else {
          this.date = `방금 전`;
          return;
        }
      }
    },
    updateUser() {
      const time = (new Date() - new Date(this.sendDate)) / 1000 / 60;
      if (time > 5) {
        this.ing = true;
        axios.put(`${VUE_APP_LOCAL_URI}/user/${this.account}`).then(() => {
          location.reload();
        });
      } else {
        Swal.fire({
          icon: "error",
          text: "마지막 새로고침으로부터 5분이 지나야 새로고침이 가능합니다."
        });
      }
    }
  },
  created() {
    this.getDate();
  }
};
</script>

<style scoped>
.update {
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
}
.button {
  width: auto;
  padding: 0.5em 1.2em;
  text-decoration: none;
  color: #fff;
  background: #2196f3;
  text-align: center;
  border-radius: 2px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  cursor: pointer;
}
.button:hover {
  background: #42a5f5;
}
.grayButton {
  width: auto;
  padding: 0.5em 1.2em;
  text-decoration: none;
  color: #fff;
  background: gray;
  text-align: center;
  border-radius: 2px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
.updateDate {
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.8em;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 0.5em;
}
</style>
