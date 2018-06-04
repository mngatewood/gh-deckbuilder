import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router';
import * as api from '../../api/index';
import * as helpers from '../../helpers/index';
import * as icons from '../../images/index'
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
      return (
      <div className=".saved-deck">
        <img  className=".saved-deck-img" src={dynamicIcon} alt={deck.class}/>
        <h1 className=".saved-deck-name">{deck.name}</h1>
      </div>
      )
    })
    return mappedDecks;
  }

  render() {
    return (
      <footer>
        <div className=".saved-decks-tab">
          <h1 className=".saved-decks-title">SAVED DECKS</h1>
        </div>
          {this.mapDecks(this.state.decks)}
      </footer>
    );
  }
};