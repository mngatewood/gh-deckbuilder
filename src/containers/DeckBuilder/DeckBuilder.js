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
  addSelectedClass,
  increaseCurrentLevel,
  decreaseCurrentLevel,
  removeSelectedCards
  } from '../../actions';

export class DeckBuilder extends Component {
  constructor(props) {
    super(props);
    this.deckSave = React.createRef();
    this.deckSaveName = React.createRef();
    this.state = {
      deck: 0,
      deckName: '',
      classImage: require('../../images/classArtwork/pending.png'),
      level: 1,
      error: ''
    };
  };


  async componentDidMount() {
    try {
      const { addCards, addSelectedCards, addAvailableCards, addSelectedClass } = this.props
      const selectedClass = this.props.location.pathname.slice(1);
      const cards = await api.fetchCards(selectedClass);
      const deck = await helpers.getSelected(this.state.deck, cards);
      const available = await helpers.getAvailable(cards, deck.cards);
      const dynamicImage = require(`../../images/classArtwork/${selectedClass}FullBody.png`)
      this.setState({ 
        classImage: dynamicImage,
        deckName: deck.name })
      addSelectedClass(selectedClass)
      addCards(cards);
      addSelectedCards(deck.cards);
      addAvailableCards(available);
      this.setState()
    } catch (error) {
      this.setState({ error });
    }
  }

  toggleHidden() {
    this.deckSave.current.classList.toggle('hidden');
  }

  async submitDeck(event) {
    event.preventDefault();
    const name = this.deckSaveName.current.value;
    const selectedClass = this.props.selectedClass;
    const level = this.state.level;
    const cards = this.props.selectedCards.map( card => {return card.id});
    await api.fetchPostDeck(name, selectedClass, level, cards);
  }

  async resetDeck () {
    const { removeSelectedCards, addSelectedCards, addAvailableCards, cards } = this.props
    if(this.state.deck === 0) {
      removeSelectedCards();
      addAvailableCards(this.props.cards)
    } else {
      const deck = await helpers.getSelected(this.state.deck, cards);
      const available = await helpers.getAvailable(cards, deck.cards);
      addSelectedCards(deck.cards);
      addAvailableCards(available);
    }
  }
  
  render() {
    const { selectedClass, 
      selectedCards, 
      currentLevel,
      increaseCurrentLevel, 
      decreaseCurrentLevel } = this.props;
    const numberSelectedCards = selectedCards.length;
    const handSize = helpers.getHandSize(selectedClass);
    // const deckPlaceholder = this.state.deckName 
    //   ? this.state.deckName 
    //   : '';

    return (
      <div className="deck-builder">     
        <AvailableCards />
        <div id="class-info">
          <h2>{selectedClass}</h2>
          <img src={this.state.classImage}
            alt={selectedClass}/>
          <h4>Cards Selected</h4>
          <p>{numberSelectedCards} of {handSize}</p>
          <h4>Character Level</h4> 
          <button id="decrease-level" 
            className="inline-button"
            onClick={currentLevel === 1 ? console.log('Minimum Level') : decreaseCurrentLevel} >+</button>
          <h3>{currentLevel}</h3>
          <button id="increase-level" 
            className="inline-button"
            onClick={currentLevel === 9 ? console.log('Maximum Level') : increaseCurrentLevel} >+</button>
          <button onClick={this.toggleHidden.bind(this)}>Save Deck</button>
          <div id="deck-save-container" 
            className="hidden" 
            ref={this.deckSave}>
            <form>
              <input id="deck-name" 
                type="text" 
                placeholder="Enter deck name."
                ref={this.deckSaveName}/>
              <button id="submit-deck-name" 
                type="submit" 
                onClick={this.submitDeck.bind(this)}>Submit</button>
            </form>
          </div>
          <button onClick={this.resetDeck.bind(this)}>Reset Deck</button>
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
    dispatch(addSelectedClass(selectedClass)),
  increaseCurrentLevel: currentLevel =>
    dispatch(increaseCurrentLevel(currentLevel)),
  decreaseCurrentLevel: currentLevel =>
    dispatch(decreaseCurrentLevel(currentLevel)),
  removeSelectedCards: () => 
    dispatch(removeSelectedCards())
});

export const mapStateToProps = state => ({
  cards: state.cards,
  selectedCards: state.selectedCards,
  availableCards: state.availableCards,
  selectedClass: state.selectedClass,
  currentLevel: state.currentLevel
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeckBuilder));
