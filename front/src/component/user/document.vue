<template>
  <div>
    <TopBanner></TopBanner>
    <search></search>
    <div v-if="loading">
      <div class="load">
        <img src="../../../src/assets/827.svg" />
        <a>Loading...</a>
      </div>
    </div>
    <div v-if="error">{{ error }}</div>
    <div v-if="user" class="user">
      <div>
        <top :send-data="user"></top>
        <mainContent :send-data="user" :toast="toast"></mainContent>
      </div>
    </div>
  </div>
</template>

<script>
import TopBanner from "../TopBanner";
import toast from "./toast";
import axios from "axios";
import top from "./document/top";
import mainContent from "./document/main";
import search from "../search/bar/SearchBar";

export default {
  components: {
    TopBanner: TopBanner,
    toast: toast,
    top: top,
    mainContent: mainContent,
    search: search
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
    if (this.user) {
      if (!(await this.isTodayFirstUser())) {
        this.saveTodayFirstUser();
      }
      this.saveRecentSearch();
    }
  },
  updated() {
    this.saveRecentSearch();
  },
  watch: {
    $route: ["getUserData", "saveRecentSearch"]
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
    },
    saveRecentSearch() {
      const item = [
        this.user.name,
        {
          ogName: this.user.ogName,
          rankTier: this.user.rankTier,
          level: this.user.level,
          recentChampion: this.user.recentChampion
        }
      ];

      const localData = JSON.parse(localStorage.getItem("recentSearch"));

      if (localData) {
        const localDataLength = localData.length;

        for (let i = 0; i < localDataLength; i++) {
          if (localData[i][0] === this.user.name) {
            localData.splice(i, 1);
            break;
          }
        }

        if (localData.length > 4) {
          localData.shift();
        }

        localData.push(item);
        localStorage.setItem("recentSearch", JSON.stringify(localData));
      } else {
        const array = [];
        array.push(item);
        localStorage.setItem("recentSearch", JSON.stringify(array));
      }
    },
    async isTodayFirstUser() {
      const today = new Date();
      const todayString = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
      const isTodayFirstUser = await axios.get(
        `${VUE_APP_LOCAL_URI}/today/${todayString}`
      );
      return isTodayFirstUser.data;
    },
    saveTodayFirstUser() {
      const today = new Date();
      const todayString = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;

      const data = {
        ogName: this.user.ogName,
        level: this.user.level,
        rankTier: this.user.rankTier,
        recentChampion: this.user.recentChampion,
        date: todayString
      };

      axios.post(`${VUE_APP_LOCAL_URI}/today`, data).then(({ data }) => {
        let text;
        data ? (text = "성공") : (text = "실패");
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

.load {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2%;
}

.load a {
  margin-top: 2%;
  font-size: 3em;
  font-weight: bold;
}

@media (max-width: 1025px) {
  .user {
    width: 100%;
  }
}
</style>
