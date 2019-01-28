import * as actions from './arithmetic'

describe('actions', () => {
  it('should fire click digti on digit click', () => {
    const digit = 1;
    const expectedAction = {
      type: actions.CLICK_DIGIT,
      digit
    };
    expect(actions.clickDigit(digit)).toEqual(expectedAction);
  });
  it('should fire set operator on operator click', () => {
    const operator = 'x';
    const expectedAction = {
      type: actions.SET_OPERATOR,
      operator
    };
    expect(actions.setOperator(operator)).toEqual(expectedAction);
  });
  it('should fire set click equal on equal click', () => {
    const expectedAction = {
      type: actions.CLICK_EQUAL,
    };
    expect(actions.clickEqual()).toEqual(expectedAction);
  });
  it('should fire set change sign on change sign click', () => {
    const expectedAction = {
      type: actions.CHANGE_SIGN,
    };
    expect(actions.changeSign()).toEqual(expectedAction);
  });
  it('should fire clear on clear click', () => {
    const expectedAction = {
      type: actions.ALL_CLEAR,
    };
    expect(actions.allClear()).toEqual(expectedAction);
  });
  it('should fire set get percent on percent click', () => {
    const expectedAction = {
      type: actions.GET_PERCENT,
    };
    expect(actions.getPercent()).toEqual(expectedAction);
  });
})