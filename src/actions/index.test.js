import * as actions from './index.js';
import * as mocks from '../mocks/mockCards';

describe("Generic Card Actions", () => {
  it("should create an action to add multiple cards", () => {
    const expectedAction = {
      type: 'ADD_CARDS',
      cards: mocks.mockCards
    };

    expect(actions.addCards(mocks.mockCards)).toEqual(expectedAction);
  });

  it("should create an action to remove multiple cards", () => {
    const expectedAction = {
      type: 'REMOVE_CARDS',
      cards: mocks.mockCards
    };

    expect(actions.removeCards(mocks.mockCards)).toEqual(expectedAction);
  });

});

describe("Selected Card Actions", () => {
  it("should create an action to add a selected card", () => {
    const expectedAction = {
      type: 'ADD_SELECTED_CARD',
      selectedCard: mocks.mockCard
    };

    expect(actions.addSelectedCard(mocks.mockCard)).toEqual(expectedAction);
  });

  it("should create an action to add multiple selected cards", () => {
    const expectedAction = {
      type: 'ADD_SELECTED_CARDS',
      selectedCards: mocks.mockCards
    };

    expect(actions.addSelectedCards(mocks.mockCards)).toEqual(expectedAction);
  });

  it("should create an action to remove a selected card", () => {
    const expectedAction = {
      type: 'REMOVE_SELECTED_CARD',
      selectedCard: mocks.mockCard
    };

    expect(actions.removeSelectedCard(mocks.mockCard)).toEqual(expectedAction);
  });

  it("should create an action to remove multiple selected cards", () => {
    const expectedAction = {
      type: 'REMOVE_SELECTED_CARDS'
    };

    expect(actions.removeSelectedCards(mocks.mockCards))
      .toEqual(expectedAction);
  });
});

describe("Available Card Actions", () => {
  it("should create an action to add an available card", () => {
    const expectedAction = {
      type: 'ADD_AVAILABLE_CARD',
      availableCard: mocks.mockCard
    };

    expect(actions.addAvailableCard(mocks.mockCard)).toEqual(expectedAction);
  });

  it("should create an action to add multiple available cards", () => {
    const expectedAction = {
      type: 'ADD_AVAILABLE_CARDS',
      availableCards: mocks.mockCards
    };

    expect(actions.addAvailableCards(mocks.mockCards)).toEqual(expectedAction);
  });

  it("should create an action to remove an available card", () => {
    const expectedAction = {
      type: 'REMOVE_AVAILABLE_CARD',
      availableCard: mocks.mockCard
    };

    expect(actions.removeAvailableCard(mocks.mockCard)).toEqual(expectedAction);
  });
});

describe("Class Actions", () => {
  it("should create an action to select a class", () => {
    const mockClass = "Bob the Builder";
    const expectedAction = {
      type: 'ADD_SELECTED_CLASS',
      selectedClass: mockClass
    };

    expect(actions.addSelectedClass(mockClass)).toEqual(expectedAction);
  });
});

describe("Current Level Actions", () => {
  it("should create an action to increase current level", () => {
    const mockLevel = 2;
    const expectedAction = {
      type: 'INCREASE_CURRENT_LEVEL',
      currentLevel: mockLevel
    };

    expect(actions.increaseCurrentLevel(mockLevel)).toEqual(expectedAction);
  });

  it("should create an action to decrease current level", () => {
    const mockLevel = 1;
    const expectedAction = {
      type: 'DECREASE_CURRENT_LEVEL',
      currentLevel: mockLevel
    };

    expect(actions.decreaseCurrentLevel(mockLevel)).toEqual(expectedAction);
  });
});

describe("Deck Actions", () => {
  // Note: Though 'add selected deck' and 'add decks' have different reducers,
  //  they are both in this 1 describe block

  it("should create an action to add a selected deck ID", () => {
    const mockDeckID = 3;
    const expectedAction = {
      type: 'ADD_SELECTED_DECK_ID',
      deckId: mockDeckID
    };

    expect(actions.addSelectedDeck(mockDeckID)).toEqual(expectedAction);
  });

  it("should create an action to add decks to state", () => {
    const expectedAction = {
      type: 'ADD_DECKS',
      deckArray: mocks.mockDeck
    };

    expect(actions.addDecks(mocks.mockDeck)).toEqual(expectedAction);
  });
});
