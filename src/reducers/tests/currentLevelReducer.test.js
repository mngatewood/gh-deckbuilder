import currentLevelReducer from '../currentLevelReducer';
import * as actions from '../../actions';

describe("Current Level Reducer", () => {

  it("should return the default state", () => {
    const expected = 1;

    expect(currentLevelReducer(undefined, 'abc')).toEqual(expected);
  });

  it("should increase current level in state", () => {
    const expected = 2;

    expect(currentLevelReducer(1,
      actions.increaseCurrentLevel(2))).toEqual(expected);
  });

  it("should decrease current level in state", () => {
    const expected = 1;

    expect(currentLevelReducer(2,
      actions.decreaseCurrentLevel(1))).toEqual(expected);
  });
});
