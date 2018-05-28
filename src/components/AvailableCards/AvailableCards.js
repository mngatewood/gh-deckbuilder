import React from 'react';
import { connect } from 'react-redux';
import './AvailableCards.css';
import { Card } from '../Card/Card'
import {
  removeSelectedCard,
  addAvailableCard
} from '../../actions';

export const AvailableCards = ({ cards }) => {
  let displayCards

  if (cards) {
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
    //addAvailableCard
    //removeSelectedCard
    event.target.appendChild(document.getElementById(data));
  }

  return (
    <div className="cards-component" id="available-component">
      <h2>Available Cards</h2>
      <div className="cards-container" 
        onDrop={ event => dropHandler(event)} 
        onDragOver={ event => dragoverHandler(event)} >
        {displayCards}
      </div>
    </div>
  );
}

//make sure these actions are working!
export const mapDispatchToProps = dispatch => ({
  addAvailableCard: availableCard =>
    dispatch(addAvailableCard(availableCard)),
  removeSelectedCard: selectedCard =>
    dispatch(removeSelectedCard(selectedCard))
});

export const mapStateToProps = state => ({
  cards: state.cards,
  selectedCards: state.selectedCards,
  availableCards: state.availableCards
});

export default connect(mapStateToProps, mapDispatchToProps)(AvailableCards);
