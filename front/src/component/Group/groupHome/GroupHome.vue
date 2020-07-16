<template>
    <div class="wrapper">
        <GroupCodeForm></GroupCodeForm>
        <GroupMakeForm></GroupMakeForm>
    </div>
</template>

<script>
import GroupCodeForm from './GroupCodeForm';
import GroupMakeForm from './GroupMakeForm';
    export default {
        components : {
            GroupCodeForm : GroupCodeForm,
            GroupMakeForm : GroupMakeForm
        }
    }
</script>

<style scoped>
.wrapper {
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5em 0em;
}

@media ( min-height: 1300px ) {

}

@media ( max-width: 1025px ) {

}

@media ( max-width: 525px ) {

}
</style>