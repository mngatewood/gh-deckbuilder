import addDecksReducer from '../addDecksReducer';
import * as actions from '../../actions';
import * as mocks from '../../mocks/mockCards';

describe("Add Decks Reducer", () => {

  it("should return the default state", () => {
    const expected = [];

    expect(addDecksReducer(undefined, 'abc')).toEqual(expected);
  });

  it("should add decks to state", () => {
    const expected = mocks.mockMultiDecks;

    expect(addDecksReducer([],
      actions.addDecks(mocks.mockMultiDecks))).toEqual(expected);
  });
});
