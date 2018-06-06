import PropTypes from 'prop-types';

export const getCardById = (id, cards) => {
  const cardArray = cards.filter((card) => card.id === id);

  return cardArray[0];
}

getCardById.propTypes = {
  selectedClass: PropTypes.string,
};
