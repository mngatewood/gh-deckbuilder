import * as actions from './index.js';

describe("Generic Card Actions", () => {
  it("should create an action to add a card", () => {
    const card = {
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
      type: 'ADD_CARD',
      card
    }

    expect(actions.addCard(card)).toEqual(expectedAction);
  });





});
