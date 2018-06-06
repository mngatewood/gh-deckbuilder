import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import './SelectedCards.css';
import * as helpers from '../../helpers/index';
import * as actions from '../../actions';

export class SelectedCards extends Component {

  render() {

    const { cards, selectedCards, selectedClass, currentLevel,
      addSelectedCard, removeAvailableCard } = this.props;

    const dragoverHandler = (event) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
    };

    const dropHandler = (event) => {
      event.preventDefault();
      const data = JSON.parse(event.dataTransfer.getData("text"));
      const id = data.id;
      const parent = data.parent;
      const handSize = selectedCards.length;
      const handLimit = helpers.getHandSize(selectedClass);
      if (parent === "available-component" && handSize < handLimit) {
        const droppedCard = helpers.getCardById(parseInt(id, 10), cards);
        addSelectedCard(droppedCard);
        removeAvailableCard(droppedCard);
      } 
    };

    return (
      <div className="cards-component" id="selected-component">
        <h2 id="selected-heading">Selected Cards</h2>
        <div className="scroll-fade-top"></div>
        <div className="cards-container"
          onDrop={event => dropHandler(event)}
          onDragOver={event => dragoverHandler(event)} >
          {helpers.renderCards(selectedCards, currentLevel)}
        </div>
        <div className="scroll-fade-bottom"></div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  cards: state.cards,
  selectedCards: state.selectedCards,
  availableCards: state.availableCards,
  selectedClass: state.selectedClass,
  currentLevel: state.currentLevel
});

export const mapDispatchToProps = dispatch => ({
  removeAvailableCard: availableCard =>
    dispatch(actions.removeAvailableCard(availableCard)),
  addSelectedCard: selectedCard =>
    dispatch(actions.addSelectedCard(selectedCard))
});

SelectedCards.propTypes = {
  cards: PropTypes.array,
  selectedCards: PropTypes.array,
  selectedClass: PropTypes.string,
  currentLevel: PropTypes.number,
  addSelectedCard: PropTypes.func,
  removeAvailableCard: PropTypes.func
};

export default withRouter(connect(mapStateToProps,
  mapDispatchToProps)(SelectedCards));
