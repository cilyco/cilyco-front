import {api} from "@/api/fetch";

export const getStatistiques = () => {
  return api({
    method: 'get',
    url: '/statistique',
  })
}