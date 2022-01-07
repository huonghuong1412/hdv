import axios from 'axios'
import {API_URL} from '../constants'

export const getAllPublisher = () => {
    return axios.get(`${API_URL}/api/publisher`)
}
export const addPublisher = (data) => {
    return axios.post(`${API_URL}/api/publisher`, data)
}
export const updatePublisher = (data) => {
    return axios.put(`${API_URL}/api/publisher/${data.id}`, data)
}
export const deletePublisher = (id) => {
    return axios.delete(`${API_URL}/api/publisher/${id}`)
}
export const checkCode = (id, code) => {
    const config = { params: {id: id, code: code } };
    return axios.get(
        `${API_URL}/api/publisher/checkCode`,
        config
    )
}
