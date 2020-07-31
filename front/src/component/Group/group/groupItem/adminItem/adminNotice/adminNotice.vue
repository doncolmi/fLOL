<template>
    <div class="wrapper">
        <div class="top">
            <Top />
        </div>
        <h1>공지사항 관리</h1>
        <Form />
        <Reply />
    </div>
</template>

<script>
    import Top from '../adminHome/adminHomeTop';
    import Form from './adminNoticeForm';
    import Reply from './adminNoticeReply';

    import axios from 'axios';
    import Swal from 'sweetalert2';
    export default {
        components : {
            Top: Top,
            Form: Form,
            Reply: Reply,
        },
        data() {
            return {
                text : "",
            }
        },
        methods: {
            
        }
    }
</script>

<style scoped>

.wrapper {
    width:30%;
}
.top {
    width: 100%;
}

</style>