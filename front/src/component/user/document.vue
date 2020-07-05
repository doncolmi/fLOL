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
import search from "../search/bar/SearchBar"

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
  async created() {
    await this.getUserData();

    if(this.user) {
      const item = [this.user.name,
        {
          ogName : this.user.ogName, 
          rankTier : this.user.rankTier,
          level : this.user.level, 
          recentChampion : this.user.recentChampion
        }
      ];

      const localData = JSON.parse(localStorage.getItem("recentSearch"));
      
      if(localData) {
        const localDataLength = localData.length;
        
        for(let i = 0; i < localDataLength; i++) {
          if(localData[i][0] === this.user.name) {
              localData.splice(i, 1);
              break;
          } 
        
        }
        
        if(localData.length > 4) {localData.shift()};
        
        localData.push(item);
        localStorage.setItem("recentSearch", JSON.stringify(localData));        
      } else {
        const array = [];
        array.push(item);
        localStorage.setItem("recentSearch", JSON.stringify(array));
      }

    }
  },
  watch: {
    $route: "getUserData"
  },
  methods: {
    async getUserData() {
      this.error = this.post = this.user = this.toast = null;
      this.loading = true;
      await axios
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
