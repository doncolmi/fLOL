<template>
    <div class="bottomItem">
        <span>
            <i :class="sendData.class" class="bottomIcon" aria-hidden="true"></i>
        </span>
        <div class="bottomTitle">
            {{ sendData.title}}
        </div>
        <div class="bottomContent">
            {{ sendData.contents}}
        </div>
    </div>
</template>

<script>
export default {
    props: ['sendData'],
};
</script>

<style>
.bottomItem {
  width:33%;
  text-align: center;
}

.bottomIcon {
  color: #EF5350;
  font-size: 10em;
}

.bottomTitle {
    margin-top:2%;
    font-weight: bold;
    font-size: 1.5em;
}

.bottomContent {
    color: gray;
    font-size: 0.8em;
    margin-top: 1%;
}
@media ( min-height: 1300px ) {
    .bottomIcon {
        color: #EF5350;
        font-size: 15em;
    }
    .bottomTitle {
        font-size: 3em;
        margin-top:1%;
    }

    .bottomContent {
        color: gray;
        font-size: 1.8em;
        margin-top: 1%;
    }
}
</style>
