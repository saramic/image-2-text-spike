import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Game from './pages/Game'
import Round from './pages/Round'
import Login from './components/Login'

export default () =>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/rjs-game" component={Game} />
    <Route path="/rjs-game/round" component={Round} />
    <Route path="/login" component={Login} />
  </Switch>
