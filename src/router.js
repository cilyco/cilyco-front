import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue'
import Cuisine from './components/Cuisine'
import Residents from './components/Residents'
import Resident from './components/Resident'
import Vehicule from './components/Vehicule'
import Stock from './components/Stock'
import Comptabilite from './components/Comptabilite'
import Agent from './components/Agent'
import Utilisateur from './components/Utilisateur'
import Animation from './components/Animation'
import Lingerie from './components/Lingerie'

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
        path: '/residents',
        name: 'Residents',
        component: Residents
    },
    {
        path: '/resident/:id',
        name: 'Resident',
        component: Resident
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
    {
        path: '/animation',
        name: 'Animation',
        component: Animation
    },
    {
        path: '/lingerie',
        name: 'Lingerie',
        component: Lingerie
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router