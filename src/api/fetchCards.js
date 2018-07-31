import PropTypes from 'prop-types';

export const fetchCards = async (selectedClass) => {
  const url = `/api/v1/cards/${selectedClass}`;

  try {
    const response = await fetch(url);
    const cards = await response.json();
    return cards;
  } catch (error) {
    throw error.message;
  }
};

fetchCards.propTypes = {
  selectedClass: PropTypes.string
};
