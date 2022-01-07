import {
    GET_CURRENT_USER,
    SET_CURRENT_USER
} from '../constants'

const initialState = {
    user: {},
    auth: {}
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                user: action.payload
            }
        case GET_CURRENT_USER:
            return {
                ...state,
                auth: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default authReducer;