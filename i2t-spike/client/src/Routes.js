import React from 'react'
import AppliedRoute from "./components/AppliedRoute";
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Game from './pages/Game'
import Round from './pages/Round'
import Login from './components/Login'
import NotFound from "./containers/NotFound"

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute exact path="/" component={Home}  props={childProps} />
    <AppliedRoute exact path="/rjs-game" component={Game} props={childProps} />
    <AppliedRoute path="/rjs-game/round/:round" component={Round} props={childProps} />
    <AppliedRoute path="/login" component={Login} props={childProps} />
    <Route component={NotFound} />
  </Switch>
