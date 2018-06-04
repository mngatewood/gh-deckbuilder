const addSelectedDeckIdReducer = (state = 0, action) => {
  console.log('in reducer' + action.type);
  switch (action.type) {
    case 'ADD_SELECTED_DECK_ID':
      return action.deckId;
    default:
      return state;
  }
};

export default addSelectedDeckIdReducer;