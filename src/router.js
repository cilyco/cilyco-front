import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue'
import Cuisine from './components/Cuisine'
import Residents from './components/Residents'
import Vehicule from './components/Vehicule'
import Stock from './components/Stock'
import Comptabilite from './components/Comptabilite'
import Agent from './components/Agent'
import Utilisateur from './components/Utilisateur'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/cuisine',
        name: 'Cuisine',
        component: Cuisine
    },
    {
        path: '/resident',
        name: 'Resident',
        component: Residents
    },
    {
        path: '/vehicule',
        name: 'Véhicule',
        component: Vehicule
    },
    {
        path: '/comptabilite',
        name: 'Comptabilite',
        component: Comptabilite
    },
    {
        path: '/stock',
        name: 'Stock',
        component: Stock
    },
    {
        path: '/agent',
        name: 'Agent',
        component: Agent
    },
    {
        path: '/utilisateur',
        name: 'Utilisateur',
        component: Utilisateur
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router