import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../component/Main/Main';
import document from '../component/user/document'

Vue.use(VueRouter);

const Main = main;
const NotFound = {template : '<p>하이</p>'};
const About = {template: '<p>about page</p>'};
const Document = document;

const router = new VueRouter({
    mode : 'history',
    routes: [
        { path: '/', component: Main},
        { path: '/About', component: About },
        { path: '*', component: NotFound},
        { path: '/user/:ogName', component: Document}
    ]
})

export default router