import axios from 'axios'

import { GATEWAY_API } from '@/configuration'


axios.defaults.baseURL = GATEWAY_API


export default  {
  getAllProducts(offset: number) {
    return axios.get(`products?offset=${offset}&limit=6`)
  },
  getSingleProduct(id: string) {
    return axios.get(`products/${id}`)
  }
}
