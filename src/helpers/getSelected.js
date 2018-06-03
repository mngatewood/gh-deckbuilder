import { fetchSelected } from '../api/fetchSelected'

export const getSelected = async (deckId, cards) => {
    if(deckId === 0) {
      return []; 
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

