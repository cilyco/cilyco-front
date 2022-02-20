import axios from "axios";

export let api = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    timeout: 1000,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json'
    },
});
