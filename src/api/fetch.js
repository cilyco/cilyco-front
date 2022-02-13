import axios from "axios";

let api = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    timeout: 1000,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json'
    },
});

export let getResidents = () => {
        return api({
            method: 'get',
            url: '/resident',
        })
    }

export let getResident = (id) => {
        return api({
            method: 'get',
            url: `/resident/${id}`,
        })
    }
