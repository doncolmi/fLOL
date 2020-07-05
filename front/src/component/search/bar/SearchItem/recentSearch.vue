<template>
    <div class="wrapper">
        <div v-if="" class="profile" :style="style">
        </div>
        <div class="playerInfo">
            <div class="name" >
                {{ this.sendData.ogName}}
            </div>
            <div class="info">
                LEVEL {{this.sendData.level}} · {{this.sendData.rankTier}}  
            </div>
        </div>
        <div class="go">
                <span>
                    <i class="fas fa-external-link-alt"></i>
                </span>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['sendData'],
        data : function() {
            return {
                style : `background-image: url('http://ddragon.leagueoflegends.com/cdn/10.13.1/img/champion/${this.sendData.recentChampion}.png'); background-size: contain;background-repeat:no-repeat; `
            }
        }
    }
</script>

<style scoped>
    .wrapper {
        width: 100%;
        height: 4em;
        border-top: 1px solid rgba(0,0,0,0.1);
        display:flex;
        cursor: pointer;
    }
    .profile {
        width:12%;
        box-shadow: 0px 0px 5px 0px lightgray;   
    }
    .itemCenter {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .playerInfo {
        width:60%;
        display: flex;
        flex-direction: column;
    }
    .playerInfo .name{
        width:100%;
        padding:3% 0% 0% 5%;
        height:50%;
        font-size:1.5em;
        font-weight: bold;
    }
    .playerInfo .info {
        width:100%;
        height:50%;
        padding:0% 0% 0% 5%;
        font-size:0.8em;
        color:rgba(0,0,0,0.4);
    }
    .go {
        width:30%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right:5%;
        color:lightgray;
    }

    .wrapper:hover .playerInfo, .wrapper:hover .go {
        background-color: rgba(0,0,0,0.05);
    }
</style>