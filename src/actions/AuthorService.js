import axios from 'axios'
import {API_URL} from '../constants'

export const getAllAuthor = () => {
    return axios.get(`${API_URL}/api/author`)
}

export const addAuthor = (author) => {
    return axios.post(`${API_URL}/api/author`, author)
}

export const updateAuthor = (author) => {
    return axios.put(`${API_URL}/api/author/${author.id}`, author)
}

export const deleteAuthor = (id) => {
    return axios.delete(`${API_URL}/api/author/${id}`)
}

export const checkCode = (id, code) => {
    const config = { params: {id: id, code: code } };
    return axios.get(
        `${API_URL}/api/author/checkCode`,
        config
    )
}
