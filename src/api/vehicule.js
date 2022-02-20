import { api } from './fetch'

let getVehicules = () => {
    return api({
        method: 'get',
        url: `/vehicule`,
    })
}
let setVehicule = (data) => {
    return api({
        method: 'post',
        url: `/vehicule`,
        data
    })
}

export {
    getVehicules,
    setVehicule
}
