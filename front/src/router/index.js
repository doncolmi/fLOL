import Vue from 'vue'
import VueRouter from 'vue-router'
import search from '../component/search/Search'
import document from '../component/user/document'

Vue.use(VueRouter);

const NotFound = {template : '<p>하이</p>'};
const Search = search;
const About = {template: '<p>about page</p>'};
const Document = document;

const router = new VueRouter({
    mode : 'history',
    routes: [
        { path: '/', component: Search },
        { path: '/About', component: About },
        { path: '*', component: NotFound},
        { path: '/user/:ogName', component: Document}
    ]
})

export default router