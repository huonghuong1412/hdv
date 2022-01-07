import * as types from '../constants'
let initialState = {
    comments: [],
    totalComments: 0,
    comment: {}
}

const comment = (state = initialState, action) => {
    switch (action.type) {

        case types.GET_ALL_COMMENT_BY_PRODUCT:
            return {
                ...state,
                comments: action.comments,
                totalComments: action.totalComments
            }
        case types.GET_ALL_COMMENT:
            return {
                ...state,
                comments: action.comments,
                totalComments: action.totalComments
            }

        case types.ADD_COMMENT:
            state.comments.push(action.payload)
            return {
                ...state
            }

        default:
            return state;
    }
}

export default comment;