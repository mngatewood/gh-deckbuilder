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
    decks.map(deck => {
      const dynamicIcon = `../../images/classIcons/${deck.class}Icon.png`
      
      // require(`../../images/classIcons/${deck.class}Icon.png`)
      console.log(dynamicIcon)
      return <img src={dynamicIcon} alt={deck.name}/>
    })
  }

  render() {
    return (
      <footer>
        <div>
          <h1>SAVED DECKS</h1>
        </div>
        <div>
          {
            this.state.decks.length &&
            this.mapDecks(this.state.decks)
          }
        </div>
      </footer>
    );
  }
};