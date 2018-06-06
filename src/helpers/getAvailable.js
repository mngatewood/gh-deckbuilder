import PropTypes from 'prop-types';

export const getAvailable = (cards, selected) => {
  if (selected === []) {
    return cards;
  } else {
    let available = [...cards];
    selected.forEach(selectedCard => {
      available = available.filter(availableCard => {
        return availableCard.id !== selectedCard.id;
      });
    });
    return available;
  }
};

getAvailable.propTypes = {
  cards: PropTypes.array,
  selected: PropTypes.array
};
