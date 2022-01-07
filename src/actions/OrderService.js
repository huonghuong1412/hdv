import axios from 'axios'
import { API_URL } from '../constants'

// http://localhost:8080/api/order/user?username=huong1

export const getAllOrder = () => {
    return axios.get(`${API_URL}/api/order`)
}

export const getAllOrderByUser = (username) => {
    return axios.get(`${API_URL}/api/order/user?username=${username}`)
}

export const addOrder = (order) => {
    return axios.post(`${API_URL}/api/order`, order)
}

export const confirmOrder = (order) => {
    return axios.put(`${API_URL}/api/order/update/${order.id}`, order)
}