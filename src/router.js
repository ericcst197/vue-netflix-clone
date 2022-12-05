import { createRouter, createWebHistory } from "vue-router";

import Home from './views/Home.vue'
import Profile from './views/Profile.vue'
import Login from './views/Login.vue'

const routes =[
    {
        path:'/',
        component: Profile,
    },
    {
        path:'/login',
        name: 'Login',
        component: Login,
    },
    {
        path:'/home',
        name: 'Home',
        component: Home,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router