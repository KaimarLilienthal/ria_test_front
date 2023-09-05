import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddNewEventView from "@/views/AddNewEventView.vue";
import ParticipantView from "@/views/ParticipantView.vue";
import ParticipantInfoView from "@/views/ParticipantInfoView.vue";
import ErrorView from "@/views/ErrorView.vue";

const routes = [
    {
        path: '/',
        name: 'homeRoute',
        component: HomeView
    },
    {
        path: '/error',
        name: 'errorRoute',
        component: ErrorView
    },
    {
        path: '/event/new',
        name: 'addNewEventRoute',
        component: AddNewEventView
    },
    {
        path: '/participant',
        name: 'participantRoute',
        component: ParticipantView
    },
    {
        path: '/participant/info',
        name: 'participantInfoRoute',
        component: ParticipantInfoView
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
