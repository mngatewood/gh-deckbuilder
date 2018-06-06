import React from 'react';
import { Card } from '../components/Card/Card';

export const renderCards = (availableCards, currentLevel) => {
  let displayCards
  const filteredCards = availableCards.filter(card => {
    return card.card_level <= currentLevel
  })
  const sortedCards = filteredCards.sort((a, b) => {
    return a.card_level - b.card_level
  })

  if (sortedCards) {  
    displayCards = sortedCards.map(card => {
      return <Card
        key={card.id}
        id={card.id}
        image={card.image_url}
        name={card.name} />;
    });
  }
  return displayCards
}