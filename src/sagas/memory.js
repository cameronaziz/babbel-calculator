import { put, select, take } from 'redux-saga/effects';
import { 
    REQUEST_MEMORY_RECALL,
    REQUEST_MEMORY_STORE,
    MEMORY_STORE,
    SET_INPUT,
} from '../actions';

export function* requestMemoryRecall() {
    yield take(REQUEST_MEMORY_RECALL);
    const memory = yield select((state) => state.memory.currentMemory)
    yield put({
        type: SET_INPUT,
        input: memory[memory.length - 1],
    });
}

export function* requestMemoryStore() {
    yield take(REQUEST_MEMORY_STORE);
    const currentInput = yield select((state) => state.calculator.currentInput);
    yield put({
        type: MEMORY_STORE,
        currentInput,
    });
}
