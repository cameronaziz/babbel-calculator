export const REQUEST_MEMORY_STORE = 'REQUEST_MEMORY_STORE';
export const MEMORY_STORE = 'MEMORY_STORE';
export const store = (currentInput) => ({
    type: `REQUEST_MEMORY_STORE`,
    currentInput,
})

export const MEMORY_REMOVE = 'MEMORY_REMOVE';
export const remove = () => ({
    type: 'MEMORY_REMOVE',
})

export const MEMORY_CLEAR = 'MEMORY_CLEAR';
export const clear = () => ({
    type: 'MEMORY_CLEAR',
})

export const REQUEST_MEMORY_RECALL = 'REQUEST_MEMORY_RECALL';
export const recall = () => ({
    type: 'REQUEST_MEMORY_RECALL',
})