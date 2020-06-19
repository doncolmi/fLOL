<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="user" class="user">
      <div>
        <top :send-data="user"></top>
        <div v-for="item in toast" v-bind:key="item">
          <toast :class="item.class" :send-data="item" v-bind:ogName="user.ogName"></toast>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import toast from "./toast";
import axios from "axios";
import top from "./document/top";

export default {
  components: {
    toast: toast,
    top: top
  },
  data() {
    return {
      loading: false,
      user: null,
      error: null,
      toast: null
    };
  },
  created() {
    this.getUserData();
  },
  watch: {
    $route: "getUserData"
  },
  methods: {
    getUserData() {
      this.error = this.post = null;
      this.loading = true;
      axios
        .get(`http://localhost:15000/user/${this.$route.params.ogName}`)
        .then(async ({ data }) => {
          const toastList = [];
          for (const item of data.etc) {
            const toasts = await axios.get(
              `http://localhost:15000/toast/${item}`
            );
            toastList.push(toasts.data);
          }
          this.loading = false;
          this.toast = toastList;
          this.user = data;
        })
        .catch(err => {
          this.loading = false;
          this.error = err.toString();
        });
    }
  }
};
</script>

<style>
.user {
  width: 70%;
  margin: 0 auto;
}
</style>
