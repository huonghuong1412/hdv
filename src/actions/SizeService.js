import axios from 'axios'
import {API_URL} from '../constants'

export const getAllSize = () => {
    return axios.get(`${API_URL}/api/size`)
}
export const addSize = (data) => {
    return axios.post(`${API_URL}/api/size`, data)
}
export const updateSize = (data) => {
    return axios.put(`${API_URL}/api/size/${data.id}`, data)
}
export const deleteSize = (id) => {
    return axios.delete(`${API_URL}/api/size/${id}`)
}
export const checkCode = (id, code) => {
    const config = { params: {id: id, code: code } };
    return axios.get(
        `${API_URL}/api/size/checkCode`,
        config
    )
}
