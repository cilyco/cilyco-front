import { api } from './fetch'

export const getVehicules = () => {
  return api({
    method: 'get',
    url: `/vehicule`,
  })
}
export const getVehicule = (id) => {
  return api({
    method: 'get',
    url: `/vehicule/${id}`,
  })
}
export const setVehicule = (data) => {
    return api({
        method: 'post',
        url: `/vehicule`,
        data
    })
}
