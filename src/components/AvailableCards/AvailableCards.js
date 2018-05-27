import React from 'react';
import { connect } from 'react-redux';
import './AvailableCards.css';
import { Card } from '../Card/Card'

export const AvailableCards = ({cards}) => {
  let displayCards

  console.log(cards)

  if (cards) {
    displayCards = cards.map(card => {
      console.log(card)
    return <Card
      key={card.id}
      image={card.image_url}
      name={card.name} />;
    });
  }

  return (
    <div class="cards-component" id="available-component">
      <h1>Available Cards</h1>
      <div class="cards-container">
        {displayCards}
      </div>
    </div>
  );
}

export const mapStateToProps = state => ({
  cards: state.cards
});

export default connect(mapStateToProps)(AvailableCards);
