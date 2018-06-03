import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { withRouter } from 'react-router';
import * as api from '../../api/index';
import './Footer.css';

export class Footer extends Component {
  

  async componentDidMount() {
    try {
      const decks = await api.fetchDecks();
      console.log(decks);
      
    } catch (error) {
      this.setState({ error })
    }
  }


  render() {
    return (
      <footer>
        <div>
          <h1>SAVED DECKS</h1>
        </div>
        <div>

        </div>
      </footer>
    );
  }
};