const selectedDeckReducer = (state = 0, action) => {
  switch (action.type) {
  case 'ADD_SELECTED_DECK_ID':
    return action.deckId;
  default:
    return state;
  }
};

export default selectedDeckReducer;