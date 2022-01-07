import axios from 'axios'
import {API_URL} from '../constants'
export const getAllCity = () => {
    return axios({
        method: "GET",
        url: `${API_URL}/api/tinhthanh/city`
    })
}

export const getAllDistrictByCityId = (id) => {
    return axios.get(`${API_URL}/api/tinhthanh/city/${id}/district`)
}

export const getAllWardByDistrictId = (id) => {
    return axios.get(`${API_URL}/api/tinhthanh/district/${id}/ward`)
}