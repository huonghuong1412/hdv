import {
    API_URL,
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_SUCCESS,
    GET_PRODUCT_BY_ID_SUCCESS,
    ADD_PRODUCT,
    DELETE_PRODUCT,
    UPDATE_PRODUCT
    // SEARCH_PRODUCTS_REQUEST,
    // SEARCH_PRODUCTS_SUCCESS
} from '../constants'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';

axios.defaults.baseURL = API_URL;
toast.configure({
    autoClose: 2000,
    draggable: false,
    limit: 3,
});


export const searchByPage = (searchObject, category, subcategory) => dispatch => {
    dispatch({
        type: GET_ALL_PRODUCTS_REQUEST
    })
    axios.get(`/api/product/danh-muc/${category}/${subcategory}?page=${searchObject.page}&limit=${searchObject.limit}&keyword=${searchObject.keyword}`)
        .then((res) => {
            dispatch({
                type: GET_ALL_PRODUCTS_SUCCESS,
                products: res.data.content,
                totalProducts: res.data.totalElements,
            })
        })
        .catch((err) => console.log(err));
}

export const searchByCategory = (searchObject, category, subcategory) => {
    return axios.get(`/api/product/danh-muc/${category}/${subcategory}?page=${searchObject.page}&limit=${searchObject.limit}&keyword=${searchObject.keyword}`)
}

export const getAllProducts = (searchObject) => dispatch => {
    dispatch({
        type: GET_ALL_PRODUCTS_REQUEST
    })
    axios.get(`/api/product/search?page=${searchObject.page}&limit=${searchObject.limit}&keyword=${searchObject.keyword}`)
        .then((res) => {
            dispatch({
                type: GET_ALL_PRODUCTS_SUCCESS,
                products: res.data.content,
                totalProducts: res.data.totalElements,
            })
        })
        .catch((err) => console.log(err));
}

export const getAllProductToImport = () => dispatch => {
    dispatch({
        type: GET_ALL_PRODUCTS_REQUEST
    })
    axios.get(`/api/product/search`)
        .then((res) => {
            dispatch({
                type: GET_ALL_PRODUCTS_SUCCESS,
                products: res.data.content,
                totalProducts: res.data.totalElements,
            })
        })
        .catch((err) => console.log(err));
}



export const getProductById = (id) => dispatch => {
    // dispatch({
    //     type: GET_PRODUCT_BY_ID_REQUEST
    // })
    axios.get(`/api/product/san-pham/${id}`)
        .then((res) => {
            // console.log(res);
            dispatch({
                type: GET_PRODUCT_BY_ID_SUCCESS,
                payload: res.data
            })
        })
        .catch((err) => console.log(err));
}

export const addProduct = (product) => dispatch => {
    console.log(product);
    axios.post('/api/product', product)
        .then((res) => {
            toast.success("Thêm sản phẩm thành công");
            dispatch({
                type: ADD_PRODUCT,
                payload: res.data
            })
        })
        .catch((err) => {
            console.log(err);
        })
}

export const updateProduct = (product) => dispatch => {
    axios.put(`/api/product/${product.id}`, product)
        .then((res) => {
            toast.success("Sửa sản phẩm thành công");
            dispatch({
                type: UPDATE_PRODUCT,
                payload: product
            })
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
}

export const deleteProduct = (productId) => dispatch => {
    axios.delete(`/api/product/${productId}`)
        .then((res) => {
            toast.success("Xoá sản phẩm thành công");
            dispatch({
                type: DELETE_PRODUCT,
                payload: productId
            })
        })
        .catch((err) => {
            console.log(err);
        })
}