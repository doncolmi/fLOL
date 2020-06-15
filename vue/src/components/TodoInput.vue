<template>
    <div class="inputBox shadow">
        <input type="text" id="inputForm" v-model="newTodoItem" placeholder="유저 이름을 검색해주세요" v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo" >
            <i class="addBtn fa fa-plus" aria-hidden="true"></i>
        </span>
        <div class="inputText" id="inputText">
            뭐더냐 시벌
        </div>
    </div>
    
</template>

<script>
import Modal from './common/Modal.vue'

export default {
    data() {
        return {
            newTodoItem: '',
            showModal: false
        }
    },
    methods: {
        addTodo() {
            if(this.newTodoItem !== "") {
                const value = this.newTodoItem && this.newTodoItem.trim();
                this.$emit('addTodo', value);
                this.clearInput;
            } else {
                this.showModal = !this.showModal;
            }
        },
        clearInput() {
            this.newTodoItem = '';
        },
    },
    components: {
        Modal: Modal
    }
}
</script>

<style>
    .inputBox {
        width: 50%;
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 10px;
        margin: 0 auto;
        
    }
    .inputBox input {
        border-style: none;
        font-size: 1.2rem;
        width: 60%;
        text-align: center;
    }
    .inputBox input:focus {
        outline: none;
    }
    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: inline-block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn {
        color: white;
        vertical-align: middle;
    }

    .inputText {
        width: 80%;
        display:none;
    }

</style>