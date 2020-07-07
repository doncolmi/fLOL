<template>
    <div class="wrapper">
        <div class="content">
            <div v-if="loading">
                loading...
            </div>
            <div v-if="user" class="userInfoBox">
                <div class="title">{{ this.sendData.title }}</div>
                <div class="description contentMargin">{{ this.sendData.description }}</div>
                <div v-if="!style" class="noImg contentMargin">?</div>
                <div v-if="style" class="profile contentMargin" :style="style"></div>
                <div class="name">{{ this.user.name }}</div>
                <div class="userInfo">{{ this.user.info }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'; 
    
    export default {
        props : ['sendData'],
        created() {
            if(this.sendData.method === 1) {
                this.firstUser();
            } else {
                this.mostSearched();
            }
        },
        data : function() {
            return {
                loading: false,
                champion : false,
                user : null,
                style : null
            }
        },
        methods : {
            firstUser() {
                this.loading = this.champion = false;
                this.loading = true;
                axios
                    .get(`${VUE_APP_LOCAL_URI}/today`)
                    .then( ({ data }) => {
                        const item = {
                            name : data.ogName,
                            info : `LEVEL ${data.level} · ${data.rankTier}`,
                        };
                        this.loading = false;
                        this.style = `background-image: url('http://ddragon.leagueoflegends.com/cdn/10.13.1/img/champion/${data.recentChampion}.png'); background-size: contain;background-repeat:no-repeat;`;
                        this.user = item;
                    });
            },
            mostSearched() {
                this.loading = this.champion = false;
                this.loading = true;
                this.user = {
                    name :"아직 개발중입니다.",
                    info : "아직 개발중입니다.",
                };
                this.loading = false;
            }
        }
    }
</script>

<style scoped>
.wrapper {
    width: 50%;
    height: 25em;
    background-color: rgba(0,0,0,0.02);
}
.content {
    margin:0 auto;
    width: 50%;
    height: 100%;
}
.userInfoBox {
    height:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.profile {
    width: 6em;
    height: 6em;
    box-shadow: 0px 0px 5px 0px lightgray;
    border-radius: 3em;
}
.noImg {
    width: 3em;
    height: 3em;
    box-shadow: 0px 0px 5px 0px lightgray;
    border-radius: 1.5em;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: gray;
    font-size: 2em;
    font-weight: bold;
}
.title {
    font-size:2em;
    font-weight: bold;
}
.description {
    font-size: 0.9em;
    color:gray;
}
.contentMargin {
    margin-bottom: 4%;
}
.name {
    font-size: 1.5em;
    font-weight: bold;
}
.userInfo {
    font-size: 0.9em;
    color: gray;
}
</style>