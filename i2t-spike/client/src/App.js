import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Game from './pages/Game'
import Round from './pages/Round'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/game" component={Game} />
            <Route path="/game/round" component={Round} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
