import * as actions from './memory'

describe('actions', () => {
  it('should fire request memory store on memory store', () => {
    const currentInput = 10;
    const expectedAction = {
      type: actions.REQUEST_MEMORY_STORE,
      currentInput
    };
    expect(actions.store(currentInput)).toEqual(expectedAction);
  });
  it('should fire memory remoce on memory remove click', () => {
    const expectedAction = {
      type: actions.MEMORY_REMOVE,
    };
    expect(actions.remove()).toEqual(expectedAction);
  });
  it('should fire memory clear on memory clear click', () => {
    const expectedAction = {
      type: actions.MEMORY_CLEAR,
    };
    expect(actions.clear()).toEqual(expectedAction);
  });
  it('should fire request memory recall on memory recall click', () => {
    const expectedAction = {
      type: actions.REQUEST_MEMORY_RECALL,
    };
    expect(actions.recall()).toEqual(expectedAction);
  });
})