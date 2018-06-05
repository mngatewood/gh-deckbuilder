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

export const removeSelectedCards = () => ({
  type: 'REMOVE_SELECTED_CARDS'
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

export const addSelectedClass = (selectedClass) => ({
  type: 'ADD_SELECTED_CLASS',
  selectedClass
});

export const increaseCurrentLevel = (currentLevel) => ({
  type: 'INCREASE_CURRENT_LEVEL',
  currentLevel
})

export const decreaseCurrentLevel = (currentLevel) => ({
  type: 'DECREASE_CURRENT_LEVEL',
  currentLevel
})
