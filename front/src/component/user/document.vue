<template>
  <div>
    <search></search>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <div v-if="user" class="user">
      <div>
        <top :send-data="user"></top>
        <div v-for="(item, i) in toast" v-bind:key="i">
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
import search from "../search/SearchBar"

export default {
  components: {
    toast: toast,
    top: top,
    search: search,
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
      this.error = this.post = this.user = this.toast = null;
      this.loading = true;
      axios
        .get(`${VUE_APP_LOCAL_URI}/user/${this.$route.params.ogName}`)
        .then(async ({ data }) => {
          const toastList = [];
          for (const item of data.etc) {
            const toasts = await axios.get(
              `${VUE_APP_LOCAL_URI}/toast/${item}`
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
@media ( max-width: 1025px ) {
    .user {
      width: 100%;
    }
}
</style>
