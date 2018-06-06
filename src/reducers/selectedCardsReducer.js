const selectedCardsReducer = (state = [], action) => {
  switch (action.type) {
  case 'ADD_SELECTED_CARD':
    return [...state, action.selectedCard];
  case 'ADD_SELECTED_CARDS':
    return [...action.selectedCards];
  case 'REMOVE_SELECTED_CARD':
    return state.filter(card => 
      card.id !== action.selectedCard.id);
  case 'REMOVE_SELECTED_CARDS':
    return [];
  default:
    return state;
  }
};

export default selectedCardsReducer;