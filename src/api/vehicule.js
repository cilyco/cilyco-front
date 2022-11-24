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

export const addVehicule = (data) => {
  return api({
    method: 'post',
    url: `/vehicule`,
    data
  })
}

export const editVehicule = (data) => {
  return api({
    method: 'patch',
    url: `/vehicule/${data.id}`,
    data
  })
}
