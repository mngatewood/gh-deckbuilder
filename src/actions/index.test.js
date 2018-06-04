import * as actions from './index.js';
const mockCard = {
  id: 1,
  class: "Brute",
  name: "Sweeping Blow",
  initiative: 64,
  top_action: "Attack 2 ● Attack Pattern: 3 connected adjacent hexes, enhanceable to 4",
  bottom_action: "Move 3 Push 1 ● ^(Target all adjacent enemies)",
  image_url: "./images/cards/Brute3.png",
  card_level: 1,
  created_at: "2018-06-01T22:34:26.644Z",
  updated_at: "2018-06-01T22:34:26.644Z"
}
const mockCards =
[
  {
    id: 1,
    class: "Brute",
    name: "Sweeping Blow",
    initiative: 64,
    top_action: "Attack 2 ● Attack Pattern: 3 connected adjacent hexes, enhanceable to 4",
    bottom_action: "Move 3 Push 1 ● ^(Target all adjacent enemies)",
    image_url: "./images/cards/Brute3.png",
    card_level: 1,
    created_at: "2018-06-01T22:34:26.644Z",
    updated_at: "2018-06-01T22:34:26.644Z"
  },
  {
    class: "Brute",
    name: "Trample",
    initiative: 72,
    top_action: "Attack 3 ● ^(Pierce 2 ●)",
    bottom_action: "Move 4 ● ^Jump Attack 2 ● ● ^(Target all enemies moved through) 2 XP, LOSS",
    image_url: './images/cards/Brute1.png',
    card_level: 1
  }
]

describe("Generic Card Actions", () => {
  it("should create an action to add a card", () => {
    const expectedAction = {
      type: 'ADD_CARD',
      card: mockCard
    }

    expect(actions.addCard(mockCard)).toEqual(expectedAction);
  });

  it("should create an action to add multiple cards", () => {
    const expectedAction = {
      type: 'ADD_CARDS',
      cards: mockCards
    }

    expect(actions.addCards(mockCards)).toEqual(expectedAction);
  });

  it("should create an action to remove multiple cards", () => {
    const expectedAction = {
      type: 'REMOVE_CARDS',
      cards: mockCards
    }

    expect(actions.removeCards(mockCards)).toEqual(expectedAction);
  });

});

describe("Selected Card Actions", () => {
  it("should create an action to add a selected card", () => {
    const expectedAction = {
      type: 'ADD_SELECTED_CARD',
      selectedCard: mockCard
    }

    expect(actions.addSelectedCard(mockCard)).toEqual(expectedAction);
  });

  it("should create an action to add multiple selected cards", () => {
    const expectedAction = {
      type: 'ADD_SELECTED_CARDS',
      selectedCards: mockCards
    }

    expect(actions.addSelectedCards(mockCards)).toEqual(expectedAction)
  });

  it("should create an action to remove a selected card", () => {
    const mockCard = {
      id: 1,
      class: "Brute",
      name: "Sweeping Blow",
      initiative: 64,
      top_action: "Attack 2 ● Attack Pattern: 3 connected adjacent hexes, enhanceable to 4",
      bottom_action: "Move 3 Push 1 ● ^(Target all adjacent enemies)",
      image_url: "./images/cards/Brute3.png",
      card_level: 1,
      created_at: "2018-06-01T22:34:26.644Z",
      updated_at: "2018-06-01T22:34:26.644Z"
    }
    const expectedAction = {
      type: 'REMOVE_SELECTED_CARD',
      selectedCard: mockCard
    }

    expect(actions.removeSelectedCard(mockCard)).toEqual(expectedAction);
  });

  it("should create an action to remove multiple selected cards", () => {
    const expectedAction = {
      type: 'REMOVE_SELECTED_CARDS'
    }

    expect(actions.removeSelectedCards(mockCards)).toEqual(expectedAction)
  });
});

describe("Available Card Actions", () => {
  it("should create an action to add an available card", () => {
    const expectedAction = {
      type: 'ADD_AVAILABLE_CARD',
      availableCard: mockCard
    }

    expect(actions.addAvailableCard(mockCard)).toEqual(expectedAction);
  });

  it("should create an action to add multiple available cards", () => {
    const expectedAction = {
      type: 'ADD_AVAILABLE_CARDS',
      availableCards: mockCards
    }

    expect(actions.addAvailableCards(mockCards)).toEqual(expectedAction);
  });

  it("should create an action to remove an available card", () => {
    const expectedAction = {
      type: 'REMOVE_AVAILABLE_CARD',
      availableCard: mockCard
    }

    expect(actions.removeAvailableCard(mockCard)).toEqual(expectedAction);
  });
});

describe("Class Actions", () => {
  it("should create an action to select a class", () => {
    const mockClass = "Bob the Builder"
    const expectedAction = {
      type: 'ADD_SELECTED_CLASS',
      selectedClass: mockClass
    }

    expect(actions.addSelectedClass(mockClass)).toEqual(expectedAction);
  });
});

describe("Current Level Actions", () => {
  it("should create an action to increase current level", () => {
    const mockLevel = 2
    const expectedAction = {
      type: 'INCREASE_CURRENT_LEVEL',
      currentLevel: mockLevel
    }

    expect(actions.increaseCurrentLevel(mockLevel)).toEqual(expectedAction);
  });

  it("should create an action to decrease current level", () => {
    const mockLevel = 1
    const expectedAction = {
      type: 'DECREASE_CURRENT_LEVEL',
      currentLevel: mockLevel
    }

    expect(actions.decreaseCurrentLevel(mockLevel)).toEqual(expectedAction);
  });
});
