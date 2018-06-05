import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import * as api from '../../api/index';
import './Footer.css';

export class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      decks: [],
      error: ''
    };
  };

  async componentDidMount() {
    try {
      const decks = await api.fetchDecks();
      this.setState({ decks })
    } catch (error) {
      this.setState({ error })
    }
  }

  async componentDidUpdate(prevProps) {
    console.log(this.props);
    
    if (prevProps !== this.props) {
      try {
        const decks = await api.fetchDecks();
        this.setState({ decks })
      } catch (error) {
        this.setState({ error })
      }
    }
  }

  mapDecks = (decks) => {
    const deleteImg = require('../../images/red-x.png')
    const mappedDecks = decks.map(deck => {
      const dynamicIcon = require(`../../images/classIcons/${deck.class}Icon.png`)
      const dynamicPath = `/${deck.class}`
    
      return (
        <div className="saved-deck" key={deck.id}>
          <Link to={dynamicPath}
          onClick={() => this.props.addSelectedDeck(deck.id)}
          >
          <img  className="saved-deck-classImg" src={dynamicIcon} alt={deck.class}/>
          <h1 className="saved-deck-name">{deck.name}</h1>
          </Link>
          <button>
            <img className="saved-deck-deleteImg"
              src={deleteImg}
              alt="delete"
              onClick={() => this.deleteDeck(deck.id)}
              />
          </button>
        </div>
      )
    })
    return mappedDecks;
  }

  addSelectedId = (deckId) => {
    this.props.addSelectedDeckId(deckId)
  }

  deleteDeck = async (deckId) => {
    try {
      await api.fetchDeleteDeck(deckId)
      const decks = await api.fetchDecks();
      this.setState({ decks })
    } catch (error) {
      this.setState({error})
    }
  }

  render() {
    return (
      <footer>
        <div className="saved-decks-tab">
          <h1 className="saved-decks-title">SAVED DECKS</h1>
        </div>
        <div className="saved-decks-container">
          {this.mapDecks(this.state.decks)}
        </div>
      </footer>
    );
  }
};

export const mapDispatchToProps = dispatch => ({
  addSelectedDeck: deckId => dispatch(actions.addSelectedDeck(deckId))
});

export default withRouter(connect(null, mapDispatchToProps)(Footer));