<template>
    <div class="bottomItem">
        <span>
            <i class="bottomIcon" aria-hidden="true"></i>
        </span>
        <div class="bottomTitle">
        </div>
        <div class="bottomContent">
            
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
  width:20%;
  text-align: center;
}

.bottomIcon {
  color: #EF5350;
  font-size: 10em;
}

.bottomTitle {
    font-weight: bold;
    font-size: 1.5em;
}

.bottomContent {
    color: gray;
    font-size: 0.8em;
    margin-top: 1%;
}
</style>
