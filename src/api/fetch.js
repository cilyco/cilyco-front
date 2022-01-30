import { createFetch } from '@vueuse/core'
import { useUser } from "../store/user";

export let useFetch = createFetch({
    baseUrl: 'http://127.0.0.1:3000',
    options: {
        async beforeFetch({ options }) {
            options.headers.Authorization = `Bearer ${useUser.token}`

            return { options }
        },
    },
    fetchOptions: {
        mode: 'cors',
    },
})

export let useFetchLogin = createFetch({
    baseUrl: 'http://127.0.0.1',
    fetchOptions: {
        mode: 'cors',
    },
})