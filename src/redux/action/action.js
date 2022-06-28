import { ActionTypes } from "./actionTypes"

export const Addproduct = (products) => {
    return {
        type: ActionTypes.ADD_PRODUCT,
        payload: products
    }
}

export const Deleteproduct = (products) => {
    return {
        type: ActionTypes.DELETE_PRODUCTS,
        payload: products
    }
}

export const Updateproduct = (products) => {
    return {
        type: ActionTypes.UPDATE_PRODUCT,
        payload: products
    }
}

export const Getproducts = (products) => {
    return {
        type: ActionTypes.GET_PRODUCTS,
        payload: products
    }
}