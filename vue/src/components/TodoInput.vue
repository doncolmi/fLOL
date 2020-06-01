<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" placeholder="오늘 해야할 일을 적어주세요." v-on:keyup.enter="addTodo">
        <span class="addContainer" v-on:click="addTodo" >
            <i class="addBtn fa fa-plus" aria-hidden="true"></i>
        </span>

        <modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">경고</h3>
            <span slot="footer" @click="showModal = false">
                할 일을 입력하세요.
                <i class="closeModalBtn fa fa-times" aria-hidden="true"></i>
            </span>
        </modal>
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
        }
    },
    components: {
        Modal: Modal
    }
}
</script>

<style>
    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
        
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
</style>