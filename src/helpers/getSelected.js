import { fetchSelected } from '../api/fetchSelected'
import PropTypes from 'prop-types';

export const getSelected = async (deckId, cards) => {
    if(deckId === 0) {
      return {
        name: 'Unsaved Deck',
        cards: []
      }; 
    } else {
      const selectedDeck = await fetchSelected(deckId);
      const selectedIds = selectedDeck.cards;
      const selected = cards.filter(card => selectedIds.includes(card.id))
      return {
        name: selectedDeck.name,
        class: selectedDeck.class,
        cardIds: selectedIds,
        cards: selected
      }
    }
  }

getSelected.propTypes = {
  deckId: PropTypes.number,
  cards: PropTypes.array
};
