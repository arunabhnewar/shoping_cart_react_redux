import { ADD_TO_DB } from './dbActionType';
import initialState from './initialState';

// Create reducer function
const addToDBReducer = (state = initialState, action) => {
    // state cloned
    const newState = structuredClone(state)

    switch (action.type) {
        case ADD_TO_DB:
            newState.push(action.payload.product)
            return newState;

        default:
            return state;
    }
}

export default addToDBReducer;