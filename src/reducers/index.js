import { combineReducers } from 'redux';
import calculator from './arithmetic';
import memory from './memory';

const rootReducer = combineReducers({
    calculator,
    memory,
})

export default rootReducer
