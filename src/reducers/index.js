import { combineReducers } from 'redux'
import productReducer from './productReducer'
import cartReducer from './cartReducer'
import authReducer from './auth'
import errorReducer from './errors'
import category from './category'
import comment from './comment'

const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
    auth: authReducer,
    error: errorReducer,
    category: category,
    comment: comment
})

export default rootReducer;