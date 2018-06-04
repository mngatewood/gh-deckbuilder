import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Route } from 'react-router-dom';
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
    this.changeClassDiv = React.createRef();
    this.changeClassSelect = React.createRef();
    this.state = {
      deck: 0,
      deckName: '',
      background: require('../../images/background/background.png'),
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
      const dynamicBackground = require(`../../images/background/background-${selectedClass}.png`)
      this.setState({ 
        classImage: dynamicImage,
        background: dynamicBackground,
        deckName: deck.name })
      document.body.style = `background-image: url(${this.state.background});`;
      addSelectedClass(selectedClass)
      addCards(cards);
      addSelectedCards(deck.cards);
      addAvailableCards(available);
      this.setState()
    } catch (error) {
      this.setState({ error });
    }
  }

  toggleDeckSave() {
    this.deckSave.current.classList.toggle('hidden');
  }

  toggleChangeClass() {
    this.changeClassDiv.current.classList.toggle('hidden');
  }

  async submitDeck(event) {
    event.preventDefault();
    const name = this.deckSaveName.current.value;
    const selectedClass = this.props.selectedClass;
    const level = this.state.level;
    const cards = this.props.selectedCards.map( card => {return card.id});
    await api.fetchPostDeck(name, selectedClass, level, cards);
  }

  async resetDeck() {
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

  changeClass() {
    const newClass = this.changeClassSelect.current.value;
    this.props.history.push(`/${newClass}`);
    this.props.addSelectedClass(newClass);
    this.setState({ deck: 0, 
      level: 1, 
      classImage: require(`../../images/classArtwork/${newClass}FullBody.png`) })
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
        <AvailableCards location={this.props.location} />
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
          <button onClick={this.toggleDeckSave.bind(this)}>Save Deck</button>
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
          <button onClick={this.toggleChangeClass.bind(this)}>Change Class</button>
          <div id="change-class-container" 
            className="hidden" 
            ref={this.changeClassDiv}>
            <select onChange={this.changeClass.bind(this)}
              ref={this.changeClassSelect}>
              <option value="Brute">Brute</option>
              <option value="Cragheart">Cragheart</option>
              <option value="Mindthief">Mindthief</option>
              <option value="Scoundrel">Scoundrel</option>
              <option value="Spellweaver">Spellweaver</option>
              <option value="Tinkerer">Tinkerer</option>
            </select>
          </div>
        </div>
        <SelectedCards location={this.props.location} />
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
