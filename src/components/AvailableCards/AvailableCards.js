import React from 'react';
import { connect } from 'react-redux';
import './AvailableCards.css';
import { Card } from '../Card/Card'

export const AvailableCards = ({ cards }) => {
  let displayCards

  if (cards) {
    displayCards = cards.map(card => {
    return <Card
      key={card.id}
      image={card.image_url}
      name={card.name} />;
    });
  }

  return (
    <div className="cards-component" id="available-component">
      <h2>Available Cards</h2>
      <div className="cards-container">
        {displayCards}
      </div>
    </div>
  );
}

export const mapStateToProps = state => ({
  cards: state.cards,
  selectedCards: state.selectedCards,
  availableCards: state.availableCards
});

export default connect(mapStateToProps)(AvailableCards);
