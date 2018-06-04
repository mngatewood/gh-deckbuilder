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
    this.feedback = React.createRef();
    this.deckSaveButton = React.createRef();
    this.deckSaveDiv = React.createRef();
    this.deckSaveName = React.createRef();
    this.deckReset = React.createRef();
    this.changeClassButton = React.createRef();
    this.changeClassDiv = React.createRef();
    this.changeClassSelect = React.createRef();
    this.state = {
      deck: 0,
      deckName: '',
      background: require('../../images/background/background.png'),
      classImage: require('../../images/classArtwork/pending.png'),
      level: 1,
      feedback: 'Here is your feedback!',
      error: ''
    };
  };


  async componentDidMount() {
    try {
      const selectedClass = await this.getAllCards()
      this.getImages(selectedClass)
      this.props.addSelectedClass(selectedClass)
    } catch (error) {
      this.setState({ error });
    }
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      try {
        const selectedClass = await this.getAllCards()
        this.getImages(selectedClass)
        this.props.addSelectedClass(selectedClass)
      } catch (error) {
        this.setState({ error });
      }
    }
  }

  async getAllCards() {
    const { addCards, addSelectedCards, addAvailableCards } = this.props
    const selectedClass = this.props.location.pathname.slice(1);
    const cards = await api.fetchCards(selectedClass);
    const deck = await helpers.getSelected(this.state.deck, cards);
    const available = await helpers.getAvailable(cards, deck.cards);
    this.setState({deckName: deck.name})
    addCards(cards);
    addSelectedCards(deck.cards);
    addAvailableCards(available);
    return selectedClass
  }

  getImages(selectedClass) {
    const dynamicImage = require(`../../images/classArtwork/${selectedClass}FullBody.png`)
    const dynamicBackground = require(`../../images/background/background-${selectedClass}.png`)
    this.setState({
      classImage: dynamicImage,
      background: dynamicBackground})
    document.body.style = `background-image: url(${this.state.background});`;
  }

  toggleDeckSave() {
    const buttonText = this.deckSaveButton.current.innerText === "Save Deck" 
      ? "Cancel"
      : "Save Deck"
    this.deckSaveDiv.current.classList.toggle('hidden');
    this.deckSaveButton.current.innerText = buttonText;
    this.deckReset.current.classList.toggle('hidden');
    this.changeClassButton.current.classList.toggle('hidden');
  }

  toggleChangeClass() {
    this.changeClassSelect.current.value = this.props.selectedClass;
    this.changeClassDiv.current.classList.toggle('hidden');
    this.changeClassButton.current.classList.toggle('hidden');
    this.deckSaveButton.current.classList.toggle('hidden');
    this.deckReset.current.classList.toggle('hidden');
  }

  async submitDeck(event) {
    event.preventDefault();
    const name = this.deckSaveName.current.value;
    const selectedClass = this.props.selectedClass;
    const level = this.props.level;
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
    if(newClass === "Cancel") {
      this.toggleChangeClass()
    } else {
      this.props.history.push(`/${newClass}`);
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

    return (
      <div className="deck-builder">  
        <AvailableCards location={this.props.location} />
        <div id="class-info">
          <img src={this.state.classImage}
            alt={selectedClass}/>
          <div id="feedback-container" class="hidden" ref={this.feedback}>
            <img src={require('../../images/feedback-bg.png')} />
            <div id="feedback-content">
              <p>{this.state.feedback}</p>
            </div>
          </div>
          <h2>{selectedClass}</h2>
          <h5>Deck Name</h5>
          <div id="stats">
            <h4>Cards Selected</h4>
            <p id="number-cards">{numberSelectedCards} &nbsp; of &nbsp; {handSize}</p>
            <h4>Character Level</h4> 
            <button id="decrease-level" 
              className="inline-button"
              onClick={currentLevel === 1 ? console.log('Minimum Level') : decreaseCurrentLevel} >-</button>
            <h3>{currentLevel}</h3>
            <button id="increase-level" 
              className="inline-button"
              onClick={currentLevel === 9 ? console.log('Maximum Level') : increaseCurrentLevel} >+</button>
            <button onClick={this.toggleChangeClass.bind(this)}
              ref={this.changeClassButton}>
              Change Class
              </button>
            <button onClick={this.toggleDeckSave.bind(this)}
              ref={this.deckSaveButton}>
              Save Deck
            </button>
            <div id="deck-save-container" 
              className="hidden" 
              ref={this.deckSaveDiv}>
              <form>
                <input id="deck-name" 
                  type="text" 
                  placeholder="Enter deck name."
                  ref={this.deckSaveName}/>
                <button id="submit-deck-name" 
                  onClick={this.submitDeck.bind(this)}>Submit</button>
              </form>
            </div>
           <button onClick={this.resetDeck.bind(this)}
              ref={this.deckReset}>
              Reset Deck
            </button>
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
                <option value="Cancel">Cancel</option>
              </select>
            </div>
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
