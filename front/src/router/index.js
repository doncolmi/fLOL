import Vue from 'vue'
import VueRouter from 'vue-router'
import search from '../component/search/search'

Vue.use(VueRouter);

const NotFound = {template : '<p>하이</p>'};
const Search = search;
const About = {template: '<p>about page</p>'};

const router = new VueRouter({
    mode : 'history',
    routes: [
        { path: '/', component: Search },
        { path: '/About', component: About },
        { path: '*', component: NotFound}
    ]
})

export default router