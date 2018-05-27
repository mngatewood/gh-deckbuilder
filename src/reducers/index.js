import { combineReducers } from 'redux';
import cards from './cardsReducer';
import availableCards from './availableCardsReducer';
import selectedCards from './selectedCardsReducer';

const rootReducer = combineReducers({
  cards,
  availableCards,
  selectedCards
});

export default rootReducer;