import {
    MEMORY_STORE,
    MEMORY_REMOVE,
    MEMORY_CLEAR,
} from '../actions';

const initialState = {
    currentMemory: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case MEMORY_STORE: {
            const stateCopy = Object.assign({}, state);
            stateCopy.currentMemory.push(action.currentInput);
            return stateCopy
        }
        case MEMORY_REMOVE: {
            const stateCopy = Object.assign({}, state);
            stateCopy.currentMemory.pop();
            return stateCopy
        }
        case MEMORY_CLEAR: {
            const stateCopy = Object.assign({}, state);
            stateCopy.currentMemory = [];
            return stateCopy
        }
        default:
            return state;
    }
}

export default reducer;