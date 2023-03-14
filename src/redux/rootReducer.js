import { combineReducers } from "redux";
import cartReducer from "./AddToCart/cartReducer";
import addToDBReducer from "./AddToDB/addToDBReducer";

// Create RootReducer function use combine reducer function
const rootReducer = combineReducers({
    products: addToDBReducer,
    carts: cartReducer,
})

export default rootReducer;