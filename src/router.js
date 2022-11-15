import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue'
import Cuisine from './components/Cuisine'
import ResidentsList from './view/resident/ResidentsList'
import Resident from './components/Resident'
import Vehicule from './components/Vehicule'
import Stock from './components/Stock'
import Comptabilite from './components/Comptabilite'
import AgentList from './view/agent/AgentList'
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
        component: ResidentsList
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
        path: '/agents',
        name: 'Agents',
        component: AgentList
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
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})
export default router