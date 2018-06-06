import PropTypes from 'prop-types';

export const fetchPostDeck = async (name, selectedClass, currentLevel, user, cards) => {
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
        "level": currentLevel,
        "user": user,
        "cards": cards
      })
    })
    if (response.status === 201) {
      return response.json();
    } else {
      return "Something went wrong."
    }
  } catch (error) {
    throw error.message;
  }
}

fetchPostDeck.propTypes = {
  name: PropTypes.string, 
  selectedClass: PropTypes.string, 
  level: PropTypes.number, 
  cards: PropTypes.array
};
