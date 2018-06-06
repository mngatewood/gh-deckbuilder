const addDecksReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_DECKS':
    return action.deckArray;
  default:
    return state;
  }
};

export default addDecksReducer;