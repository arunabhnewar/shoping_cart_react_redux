import { ADD_TO_CART, DECREMENT, REMOVE_PRODUCT } from "./cartActionType";

// Add to Cart Action Create
export const addToCartAction = (productInfo) => {
    return {
        type: ADD_TO_CART,
        payload: { product: productInfo }
    }
};



// Decrement Action Create
export const decrementAction = (productId) => {
    return {
        type: DECREMENT,
        payload: { id: productId }
    }
};


// Remove Action Create
export const removeAction = (productId) => {
    return {
        type: REMOVE_PRODUCT,
        payload: { id: productId }
    }
};