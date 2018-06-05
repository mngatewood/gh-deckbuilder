export const fetchPostDeck = async (name, selectedClass, level, cards) => {
  const url = 'http://localhost:8080/api/v1/decks/';

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "name": name,
        "class": selectedClass,
        "level": level,
        "cards": cards })
    })
    return response.json();
  } catch (error) {
    throw error.message;
  }

}
