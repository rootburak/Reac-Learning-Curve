import { ActionTypes } from "../Contants/actionTypes";

const initalState = {
    products: [{
        id: 1,
        name: 'Product 1',
        price: 100
    }]
}
export const productReducer = (state = initalState,{type,payload}) =>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state
        default:
            return state
    }
}