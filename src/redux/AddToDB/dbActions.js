import { ADD_TO_DB } from "./dbActionType"

// Add to database Action Create
export const addToDBAction = (productInfo) => {
    return {
        type: ADD_TO_DB,
        payload: { product: productInfo }
    }
}