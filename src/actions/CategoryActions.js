import axios from 'axios'
import {
    GET_CATEGORY,
    API_URL,
    GET_SUB_CATEGORY
} from '../constants'

export const getAllCategory = () => dispatch => {
    axios({
        method: "GET",
        url: `${API_URL}/api/category`
    })
        .then((res) => {
            dispatch({
                type: GET_CATEGORY,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const getAllSubCategory = () => dispatch => {
    axios({
        method: "GET",
        url: `${API_URL}/api/subcategory`
    })
        .then((res) => {
            dispatch({
                type: GET_SUB_CATEGORY,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}

export const getSubCategory = () => {
    return axios.get(`${API_URL}/api/subcategory`)
}
export const getCategory = () => {
    return axios.get(`${API_URL}/api/category`)
}

// category

export const checkCode = (id, code) => {
    const config = { params: {id: id, code: code } };
    return axios.get(
        `${API_URL}/api/category/checkCode`,
        config
    )
}

export const addCategory = (category) => {
    return axios.post(`${API_URL}/api/category`, category)
}

export const updateCategory = (category) => {
    return axios.put(`${API_URL}/api/category/${category.id}`, category)
}

export const deleteCategory = (id) => {
    return axios.delete(`${API_URL}/api/category/${id}`)
}

// sub category

export const checkSubCode = (id, code) => {
    const config = { params: {id: id, code: code } };
    return axios.get(
        `${API_URL}/api/subcategory/checkCode`,
        config
    )
}

export const addSubCategory = (category) => {
    return axios.post(`${API_URL}/api/subcategory`, category)
}

export const updateSubCategory = (category) => {
    return axios.put(`${API_URL}/api/subcategory/${category.id}`, category)
}

export const deleteSubCategory = (id) => {
    return axios.delete(`${API_URL}/api/subcategory/${id}`)
}