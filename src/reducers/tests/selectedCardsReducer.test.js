import selectedCardsReducer from '../selectedCardsReducer';
import * as actions from '../../actions';
import * as mocks from '../../mocks/mockCards';

describe("Selected Cards Reducer", () => {
  it("should return the default state", () => {
    const expected = [];

    expect(selectedCardsReducer(undefined, [])).toEqual(expected);
  });

  it("should add a selected card to state", () => {
    const expected = [mocks.mockCard];

    expect(selectedCardsReducer(undefined, actions.addSelectedCard(mocks.mockCard))).toEqual(expected)
  });

  it("should add multiple selected cards to state", () => {
    const expected = [...mocks.mockCards];

    expect(selectedCardsReducer(undefined, actions.addSelectedCards(mocks.mockCards))).toEqual(expected)
  });

  it("should remove selected card from state", () => {
    const expected = [mocks.mockCard];
    const toDelete = mocks.cardToDelete;

    expect(selectedCardsReducer(mocks.mockCards, actions.removeSelectedCard(toDelete))).toEqual(expected)
  });

  it("should remove all selected cards from state", () => {
    const expected = [];

    expect(selectedCardsReducer(mocks.mockCards, actions.removeSelectedCards(mocks.mockCards))).toEqual(expected)
  });
});
