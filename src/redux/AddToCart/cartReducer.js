import { ADD_TO_CART, DECREMENT, REMOVE_PRODUCT } from "./cartActionType";
import initialState from "./initialState";

// Create reducer function
const cartReducer = (state = initialState, action) => {
    // state cloned
    let newState = structuredClone(state)


    switch (action.type) {
        case ADD_TO_CART:
            const { product } = action.payload;
            const selectedProduct = newState.find(existProduct => existProduct.id === product.id);

            if (!selectedProduct) {
                const productUpdate = {
                    ...product,
                    addQuantity: 1,
                }
                newState.push(productUpdate);
            } else {
                let restProduct = newState.filter(existProduct => existProduct.id !== product.id);

                newState = [
                    ...restProduct,
                    {
                        ...selectedProduct,
                        addQuantity: (selectedProduct.addQuantity += 1)
                    }]
            }
            return newState;

        case DECREMENT:
            const { id } = action.payload;
            return newState.filter(product => {
                if (product.id !== id) {
                    return product
                } else {
                    return {
                        ...product,
                        addQuantity: product.addQuantity -= 1,
                    }
                }
            });

        case REMOVE_PRODUCT:
            return newState.filter(product => product.id !== action.payload.id)


        default:
            return state;
    }
}

export default cartReducer;