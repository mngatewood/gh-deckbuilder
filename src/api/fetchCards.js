export const fetchCards = async (selectedClass) => {
  const url = `http://localhost:8080/api/v1/cards/${selectedClass}`;

  try {
    const response = await fetch(url);
    const cards = await response.json();
    return cards
  } catch (error) {
    throw error.message;
  }
}
