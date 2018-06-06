import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import * as api from '../../api/index';
import FirebaseAuth from 'react-firebaseui/FirebaseAuth';
import firebase from 'firebase';
import './Footer.css';

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID
});

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
        signInSuccessWithAuthResult: (authResult) => {
          this.props.changeUser(authResult.user.displayName)
        }
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

  signOut = () => {
    firebase.auth().signOut();
    this.props.changeUser("Guest")
  }

  render() {

    if (!this.state.isSignedIn) {
      return (
        <footer>
        <div className="saved-decks-tab">
          <h1 className="saved-decks-title">SAVED DECKS</h1>
        </div>
        <div className="saved-decks-container">
          <div>
            <p className="sign-in-request">Please sign-in:</p>
            <FirebaseAuth 
              uiCallback={ui => ui.disableAutoSignIn()}
              uiConfig={this.uiConfig} 
              firebaseAuth={firebase.auth()}/>
          </div>
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
      {this.mapDecks(this.props.currentDecks)}
      <a className="sign-out"
      onClick={() => this.signOut()}>Sign-out</a>
      </div>
    </footer>

    );
  }
};

export const mapStateToProps = state => ({
  currentDecks: state.currentDecks,
  user: state.user
});

export const mapDispatchToProps = dispatch => ({
  addSelectedDeck: deckId => dispatch(actions.addSelectedDeck(deckId)),
  addDecks: decksArray => dispatch(actions.addDecks(decksArray)),
  changeUser: user => dispatch(actions.changeUser(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Footer));