import React from 'react';
import { Card } from '../components/Card/Card';
import PropTypes from 'prop-types';

export const renderCards = (availableCards, currentLevel) => {
  let displayCards;
  const filteredCards = availableCards.filter(card => {
    return card.card_level <= currentLevel;
  });
  const sortedCards = filteredCards.sort((alpha, beta) => {
    return alpha.card_level - beta.card_level;
  });

  if (sortedCards) {  
    displayCards = sortedCards.map(card => {
      return <Card
        key={card.id}
        id={card.id}
        image={card.image_url}
        name={card.name} />;
    });
  }
  return displayCards;
};

renderCards.propTypes = {
  availableCards: PropTypes.array,
  currentLevel: PropTypes.string
};
