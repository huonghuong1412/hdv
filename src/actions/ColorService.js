import axios from 'axios'
import {API_URL} from '../constants'

export const getAllColor = () => {
    return axios.get(`${API_URL}/api/color`)
}
export const addColor = (data) => {
    return axios.post(`${API_URL}/api/color`, data)
}
export const updateColor = (data) => {
    return axios.put(`${API_URL}/api/color/${data.id}`, data)
}
export const deleteColor = (id) => {
    return axios.delete(`${API_URL}/api/color/${id}`)
}
export const checkCode = (id, code) => {
    const config = { params: {id: id, code: code } };
    return axios.get(
        `${API_URL}/api/color/checkCode`,
        config
    )
}
