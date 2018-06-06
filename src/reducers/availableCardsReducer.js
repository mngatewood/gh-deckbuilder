const availableCardsReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_AVAILABLE_CARD':
    return [...state, action.availableCard];
  case 'ADD_AVAILABLE_CARDS':
    return [...action.availableCards];
  case 'REMOVE_AVAILABLE_CARD':
    return state.filter(card =>
      card.id !== action.availableCard.id);
  default:
    return state;
  }
};

export default availableCardsReducer;