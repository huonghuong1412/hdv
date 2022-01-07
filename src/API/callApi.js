import axios from 'axios'
import { API_URL } from './../constants'
export default function callAPI(path, method, body) {
    return axios({
        method: method,
        url: `${API_URL}/${path}`,
        data: body
    }).catch((err) => {
        console.log(err);
    })
}