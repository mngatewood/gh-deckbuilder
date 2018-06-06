import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import './AvailableCards.css';
import * as helpers from '../../helpers/index';
import * as actions from '../../actions';

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

    return (
      <div className="cards-component" id="available-component">
        <h2 id="available-heading">
          Available Cards
        </h2>
        <div className="scroll-fade-top"></div>
        <div className="cards-container" 
          onDrop={ event => dropHandler(event)} 
          onDragOver={ event => dragoverHandler(event)} 
          ref={this.container} >
          {helpers.renderCards(availableCards, currentLevel)}
        </div>
        <div className="scroll-fade-bottom"></div>
      </div>
    );
  }
};

export const mapStateToProps = state => ({
  cards: state.cards,
  selectedCards: state.selectedCards,
  availableCards: state.availableCards,
  currentLevel: state.currentLevel
});

export const mapDispatchToProps = dispatch => ({
  addAvailableCard: availableCard =>
    dispatch(actions.addAvailableCard(availableCard)),
  removeSelectedCard: selectedCard =>
    dispatch(actions.removeSelectedCard(selectedCard))
});

AvailableCards.propTypes = {
  cards: PropTypes.array,
  availableCards: PropTypes.array,
  currentLevel: PropTypes.number,
  addAvailableCard: PropTypes.func,
  removeSelectedCard: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AvailableCards));
