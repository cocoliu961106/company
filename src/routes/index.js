import Vue from "vue"
import VueRouter from "vue-router"

import Home from "../views/home/Home"
import About from "../views/about/About"
Vue.use(VueRouter)

const routes = [
    {
        path: "/home",
        component: Home
    },
    {
        path: "/about",
        component: About
    },
    {
        path: '/',
        redirect: '/home'
    }
]

const router = new VueRouter({routes})

export default router