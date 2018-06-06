export const fetchDeleteDeck = async (deckId) => {
  const url = `http://localhost:8080/api/v1/decks/${deckId}`;
  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return response;
  } catch (error) {
    throw error.message;
  }
}
