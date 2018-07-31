import PropTypes from 'prop-types';

export const fetchSelected = async (deckId) => {
  const url = `/api/v1/decks/${deckId}`;

  try {
    const response = await fetch(url);
    const deck = await response.json();
    return deck;

  } catch (error) {
    throw error.message;
  }
};

fetchSelected.propTypes = {
  deckId: PropTypes.number
};
