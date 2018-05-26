import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';
import {Header} from '../Header/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Switch>
          <Route
            exact path="/"
            component={Welcome}
          />
          <Route
            path="/Brute"
            component={DeckBuilder}
          />
          <Route
            path="/Mindtheif"
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
        </Switch> */}
      </div>
    );
  }
}

export default App;
