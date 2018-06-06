import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import './DeckBuilder.css';
import AvailableCards from '../AvailableCards/AvailableCards';
import SelectedCards from '../SelectedCards/SelectedCards';
import * as api from '../../api/index';
import * as helpers from '../../helpers/index';
import * as actions from '../../actions';

export class DeckBuilder extends Component {
  constructor(props) {
    super(props);
    this.feedbackDiv = React.createRef();
    this.stats = React.createRef();
    this.deckSaveButton = React.createRef();
    this.deckSaveDiv = React.createRef();
    this.deckSaveName = React.createRef();
    this.deckReset = React.createRef();
    this.changeClassButton = React.createRef();
    this.changeClassDiv = React.createRef();
    this.changeClassSelect = React.createRef();
    this.state = {
      deckName: 'Unnamed Deck',
      background: require('../../images/background/background.png'),
      classImage: require('../../images/classArtwork/pending.png'),
      feedback: '',
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
    const {location, addSelectedClass} = this.props;
    if (prevProps.location !== location) {
      try {
        const selectedClass = await this.getAllCards()
        this.getImages(selectedClass)
        addSelectedClass(selectedClass)
        this.feedbackDiv.current.classList.add('hidden');
      } catch (error) {
        this.setState({ error });
      }
    }
  }

  async getAllCards() {
    const { addCards, addSelectedCards, addAvailableCards, selectedDeck, location } = this.props
    const selectedClass = location.pathname.slice(1);
    const cards = await api.fetchCards(selectedClass);
    const deck = await helpers.getSelected(selectedDeck, cards);
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

  displayFeedback(message) {
    this.setState({ feedback: message });
    this.feedbackDiv.current.classList.remove('hidden');
  }

  hideFeedback(event) {
    event.target.classList.add('hidden');
  }

  changeLevel(operator) {
    const { currentLevel, increaseCurrentLevel, decreaseCurrentLevel } = this.props
    if(operator === 'plus'){
      currentLevel < 9 
      ? increaseCurrentLevel() 
      : this.displayFeedback('Maximum level is already selected.')
    } else if(operator === 'minus') {
      currentLevel > 1 
      ? decreaseCurrentLevel() 
      : this.displayFeedback('Minimum level is already selected.')
    }
  }

  toggleDeckSave(event) {
    const prevButtonText = this.deckSaveButton.current.innerText
    const newButtonText = prevButtonText === "Save Deck" 
      ? "Cancel"
      : "Save Deck"
    this.deckSaveDiv.current.classList.toggle('hidden');
    this.deckSaveButton.current.innerText = newButtonText;
    this.deckReset.current.classList.toggle('hidden');
    this.changeClassButton.current.classList.toggle('hidden');
    if(prevButtonText === "Cancel") {
      this.displayFeedback('Save cancelled.')
    }
  }

  toggleChangeClass(event) {
    this.changeClassDiv.current.classList.toggle('hidden');
    this.changeClassButton.current.classList.toggle('hidden');
    this.deckSaveButton.current.classList.toggle('hidden');
    this.deckReset.current.classList.toggle('hidden');
    if (event.target.id === 'cancel-class-change') {
      this.displayFeedback('Change class cancelled.')
    }
  }

  toggleStats() {
    const display = this.stats.current.style.display;
    if(display === "none") {
      this.stats.current.style.setProperty("display", "block")
    } else {
      this.stats.current.style.setProperty("display", "none")
      this.feedbackDiv.current.classList.add('hidden')
    }
  }

  async submitDeck(event) {
    const {selectedClass, currentLevel, selectedCards, user} = this.props
    event.preventDefault();
    const name = this.deckSaveName.current.value;
    const cards = selectedCards.map( card => {return card.id});
    if(name.length && cards.length) {
      const response = await api.fetchPostDeck(name, selectedClass, currentLevel, user, cards);
      this.displayFeedback(response);
      this.deckSaveDiv.current.classList.toggle('hidden');
      this.deckSaveButton.current.innerText = 'Save Deck';
      this.deckReset.current.classList.toggle('hidden');
      this.changeClassButton.current.classList.toggle('hidden');
    } else {
      this.displayFeedback('You must enter a deck name and select at least one card.')
    }
  }

  async resetDeck() {
    const { removeSelectedCards, addSelectedCards, addAvailableCards, cards, selectedDeck } = this.props
    if(selectedDeck === 0) {
      removeSelectedCards();
      addAvailableCards(cards)
      this.displayFeedback('All selected cards cleared.')
    } else {
      const deck = await helpers.getSelected(selectedDeck, cards);
      const available = await helpers.getAvailable(cards, deck.cards);
      addSelectedCards(deck.cards);
      addAvailableCards(available);
      this.displayFeedback('Selected Cards reverted to saved deck.')
    }
  }

  changeClass(event) {
    this.props.history.push(`/${event.target.id}`);
    this.toggleChangeClass(event)
  }
  
  render() {
    const { selectedClass, selectedCards, currentLevel } = this.props;
    const numberSelectedCards = selectedCards.length;
    const handSize = helpers.getHandSize(selectedClass);

    return (
      <div className="deck-builder"> 
      
        <img src={require('../../images/menu.png')}
          alt="menu" 
          id="menu"
          onClick={() => {this.toggleStats()}}
          />

        <AvailableCards />

        <div id="class-info">
          <img src={this.state.classImage} alt={selectedClass}/>

          <div id="feedback-container" 
            className="hidden" 
            ref={this.feedbackDiv}
            onClick={this.hideFeedback}>
            <img src={require('../../images/feedback-bg.png')}
              alt="feedback" />
            <div id="feedback-content">
              <p>{this.state.feedback}</p>
            </div>
          </div>

          <h2>{selectedClass}</h2>
          <h5>{this.state.deckName}</h5>

          <div id="stats" ref={this.stats}>

            <h4>Cards Selected</h4>
            <p id="number-cards">{numberSelectedCards} &nbsp; of &nbsp; {handSize}</p>

            <h4>Character Level</h4> 
            <div id="level-container">
              <button id="decrease-level" 
                className="inline-button"
                onClick={() => { this.changeLevel('minus') }} ></button>
              <h3>{currentLevel}</h3>
              <button id="increase-level" 
                className="inline-button"
                onClick={() => { this.changeLevel('plus') }} ></button>
            </div>

            <button onClick={(event) => {this.toggleChangeClass(event)}}
              ref={this.changeClassButton}>
              Change Class
              </button>

            <button id="save-button" 
              onClick={() => {this.toggleDeckSave()}}
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
                <button id="submit-deck" 
                  onClick={(event) => {this.submitDeck(event)}}>Submit</button>
              </form>
            </div>

           <button onClick={() => {this.resetDeck()}}
              ref={this.deckReset}>
              Reset Deck
            </button>

            <div id="change-class-container" 
              className="hidden" 
              ref={this.changeClassDiv}>
              <button id="cancel-class-change" 
                onClick={(event) => {this.toggleChangeClass(event)}}>
                Cancel
                </button>
                <div id="class-select-container">
                  <ul>
                    <li id="Brute" onClick={(event) => this.changeClass(event)}>
                      <img src={require('../../images/classIcons/Brute-icon.png')}
                        alt="Brute icon"
                        tooltip="Brute" />
                    </li>
                    <li id="Cragheart" onClick={(event) => this.changeClass(event)}>
                      <img src={require('../../images/classIcons/Cragheart-icon.png')}
                      alt="Cragheart icon" />
                    </li>
                    <li id="Mindthief" onClick={(event) => this.changeClass(event)}>
                      <img src={require('../../images/classIcons/Mindthief-icon.png')}
                        alt="Mindthief icon" />
                    </li>
                  </ul>
                  <ul>
                    <li id="Spellweaver" onClick={(event) => this.changeClass(event)}>
                      <img src={require('../../images/classIcons/Spellweaver-icon.png')}
                        alt="Spellweaver icon" />
                    </li>
                    <li id="Scoundrel" onClick={(event) => this.changeClass(event)}>
                      <img src={require('../../images/classIcons/Scoundrel-icon.png')}
                        alt="Scoundrel icon" />
                    </li>
                    <li id="Tinkerer" onClick={(event) => this.changeClass(event)}>
                      <img src={require('../../images/classIcons/Tinkerer-icon.png')}
                        alt="Tinkerer icon" />
                    </li>
                  </ul>
                </div>
            </div>
          </div>
        </div>

        <SelectedCards />

      </div>
    )
  }
};

export const mapStateToProps = state => ({
  cards: state.cards,
  selectedCards: state.selectedCards,
  availableCards: state.availableCards,
  selectedClass: state.selectedClass,
  currentLevel: state.currentLevel,
  selectedDeck: state.selectedDeck,
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  addCards: cards => dispatch(actions.addCards(cards)),
  addSelectedCards: selectedCards => dispatch(actions.addSelectedCards(selectedCards)),
  addAvailableCards: availableCards => dispatch(actions.addAvailableCards(availableCards)),
  addSelectedClass: selectedClass => dispatch(actions.addSelectedClass(selectedClass)),
  increaseCurrentLevel: currentLevel => dispatch(actions.increaseCurrentLevel(currentLevel)),
  decreaseCurrentLevel: currentLevel => dispatch(actions.decreaseCurrentLevel(currentLevel)),
  removeSelectedCards: () => dispatch(actions.removeSelectedCards())
});

DeckBuilder.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
  cards: PropTypes.array,
  availableCards: PropTypes.array,
  selectedCards: PropTypes.array,
  selectedClass: PropTypes.string,
  currentLevel: PropTypes.number,
  selectedDeck: PropTypes.number,
  user: PropTypes.string,
  addSelectedClass: PropTypes.func,
  increaseCurrentLevel: PropTypes.func,
  decreaseCurrentLevel: PropTypes.func
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DeckBuilder));
