import { combineReducers } from 'redux';
import cards from './cardsReducer';
import availableCards from './availableCardsReducer';
import selectedCards from './selectedCardsReducer';
import selectedClass from './selectedClassReducer';

const rootReducer = combineReducers({
  cards,
  availableCards,
  selectedCards,
  selectedClass
});

export default rootReducer;