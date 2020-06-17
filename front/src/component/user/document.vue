<template>
    <div>
        <toast class="blueToast"></toast>
        <toast class="redToast"></toast>
    </div>
</template>

<script>
import toast from './toast';

export default {
    components: {
        'toast' : toast,
    },
    created() {
        console.log(this.$route.params.ogName);
    }
}
</script>

<style>


</style>
