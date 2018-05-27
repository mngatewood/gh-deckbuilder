export const addCard = (card) => ({
  type: 'ADD_CARD',
  card
});

export const addCards = (cards) => ({
  type: 'ADD_CARDS',
  cards
});

export const removeCards = (cards) => ({
  type: 'REMOVE_CARDS',
  cards
});

export const addSelectedCard = (selectedCard) => ({
  type: 'ADD_SELECTED_CARD',
  selectedCard
});

export const addSelectedCards = (selectedCards) => ({
  type: 'ADD_SELECTED_CARDS',
  selectedCards
});

export const removeSelectedCard = (selectedCard) => ({
  type: 'REMOVE_SELECTED_CARD',
  selectedCard
});

export const removeSelectedCards = (selectedCards) => ({
  type: 'REMOVE_SELECTED_CARDS',
  selectedCards
});

export const addAvailableCard = (availableCard) => ({
  type: 'ADD_AVAILABLE_CARD',
  availableCard
});

export const addAvailableCards = (availableCards) => ({
  type: 'ADD_AVAILABLE_CARDS',
  availableCards
});

export const removeAvailableCard = (availableCard) => ({
  type: 'REMOVE_AVAILABLE_CARD',
  availableCard
});

