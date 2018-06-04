import { combineReducers } from 'redux';
import cards from './cardsReducer';
import availableCards from './availableCardsReducer';
import selectedCards from './selectedCardsReducer';
import selectedClass from './selectedClassReducer';
import currentLevel from './currentLevelReducer';
import selectedDeck from './selectedDeckReducer';

const rootReducer = combineReducers({
  cards,
  availableCards,
  selectedCards,
  selectedClass,
  currentLevel,
  selectedDeck
});

export default rootReducer;