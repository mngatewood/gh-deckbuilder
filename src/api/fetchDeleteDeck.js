export const fetchDeleteDeck = async (deckId) => {
  const url = `http://localhost:8080/api/v1/decks/${deckId}`;
  try {
    await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    throw error("Error getting cards")
  }
}
