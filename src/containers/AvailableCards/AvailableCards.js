import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import './AvailableCards.css';
import * as helpers from '../../helpers/index'
import {
  addAvailableCard,
  removeSelectedCard
} from '../../actions';

export class AvailableCards extends Component {
  constructor(props) {
    super(props); 
    this.container = React.createRef();
    this.state = {
      location: {}
    }
  }

  render() {
    
    const { cards, availableCards, currentLevel, addAvailableCard, removeSelectedCard } = this.props;
    
    const dragoverHandler = (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move"
    }

    const dropHandler = (event) => {
      event.preventDefault();
      const data = JSON.parse(event.dataTransfer.getData("text"));
      const id = data.id;
      const parent = data.parent;
      if(parent === "selected-component") {
        const droppedCard = helpers.getCardById(parseInt(id, 10), cards);
        addAvailableCard(droppedCard);
        removeSelectedCard(droppedCard);
      } 
    }

    const scrollHeight = this.container.current ? this.container.current.scrollHeight : 0
    const clientHeight = this.container.current ? this.container.current.clientHeight : 0
    const isOverflown = scrollHeight > clientHeight

    return (
      <div className="cards-component" id="available-component">
        <h2>Available Cards</h2>
        <div className="cards-container" 
          onDrop={ event => dropHandler(event)} 
          onDragOver={ event => dragoverHandler(event)} 
          ref={this.container} >
          {helpers.renderCards(availableCards, currentLevel)}
        </div>
        <div className="scroll-fade"></div>
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
  availableCards: state.availableCards,
  currentLevel: state.currentLevel
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AvailableCards));
