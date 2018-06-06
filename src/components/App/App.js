import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import {Header} from '../Header/Header';
import Footer from '../../containers/Footer/Footer';
import {Welcome} from '../Welcome/Welcome';
import DeckBuilder from '../../containers/DeckBuilder/DeckBuilder';
import './App.css';

class App extends Component {

  componentDidMount() {
    const background = require('../../images/background/background.png');
    document.body.style = `background-image: url(${background});`;
  }

  componentDidUpdate() {
    const background = require('../../images/background/background.png');
    document.body.style = `background-image: url(${background});`;
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route
            exact path="/"
            component={Welcome}
          />
          <Route
            path="/Brute"
            component={DeckBuilder}
          />
          <Route
            path="/Mindthief"
            component={DeckBuilder}
          />
          <Route
            path="/Cragheart"
            component={DeckBuilder}
          />
          <Route
            path="/Scoundrel"
            component={DeckBuilder}
          />
          <Route
            path="/Spellweaver"
            component={DeckBuilder}
          />
          <Route
            path="/Tinkerer"
            component={DeckBuilder}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
