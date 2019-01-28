export const CLICK_DIGIT = 'CLICK_DIGIT';
export const clickDigit = (digit) => ({
    type: CLICK_DIGIT,
    digit,
})

export const SET_OPERATOR = 'SET_OPERATOR';
export const setOperator = (operator) => ({
    type: SET_OPERATOR,
    operator,
})

export const CLICK_EQUAL = 'CLICK_EQUAL';
export const clickEqual = () => ({
    type: CLICK_EQUAL,
})

export const CHANGE_SIGN = 'CHANGE_SIGN';
export const changeSign = () => ({
    type: CHANGE_SIGN,
})

export const ALL_CLEAR = 'ALL_CLEAR';
export const allClear = () => ({
    type: ALL_CLEAR,
})

export const GET_PERCENT = 'GET_PERCENT'
export const getPercent = () => ({
    type: GET_PERCENT,
})

export const SET_INPUT = 'SET_INPUT'