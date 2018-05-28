import React from 'react';
import { connect } from 'react-redux';
import './SelectedCards.css';
import { Card } from '../Card/Card'

export const SelectedCards = ({ cards }) => {
  let displayCards

  if(cards) {
    displayCards = cards.map(card => {
    return <Card
      key={card.id}
      image={card.image_url}
      name={card.name} />;
    });
  }

  return (
    <div className="cards-component" id="selected-component">
      <h2>Selected Cards/Deck Name</h2>
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

export default connect(mapStateToProps)(SelectedCards);
