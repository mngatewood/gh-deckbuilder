import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

  mapDecks = (decks) => {
    const mappedDecks = decks.map(deck => {
      const dynamicIcon = require(`../../images/classIcons/${deck.class}Icon.png`)
      const dynamicPath = `/${deck.class}`
      return (
        <Link to={dynamicPath} className="saved-deck"key={deck.id}>
        <img  className="saved-deck-img" src={dynamicIcon} alt={deck.class}/>
        <h1 className="saved-deck-name">{deck.name}</h1>
        </Link>
      )
    })
    return mappedDecks;
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