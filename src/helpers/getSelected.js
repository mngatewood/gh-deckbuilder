import { fetchSelected } from '../api/fetchSelected'

export const getSelected = async (deckId, cards) => {
    if(deckId < 1) {
      return []; 
    } else {
      const selectedIds = await fetchSelected(deckId);
      const selected = cards.filter(card => selectedIds.includes(card.id))
      return selected;
    }
  }

