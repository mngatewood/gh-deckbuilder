export const fetchDecks = async () => {
  const url = `http://localhost:8080/api/v1/decks`;

  try {
    const response = await fetch(url);
    const decks = await response.json();
    return decks
  } catch (error) {
    throw error("Error getting decks")
  }
}
