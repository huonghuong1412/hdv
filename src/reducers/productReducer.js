import * as types from '../constants'
let initialState = {
    listProduct: [],
    totalProducts: 0,
    category: '',
    pagination: {},
    loading: true,
    productDetail: {}
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_ALL_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case types.GET_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                listProduct: action.products,
                totalProducts: action.totalProducts,
            }
        case types.SEARCH_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case types.SEARCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                listProduct: action.payload,
            }
        case types.GET_PRODUCT_BY_ID_REQUEST:
            return {
                ...state,
                loading: true
            }
        case types.GET_PRODUCT_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                productDetail: action.payload
            }
        case types.ADD_PRODUCT:
            state.listProduct.push(action.payload);
            return {
                ...state
            }
        case types.UPDATE_PRODUCT:
            let newList = state.listProduct.filter(item => {
                return item.id !== action.payload.id
            })
            return {
                ...state,
                listProduct: [...newList, action.payload]
            }
        case types.DELETE_PRODUCT:
            return {
                ...state,
                listProduct: state.listProduct.filter((product) => {
                    return product.id !== action.payload
                })
            }
        default:
            return state;
    }
}

export default productReducer;