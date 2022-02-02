import { createFetch } from '@vueuse/core'
// import { useUser } from "../store/user";

export let useFetch = createFetch({
    baseUrl: 'http://127.0.0.1:5984/test',
    options: {
        async beforeFetch({ options }) {
            // options.headers.Authorization = `Bearer ${useUser.token}`
            options.headers = {
                ...options.headers,
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            }

            console.log(options)
            return { options }
        },
    },
    fetchOptions: {
        mode: 'no-cors',
    },
})

export let useFetchLogin = createFetch({
    baseUrl: 'http://127.0.0.1',
    fetchOptions: {
        mode: 'cors',
    },
})