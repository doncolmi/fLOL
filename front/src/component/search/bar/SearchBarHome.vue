<template>
    <div>
        <div class="inputBoxWrapper shadow">
            <div class="inputBox">
                <input
                type="text"
                id="inputForm"
                v-on:keyup.enter="searchUser()"
                placeholder="유저 이름을 검색해주세요"
                autocomplete="off"
                />
                <span @click="searchUser()" class="addContainer">
                <i class="addBtn fas fa-search" aria-hidden="true"></i>
                </span>
            </div>
            <div class="recentBox">
                <div v-if="loading" class="loading">
                  최근 검색 내역을 가져오는 중입니다...
                </div>
                <div v-if="notContent" class="loading">
                  최근 검색한 데이터가 없습니다.
                </div>
                <div v-if="localData">
                  <div v-for="(item, i) in localData" v-bind:key="i">
                    <recentSearch :send-data="item[1]"></recentSearch>  
                  </div>
                  
                </div>
            </div>
        </div>
        <div class="clear"><a @click="clearRecentSearch()">최근 검색 내역 지우기</a></div>
    </div>
</template>

<script>
import recentSearch from "./SearchItem/recentSearch";
export default {
  data() {
    return {
      loading: false,
      notContent: false,
      localData: null, 
    }
  },
  created() {
    this.getRecentData();
  },
  components: {
      recentSearch : recentSearch,
  },
  methods: {
    searchUser() {
      const inputForm = document.getElementById("inputForm");
      if (inputForm.value.length < 1) {
        alert("검색할 사용자 이름을 입력해주세요");
        return;
      }
      this.$router.push({ path: `/user/${inputForm.value}` });
    },
    clearRecentSearch() {
      this.localData = null;
      this.loading = false;
      this.notContent = true;
      localStorage.clear();
    },
    getRecentData() {
      this.loading = true;
      this.notContent = false;
      this.localData = null;
      const localStorageData = JSON.parse(localStorage.getItem("recentSearch"));
      if(localStorageData) {
        this.loading = this.notContent = false;
        this.localData = localStorageData.reverse();
      } else {
        this.loading = false;
        this.localData = null;
        this.notContent = true;
      }
    }
  },
};
</script>

<style scoped>
.inputBoxWrapper{
    width:30%;
    margin: 0 auto;
}
.inputBox {
  width: 100%;
  background: white;
  height: 50px;
  line-height: 50px;
  text-align: justify;
  margin-top: 1%;
}
.shadow {
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

.recentBox {
    width: 100%;
}
.clear {
   width:30%;
   margin:0 auto;
   text-align: right;
   font-size:0.8em;
   color:rgba(0, 0, 0, 0.5);
   padding: 0.5% 0%;   
}
.clear a {
   cursor: pointer;
}
.loading {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10% 0%;
  text-align: center;
  font-size:0.8em;
  color:rgba(0, 0, 0, 0.4);
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
