import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DeckBuilder.css';
import { AvailableCards } from '../../components/AvailableCards/AvailableCards';
import { SelectedCards } from '../../components/SelectedCards/SelectedCards';
import * as api from '../../api/index'
import * as helper from '../../helpers/index'
import { 
  addCards, 
  addSelectedCards, 
  addAvailableCards, 
  addSelectedClass 
  } from '../../actions';

export class DeckBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deck: 1,
      selectedClass: '',
      error: ''
    };
  };

  async componentDidMount() {
    try {
      const { addCards, addSelectedCards, addAvailableCards } = this.props
      const selectedClass = this.props.location.pathname.slice(1);
      const cards = await api.fetchCards(selectedClass);
      const selected = await helper.getSelected(this.state.deck, cards);
      const available = await helper.getAvailable(cards, selected);
      addCards(cards);
      addSelectedCards(selected);
      addAvailableCards(available);
    } catch (error) {
      this.setState({ error });
    }
  }

  // THIS WILL BE A SMART COMPONENT THAT DISPLAYS THE
  // CLASS IMAGE AND INFORMATION in a middle column.
  // 
  // WILL ALSO RENDER 'AVAILABLE CARDS' COMPONENT AND
  // 'SELECTED CARDS COMPONENT

  
  render() {
    return (
      <div className="deck-builder">     
        <AvailableCards cards={this.props.availableCards} />
        <div id="class-info">
          Class Image
          Card X of X
          Change Level
          Save Deck Button
          Change Class Button
          Reset Deck Button
        </div>
        <SelectedCards cards={this.props.selectedCards} />
      </div>
    )
  }
};

export const mapDispatchToProps = dispatch => ({
  addCards: cards => dispatch(addCards(cards)),
  addSelectedCards: selectedCards => 
    dispatch(addSelectedCards(selectedCards)),
  addAvailableCards: availableCards =>
    dispatch(addAvailableCards(availableCards)),
  addSelectedClass: selectedClass =>
    dispatch(addSelectedClass(selectedClass))
});

export const mapStateToProps = state => ({
  cards: state.cards,
  selectedCards: state.selectedCards,
  availableCards: state.availableCards,
  selectedClass: state.selectedClass
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckBuilder);
