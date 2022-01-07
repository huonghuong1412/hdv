import {
    API_URL,
    SET_CURRENT_USER,
    GET_CURRENT_USER,
    GET_ERRORS
} from '../constants'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import setHeader from '../helpers/setHeader'
import { toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

export const login = (data, history) => {
    const {username, password} = data;
    return dispatch => {
        axios({
            method: "POST",
            data: {username, password},
            url: `${API_URL}/api/auth/login`
        })
            .then((res) => {
                toast.success("Đăng nhập thành công")
                const token = res.data.token;
                const roles = res.data.roles;
                const username = res.data.username;
                const id = res.data.id;
                localStorage.setItem("token", token);
                localStorage.setItem("roles", roles);
                localStorage.setItem("username", username)
                localStorage.setItem("user_id", id)
                const decoded = jwtDecode(token);
                dispatch(setCurrentUser(decoded));
                dispatch(getErrors({}));
                if(username === "admin") {
                    window.location.href = ("/admin");
                    // history.push("/admin");
                } else if(username === "staffstock" || username === "staffbusiness") {
                    window.location.href = ("/admin/products/sach");
                    // history.push("/admin");
                } else if(username === "staffsale") {
                    window.location.href = ("/admin/orders");
                    // history.push("/admin");
                }
                 else {
                    history.push("/");
                }
            })
            .catch((err) => {
                // const lodash = lodash;
                if(err) {
                    console.log(err);
                    // dispatch(getErrors(lodash.get(err), "response.data"))
                    dispatch(getErrors(err.response.data))
                }
            })
    }
}

export const register = (data, history) => {
    return dispatch => {
        axios({
            method: "POST",
            data: JSON.stringify(data),
            url: `${API_URL}/api/auth/register`,
            headers: {
                'content-type': 'application/json'
            }
        })
        .then((res) => {
            toast.success("Đăng ký thành công")
            console.log(res);
            dispatch(getErrors({}));
            history.push("/login");
        })
        .catch((err) => {
            if(err) {
                console.log(err);
                console.log(err.response.data);
                dispatch(getErrors(err.response.data))
            }
        })
    }
}

export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}

export const getCurrentUser = () => {
    const token = localStorage.getItem("token");
    setHeader(token);
    const headers = { Authorization: `Bearer ${token}` }
    return dispatch => {
        axios({
            method: "GET",
            headers: headers,
            url: `${API_URL}/api/auth/info`
        })
        .then((res) => {
            dispatch({
                type: GET_CURRENT_USER,
                payload: res.data
            });
        })
        .catch((err) => {
           console.log(err);
        })
    }
}

export const getErrors = (errors) => {
    return {
        type: GET_ERRORS,
        payload: errors
    }
}

export const logout = () => {
    return dispatch => {
        toast.success("Đăng xuất thành công")
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("roles");
        localStorage.removeItem("user_id");
        localStorage.removeItem("CART");
        dispatch(setCurrentUser({}));
        setHeader();
    }
}

export const getAllUser = () => {
    const token = localStorage.getItem("token");
    setHeader(token);
    const headers = { Authorization: `Bearer ${token}` }
    return axios.get(`${API_URL}/api/auth/all/user`, {headers: headers})
}