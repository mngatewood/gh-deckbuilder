import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import * as api from '../../api/index';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import './Footer.css';

const config = {
  apiKey: "AIzaSyBHV499x0Il6LN4XYA1JCExxTH_kgkg3pg",
  authDomain: "gh-deckbuilder.firebaseapp.com",
  databaseURL: "https://gh-deckbuilder.firebaseio.com",
  projectId: "gh-deckbuilder",
  storageBucket: "gh-deckbuilder.appspot.com",
  messagingSenderId: "997988713770"
};
firebase.initializeApp(config);

export class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
      error: ''
    };

    this.uiConfig = {
      signInFlow: 'popup',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult: () => false
      }
    };
  };


  async componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => this.setState({isSignedIn: !!user})
  );
    
    try {
      const decks = await api.fetchDecks();
      this.props.addDecks(decks);
    } catch (error) {
      this.setState({ error })
    }

  }

  async componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      try {
        const decks = await api.fetchDecks();
        this.props.addDecks(decks);
      } catch (error) {
        this.setState({ error })
      }
    }
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
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
      this.props.addDecks(decks);
    } catch (error) {
      this.setState({error})
    }
  }

  render() {

    if (!this.state.isSignedIn) {
      return (
        <footer>
        <div className="saved-decks-tab">
          <h1 className="saved-decks-title">SAVED DECKS</h1>
        </div>
        <div className="saved-decks-container">
          <p>Please sign-in:</p>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
          
        </div>
      </footer>
      );
    }

    return (
      <footer>
      <div className="saved-decks-tab">
        <h1 className="saved-decks-title">SAVED DECKS</h1>
      </div>
      <div className="saved-decks-container">

        <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
        {this.mapDecks(this.props.currentDecks)}
      </div>
    </footer>

    );
  }
};

export const mapStateToProps = state => ({
  currentDecks: state.currentDecks,
});

export const mapDispatchToProps = dispatch => ({
  addSelectedDeck: deckId => dispatch(actions.addSelectedDeck(deckId)),
  addDecks: decksArray => dispatch(actions.addDecks(decksArray))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Footer));