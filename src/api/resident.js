import {api} from "@/api/fetch";

let getResidents = () => {
    return api({
        method: 'get',
        url: '/resident',
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
}