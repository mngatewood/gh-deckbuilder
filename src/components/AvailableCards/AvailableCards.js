import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import './AvailableCards.css';
import { Card } from '../Card/Card'
import {
  addAvailableCard,
  removeSelectedCard
} from '../../actions';

export class AvailableCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  renderCards = (cards) => {
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
    return displayCards
  }

  dragoverHandler = (event) => {
    event.preventDefault();
    //make shit move out of the way
    event.dataTransfer.dropEffect = "move"
  }

  dropHandler = (event) => {
    event.preventDefault();
    //don't allow to drop on original parent
    var data = event.dataTransfer.getData("text");
    console.log(data)
    //addAvailableCard
    //removeSelectedCard
    event.target.appendChild(document.getElementById(data));
    //enable all drop zones
  }

  render() {
    return (
      <div className="cards-component" id="available-component">
        <h2>Available Cards</h2>
        <div className="cards-container" 
          onDrop={ event => this.dropHandler(event)} 
          onDragOver={ event => this.dragoverHandler(event)} >
          {this.renderCards(this.props.cards)}
        </div>
      </div>
    );
  }
};

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AvailableCards));
