import { createGlobalState, useStorage } from '@vueuse/core'

export const useUser = createGlobalState(() =>
        useStorage('vue-use-local-storage', {
            nom: "Ronan",
            token: ""
        }),
)