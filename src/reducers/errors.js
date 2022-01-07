import { GET_ERRORS } from '../constants'

const initialState = {};
const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ERRORS:
            console.log(action.payload);
            return action.payload
        default:
            return state;
    }
}

export default errorReducer;