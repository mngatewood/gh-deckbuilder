import cardsReducer from '../cardsReducer';
import * as actions from '../../actions';
import * as mocks from '../../mocks/mockCards';


describe("Cards Reducer", () => {

  it("should return the default state", () => {
    const expected = [];

    expect(cardsReducer(undefined, 'boo')).toEqual(expected)
  });

  it.skip("should add a card to state", () => {
    const expected = [mocks.mockCard];

    expect(cardsReducer(undefined, actions.addCard(mocks.mockCard))).toEqual(expected)
  });

  it("should add multiple cards to state", () => {

  });
});
