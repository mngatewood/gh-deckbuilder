import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import * as api from '../../api/index';
import FirebaseAuth from 'react-firebaseui/FirebaseAuth';
import firebase from 'firebase';
import './Footer.css';


firebase.initializeApp({
  apiKey: "AIzaSyBHV499x0Il6LN4XYA1JCExxTH_kgkg3pg",
  authDomain: "gh-deckbuilder.firebaseapp.com",
  databaseURL: "https://gh-deckbuilder.firebaseio.com",
  projectId: "gh-deckbuilder",
  storageBucket: "gh-deckbuilder.appspot.com",
  messagingSenderId: "997988713770"
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
          this.props.changeUser(authResult.user.email)
        }
      }
    };
  };

  async componentDidMount() {
    this.signOut()
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
      (user) => this.setState({isSignedIn: !!user})
    );
    try {
      const decks = await api.fetchDecks();
      const filteredDeck = this.filterDecks(decks)
      this.props.addDecks(filteredDeck);
    } catch (error) {
      this.setState({ error })
    }
  }

  async componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      try {
        const decks = await api.fetchDecks();
        const filteredDeck = this.filterDecks(decks)
        this.props.addDecks(filteredDeck);
      } catch (error) {
        this.setState({ error })
      }
    }
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  filterDecks = (decks) => {
    const filteredDecks = decks.filter(deck => {
      return deck.user === this.props.user
    })
    return filteredDecks
  }

  mapDecks = (filteredDecks) => {
    const deleteImg = require('../../images/red-x.png')
    const mappedDecks = filteredDecks.map(deck => {
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
    this.props.changeUser("guest")
  }

  render() {

    if (!this.state.isSignedIn) {
      return (
        <footer>
        <div className="saved-decks-tab">
          <h1 className="saved-decks-title">SAVED DECKS</h1>
        </div>
        <div className="saved-decks-container">
          <div className="sign-in-request">
            <p >Please sign-in:</p>
            <FirebaseAuth 
              uiCallback={ui => ui.disableAutoSignIn()}
              uiConfig={this.uiConfig} 
              firebaseAuth={firebase.auth()}/>
          </div>
            {this.mapDecks(this.props.currentDecks)}
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
      <a className="sign-out"
      onClick={() => this.signOut()}>Sign-out</a>
      {this.mapDecks(this.props.currentDecks)}
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