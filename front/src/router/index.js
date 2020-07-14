import Vue from "vue";
import VueRouter from "vue-router";
import main from "../component/Main/Main";
import document from "../component/user/document";
import search from "../component/search/Search";
import searchHome from "../component/search/searchHome/SearchHome";
import group from "../component/Group/GroupMain";

Vue.use(VueRouter);

const Main = main;
const NotFound = { template: "<p>하이</p>" };
const About = { template: "<p>about page</p>" };

const Document = document;

const Search = search;
const SearchHome = searchHome;

const Group = group;

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Main },
    { path: "/About", component: About },
    { path: "*", component: NotFound },
    { path: "/user/:ogName", component: Document },
    {
      path: "/search",
      component: Search,
      children: [
        { path: "", component: SearchHome },
        { path: "/test", component: NotFound }
      ]
    },
    {
      path: "/group",
      component: Group,
      children: []
    }
  ]
});

export default router;
