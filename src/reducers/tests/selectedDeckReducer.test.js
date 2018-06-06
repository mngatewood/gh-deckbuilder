import selectedDeckReducer from '../selectedDeckReducer';
import * as actions from '../../actions';
import * as mocks from '../../mocks/mockCards';

describe("Selected Deck Reducer", () => {

  it("should return the default state", () => {
    const expected = 0;

    expect(selectedDeckReducer(undefined, 'abc')).toEqual(expected)
  });

  it("should add selected deck ID to state", () => {
    const expected = 5

    expect(selectedDeckReducer(0, actions.addSelectedDeck(5))).toEqual(expected)
  });
});
