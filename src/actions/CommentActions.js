import {
    API_URL,
    ADD_COMMENT,
    GET_ALL_COMMENT_BY_PRODUCT,
    GET_ALL_COMMENT
} from '../constants'
import axios from 'axios'

export const addComment = (comment) => dispatch => {
    const token = localStorage.getItem("token");
    const headers = { Authorization: `Bearer ${token}` }
    axios({
        method: "POST",
        data: comment,
        headers: headers,
        url: `${API_URL}/api/comment`
    })
        .then((res) => {
            dispatch({
                type: ADD_COMMENT,
                payload: res.data
            });
        })
        .catch((err) => {
            console.log(err);
        })
}

export const getCommentByProduct = (searchObject) => {
    return dispatch => {
        axios.get(`${API_URL}/api/comment/search?product=${searchObject.product}&page=${searchObject.page}&limit=${searchObject.limit}`)
            .then((res) => {
                dispatch({
                    type: GET_ALL_COMMENT_BY_PRODUCT,
                    comments: res.data.content,
                    totalComments: res.data.totalElements,
                })
            })
            .catch((err) => console.log(err));
    }
}

export const getAllComments = (searchObject) => {
    return dispatch => {
        axios.get(`${API_URL}/api/comment/all?page=${searchObject.page}&limit=${searchObject.limit}&keyword=${searchObject.keyword}`)
            .then((res) => {
                dispatch({
                    type: GET_ALL_COMMENT,
                    comments: res.data.content,
                    totalComments: res.data.totalElements,
                })
            })
            .catch((err) => console.log(err));
    }
    // return axios.get(`${API_URL}/api/comment/all?page=${searchObject.page}&limit=${searchObject.limit}&keyword=${searchObject.keyword}`)
}