import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import './SelectedCards.css';
import * as helpers from '../../helpers/index'
import {
  addSelectedCard,
  removeAvailableCard
} from '../../actions';

export class SelectedCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredCards: []
    }
  }

  render() {

    const { cards, selectedCards, currentLevel, addSelectedCard, removeAvailableCard } = this.props;

    const dragoverHandler = (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move"
    }

    const dropHandler = (event) => {
      event.preventDefault();
      const data = JSON.parse(event.dataTransfer.getData("text"));
      const id = data.id;
      const parent = data.parent;
      if (parent === "available-component") {
        const droppedCard = helpers.getCardById(parseInt(id, 10), cards);
        addSelectedCard(droppedCard);
        removeAvailableCard(droppedCard);
      } 
    }

    return (
      <div className="cards-component" id="selected-component">
        <h2>Selected Cards</h2>
        <div className="cards-container"
          onDrop={event => dropHandler(event)}
          onDragOver={event => dragoverHandler(event)} >
          {helpers.renderCards(selectedCards, currentLevel)}
        </div>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  removeAvailableCard: availableCard =>
    dispatch(removeAvailableCard(availableCard)),
  addSelectedCard: selectedCard =>
    dispatch(addSelectedCard(selectedCard))
});

export const mapStateToProps = state => ({
  cards: state.cards,
  selectedCards: state.selectedCards,
  availableCards: state.availableCards,
  currentLevel: state.currentLevel
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SelectedCards));
