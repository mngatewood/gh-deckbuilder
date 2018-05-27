import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DeckBuilder.css';
import { addCards } from '../../actions';
import { AvailableCards } from '../../components/AvailableCards/AvailableCards';
import { SelectedCards } from '../../components/SelectedCards/SelectedCards';

export class DeckBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
  };

  async componentDidMount() {
    try {
      const selectedClass = this.props.location.pathname.slice(1);
      const cards = await this.getCards(selectedClass);
      this.props.addCards(cards)
      console.log(this.props.cards)
    } catch (error) {
      this.setState({ error });
    }
  }

  getCards = async (selectedClass) => {
    const url = `http://localhost:8080/api/v1/cards/${selectedClass}`;

    try {
      const response = await fetch(url);
      const cards = await response.json();
      return cards
    } catch (error) {
      throw error("Error getting cards")}
  }

  // THIS WILL BE A SMART COMPONENT THAT DISPLAYS THE
  // CLASS IMAGE AND INFORMATION in a middle column.
  // 
  // WILL ALSO RENDER 'AVAILABLE CARDS' COMPONENT AND
  // 'SELECTED CARDS COMPONENT

  
  render() {
    return (
      <div class="deck-builder">     
        <AvailableCards cards={this.props.cards} />
        <div id="class-info">
          Class Image
          Card X of X
          Change Level
          Save Deck Button
          Change Class Button
          Reset Deck Button
        </div>
        <SelectedCards />
      </div>
    )
  }
};

export const mapDispatchToProps = dispatch => ({
  addCards: cards => dispatch(addCards(cards))
});

export const mapStateToProps = state => ({
  cards: state.cards
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckBuilder);
