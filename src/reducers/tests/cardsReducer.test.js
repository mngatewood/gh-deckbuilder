import cardsReducer from '../cardsReducer';
import * as actions from '../../actions';
import * as mocks from '../../mocks/mockCards';


describe("Cards Reducer", () => {

  it("should return the default state", () => {
    const expected = [];

    expect(cardsReducer(undefined, 'boo')).toEqual(expected)
  });

  it("should add multiple cards to state", () => {
    const expected = mocks.mockCards;

    expect(cardsReducer([], actions.addCards(mocks.mockCards))).toEqual(expected)
  });
});
