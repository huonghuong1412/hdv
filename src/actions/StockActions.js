import axios from 'axios'
import { API_URL } from '../constants'

export const importProduct = (data, id) => {
    return axios.put(`${API_URL}/api/stock/${id}`, data)
}