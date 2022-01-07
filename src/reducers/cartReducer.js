import * as types from '../constants'

const cart = JSON.parse(localStorage.getItem('CART'));

const initialState = cart ? cart : []

var findIndex = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    } else {
        index = -1;
    }
    return index;
}

const cartReducer = (state = initialState, action) => {
    var { product, quantity } = action;
    var index = -1;
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findIndex(state, product);
            if (index !== -1) {
                state[index].quantity += quantity;
            } else {
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem("CART", JSON.stringify(state))
            return [...state]

        case types.DELETE_ITEM_IN_CART:
            index = findIndex(state, product);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem("CART", JSON.stringify(state))
            return [...state];

        case types.UPDATE_ITEM_IN_CART:
            index = findIndex(state, product)
            if (index !== -1) {
                state[index].quantity = quantity;
            }
            if (quantity <= 0) {
                state.splice(index, 1);
            }
            localStorage.setItem('CART', JSON.stringify(state))
            return [...state]
        case types.CART_COMPLETE:
            localStorage.setItem('CART', JSON.stringify([]));
            state = [];
            return [...state];
        default:
            return [...state];
    }
}

export default cartReducer;