export const fetchSelected = async (deckId) => {
  const url = `http://localhost:8080/api/v1/decks/${deckId}`;

  try {
    const response = await fetch(url);
    const deck = await response.json();
    return deck.cards;
  } catch (error) {
    throw error("Error getting deck")
  }
}
