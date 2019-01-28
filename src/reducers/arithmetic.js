import {
    CLICK_DIGIT,
    SET_INPUT,
    SET_OPERATOR,
    CLICK_EQUAL,
    CHANGE_SIGN,
    ALL_CLEAR,
} from '../actions';

const initialState = {
    result: 0,
    currentInput: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_DIGIT: {
            const stateCopy = Object.assign({}, state);
            stateCopy.currentInput = (stateCopy.currentInput * 10) + action.digit;
            return stateCopy;
        }
        case SET_INPUT: {
            const stateCopy = Object.assign({}, state);
            stateCopy.currentInput = action.input;
            return stateCopy;
        }
        case SET_OPERATOR: {
            const stateCopy = Object.assign({}, state);
            stateCopy.currentOperator = action.operator
            if (stateCopy.currentInput) {
                stateCopy.result = stateCopy.currentInput;
                stateCopy.currentInput = 0
            }
            return stateCopy;
        }
        case CLICK_EQUAL: {
            const stateCopy = Object.assign({}, initialState);
            switch(state.currentOperator) {
                case '+':
                    stateCopy.result = state.result + state.currentInput;
                    break;
                case '-':
                    stateCopy.result = state.result - state.currentInput;
                    break;
                case 'x':
                    stateCopy.result = state.result * state.currentInput;
                    break;
                case '÷':
                    stateCopy.result = state.result / state.currentInput;
                    break;
                default:
                    break;
            }
            
            return stateCopy;
        }
        case CHANGE_SIGN: {
            const stateCopy = Object.assign({}, state);
            stateCopy.currentInput = stateCopy.currentInput * -1;
            return stateCopy;
        }
        case ALL_CLEAR: {
            return initialState;
        }
        default:
            return state;
    }
}

export default reducer;