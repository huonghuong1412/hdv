import {
    GET_CATEGORY,
    GET_SUB_CATEGORY
} from '../constants'

const initialState = {
    category: [],
    subcategory: []
}

const category = (state = initialState, action) => {
    switch (action.type) {
        case GET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case GET_SUB_CATEGORY:
            return {
                ...state,
                subcategory: action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default category;