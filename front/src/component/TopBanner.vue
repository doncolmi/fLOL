<template>
    <div class="bannerWrapper bannerBg">
        <div style="position:absolute;top:0;left:0;padding:1.5%;width:30%;">
            <topMenu></topMenu>
        </div>
        <router-link to="/" tags="div" class="bannerHomeBtn bannerHomeShadow">
            <a to="/" class="bannerHomeFont">F</a>
        </router-link>
    </div>
</template>

<script>
    import topMenu from './Main/TextMenu';
    export default {
        components: {
            topMenu : topMenu,
        }   
    }
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lobster&display=swap");

.bannerWrapper {
    width:100%;
    height: 5rem;
    position: relative;
    display: flex;
    justify-content: center;
    margin-bottom: 2%;
}
.bannerBg {
    width:100%;
    background: url('../../src/assets/main/headerBg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 30%;
}
.bannerHomeBtn {
    width:7%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: #EF9A9A;
    padding:0.5em 0em;
    border-radius: 0px 0px 5px 5px;
}
.bannerHomeShadow {
    -webkit-box-shadow: 0px 5px 10px 0px rgba(168, 168, 168, 1);
    -moz-box-shadow: 0px 5px 10px 0px rgba(168, 168, 168, 1);
    box-shadow: 0px 5px 10px 0px rgba(168, 168, 168, 1);
}
.bannerHomeFont {
    color: white;
    font-size: 3em;
    font-family: "Lobster", cursive;
}
@media ( min-height: 1300px ) {

}

@media ( max-width: 1025px ) {

}

@media ( max-width: 525px ) {

}
</style>