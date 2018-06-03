import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import './DeckBuilder.css';
import AvailableCards from '../AvailableCards/AvailableCards';
import SelectedCards from '../SelectedCards/SelectedCards';
import * as api from '../../api/index';
import * as helpers from '../../helpers/index';
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
      deck: 0,
      classImage: require('../../images/classArtwork/pending.png'),
      error: ''
    };
  };


  async componentDidMount() {
    try {
      const { addCards, addSelectedCards, addAvailableCards, addSelectedClass } = this.props
      const selectedClass = this.props.location.pathname.slice(1);
      const cards = await api.fetchCards(selectedClass);
      const selected = await helpers.getSelected(this.state.deck, cards);
      const available = await helpers.getAvailable(cards, selected);
      addSelectedClass(selectedClass)
      this.setState({ classImage: require(`../../images/classArtwork/${selectedClass}FullBody.png`) })
      addCards(cards);
      addSelectedCards(selected);
      addAvailableCards(available);
      this.setState()
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
    const { selectedClass } = this.props;
    return (
      <div className="deck-builder">     
        <AvailableCards />
        <div id="class-info">
          <h2>{selectedClass}</h2>
          <img src={this.state.classImage}
            alt={selectedClass}/>
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
        <SelectedCards />
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
