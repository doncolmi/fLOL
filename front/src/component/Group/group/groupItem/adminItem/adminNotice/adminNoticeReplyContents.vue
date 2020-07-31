<template>
    <div>
        <div v-for="(item, i) in data" v-bind:key="i">
            <div class="reply">
                <div class="replyTop">
                    <div class="time">
                        {{item.createdDate}}
                    </div>
                    <div class="icon">
                        <span @click="del(item._id)"><i class="far fa-trash-alt"></i></span>
                    </div>
                </div>
                <div class="content">
                    {{item.content}}
                </div>
            </div>
        </div>
        <div v-if="error">
            <div class="loading">
                <a>작성된 게시글이 없습니다.</a>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Swal from 'sweetalert2';
    export default {
        props : ["page"],
        data() {
            return {
                error: false,
                data : null,
            }
        },
        async created() {
            this.getData(this.page);
        },
        methods: {
            set() {
                this.error = false;
            },
            getData(page) {
                this.error = null;
                axios.get(`${VUE_APP_LOCAL_URI}/g/${this.$route.params.code}/notice?page=${page}`)
                .then(({data}) => {
                    if(data.length < 1) {
                        this.loading = false;
                        this.error = true;
                        return;
                    }
                    this.error = false;
                    this.data = data;
                })
                .catch(err => {
                    this.data = null;
                    this.error = true;
                });
                // todo : 운영자일때만 삭제 버튼이 뜰 수 있게
            },
            del(id) {
                axios.delete(`${VUE_APP_LOCAL_URI}/g/${this.$route.params.code}/notice?id=${id}`)
                .then(res => {
                    Swal.fire({
                        icon: "success",
                        text: "공지사항이 삭제 되었습니다."
                    });
                    this.getData();
                })
                .catch(err => {
                    console.log(err);
                    Swal.fire({
                        icon: "error",
                        text: "공지사항이 삭제 되지 않았습니다."
                    });
                })
            }
        }
    }
</script>

<style scoped>
.reply {
    width: 100%;
    border-top: 1px solid lightgray;
    padding: 2% 1%;
}

.replyTop {
    width: 100%;
    display: flex;
    margin-bottom: 1em;
}
.replyTop div {
    width: 50%;
}
.time {
    color: gray;
    font-size: 0.8em;
}
.icon {
    text-align: right;
}
.content {
    padding: 1em 0em;
}

.loading {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10% 0%;
  text-align: center;
  font-size:0.8em;
  color:rgba(0, 0, 0, 0.4);
}

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
</style>