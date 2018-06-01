import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import './AvailableCards.css';
// import * as api from '../../api/index'
import * as helpers from '../../helpers/index'
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

  render() {

    const { cards, availableCards } = this.props

    const getCardById = (id) => {
      const cardArray = cards.filter((card) => card.id === id);
      return cardArray[0];
    }
    
    const dragoverHandler = (event) => {
      event.preventDefault();
      console.log('ready to drop')
      //prevent drop to anywhere except two drop zones
      event.dataTransfer.dropEffect = "move"
    }

    const dropHandler = (event) => {
      event.preventDefault();
      const data = JSON.parse(event.dataTransfer.getData("text"));
      const id = data.id;
      const parent = data.parent;
      if(parent !== "available-component") {
        const droppedCard = getCardById(parseInt(id, 10));
        this.props.addAvailableCard(droppedCard);
        this.props.removeSelectedCard(droppedCard);
      } 
      document.getElementById(id).style.visibility = "visible";
    }

    return (
      <div className="cards-component" id="available-component">
        <h2>Available Cards</h2>
        <div className="cards-container" 
          onDrop={ event => dropHandler(event)} 
          onDragOver={ event => dragoverHandler(event)} >
          {helpers.renderCards(availableCards)}
        </div>
      </div>
    );
  }
};

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
