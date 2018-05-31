import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import './DeckBuilder.css';
import AvailableCards from '../../components/AvailableCards/AvailableCards';
import SelectedCards from '../../components/SelectedCards/SelectedCards';
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
      this.setState({selectedClass})
      addSelectedClass(selectedClass)
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
    console.log(this.props)
    return (
      <div className="deck-builder">     
        <AvailableCards cards={this.props.availableCards} />
        <div id="class-info">
          <h2>{this.state.selectedClass}</h2>
          <img src='http://www.cephalofair.com/wp-content/uploads/2015/04/Inox-Brute1-731x1024.jpg'
            alt="`{this.state.selectedClass} Class`" />
          <h4>Cards Selected</h4>
          <p>X of X</p>
          <h4>Character Level</h4> 
          <button className="inline-button">-</button>
          <h3>9</h3>
          <button className="inline-button">+</button>
          <button>Save Deck</button>
          <button>Reset Deck</button>
          <button>Change Class</button>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeckBuilder));
