import axios from 'axios'
import {API_URL} from '../constants'


export const uploadImage = (file) => {
    const url = API_URL + "/api/upload/image";
    let formData = new FormData();
    formData.append('File', file);
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }
    return axios.post(url, formData, config)
  }
  