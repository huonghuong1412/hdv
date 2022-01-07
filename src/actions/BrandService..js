import axios from 'axios'
import {API_URL} from '../constants'

export const getAllBrand = () => {
    return axios.get(`${API_URL}/api/brand`)
}

export const addBrand = (brand) => {
    return axios.post(`${API_URL}/api/brand`, brand)
}

export const updateBrand = (brand) => {
    return axios.put(`${API_URL}/api/brand/${brand.id}`, brand)
}

export const deleteBrand = (id) => {
    return axios.delete(`${API_URL}/api/brand/${id}`)
}

export const checkCode = (id, code) => {
    const config = { params: {id: id, code: code } };
    return axios.get(
        `${API_URL}/api/brand/checkCode`,
        config
    )
}
