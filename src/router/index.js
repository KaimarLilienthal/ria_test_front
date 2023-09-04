import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import AddNewEventView from "@/views/AddNewEventView.vue";

const routes = [
    {
        path: '/',
        name: 'homeRoute',
        component: HomeView
    },
    {
        path: '/about',
        name: 'aboutRoute',
        component: AboutView
    },
    {
        path: '/event/new',
        name: 'addNewEventRoute',
        component: AddNewEventView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
