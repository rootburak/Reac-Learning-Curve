import { ActionTypes } from "../Contants/actionTypes"
export const setProduct = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}
export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}
