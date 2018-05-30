import React from 'react';
import { connect } from 'react-redux';
import './SelectedCards.css';
import { Card } from '../Card/Card'
import {
  addSelectedCard,
  removeAvailableCard
} from '../../actions';

export const SelectedCards = ({ cards }) => {
  let displayCards

  if(cards) {
    displayCards = cards.map(card => {
      return <Card
        key={card.id}
        id={card.id}
        image={card.image_url}
        name={card.name} />;
    });
  }

  const dragoverHandler = (event) => {
    event.preventDefault();
    //make shit move out of the way
    event.dataTransfer.dropEffect = "move"
  }

  const dropHandler = (event) => {
    event.preventDefault();
    //don't allow to drop on original parent
    var data = event.dataTransfer.getData("text");
    console.log(data)
    //removeAvailableCard
    //addSelectedCard
    event.target.appendChild(document.getElementById(data));
  }

  return (
    <div className="cards-component" id="selected-component">
      <h2>Selected Cards/Deck Name</h2>
      <div className="cards-container"
        onDrop={event => dropHandler(event)}
        onDragOver={event => dragoverHandler(event)} >
        {displayCards}
      </div>
    </div>
  );
}

//make sure these actions are working!
export const mapDispatchToProps = dispatch => ({
  removeAvailableCard: availableCard =>
    dispatch(removeAvailableCard(availableCard)),
  addSelectedCard: selectedCard =>
    dispatch(addSelectedCard(selectedCard))
});

export const mapStateToProps = state => ({
  cards: state.cards,
  selectedCards: state.selectedCards,
  availableCards: state.availableCards
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectedCards);
