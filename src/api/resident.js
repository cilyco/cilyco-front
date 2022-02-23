import {api} from "@/api/fetch";

let getResidents = () => {
    return api({
        method: 'get',
        url: '/resident',
    })
}

let addResident = (data) => {
    return api({
        method: 'post',
        url: '/resident',
        data
    })
}

let getResident = (id) => {
    return api({
        method: 'get',
        url: `/resident/${id}`,
    })
}

export {
    api,
    getResidents,
    getResident,
    addResident
}