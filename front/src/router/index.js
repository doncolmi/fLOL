import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../main/index'

Vue.use(VueRouter);

const NotFound = {template : '<p>하이</p>'};
const Home = main;
const About = {template: '<p>about page</p>'};

const router = new VueRouter({
    mode : 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/About', component: About },
        { path: '*', component: NotFound}
    ]
})

export default router