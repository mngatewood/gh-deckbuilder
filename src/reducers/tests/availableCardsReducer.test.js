import availableCardsReducer from '../availableCardsReducer';
import * as actions from '../../actions';
import * as mocks from '../../mocks/mockCards';

describe("Available Cards Reducer", () => {

  it("should return the default state", () => {
    const expected = [];

    expect(availableCardsReducer(undefined, 'abc')).toEqual(expected);
  });

  it("should add an available card", () => {
    const expected = [mocks.mockCard];

    expect(availableCardsReducer(undefined,
      actions.addAvailableCard(mocks.mockCard))).toEqual(expected);
  });

  it("should add multiple available cards", () => {
    const expected = mocks.mockCards;

    expect(availableCardsReducer(undefined,
      actions.addAvailableCards(mocks.mockCards))).toEqual(expected);
  });

  it("should remove an available card", () => {
    const expected = [mocks.mockCard];

    expect(availableCardsReducer(mocks.mockCards,
      actions.removeAvailableCard(2))).toEqual(expected);
  });
});
