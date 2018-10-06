import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Game from './pages/Game'
import Round from './pages/Round'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/rjs-game" component={Game} />
            <Route path="/rjs-game/round" component={Round} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
