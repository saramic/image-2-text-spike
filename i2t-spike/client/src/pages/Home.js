import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  constructor() {
    super()
    this.state = {}
    this.getGames = this.getGames.bind(this)
  }

  componentDidMount() {
    this.getGames()
  }

  fetch(endpoint) {
    // TODO a bit of a hack?
    const url = process.env.NODE_ENV === "development" ? 'http://localhost:3001' : ''
    return window.fetch(`${url}${endpoint}`)
      .then(response => response.json())
      .catch(error => console.log(error))
  }
  getGames() {
    this.fetch('/api/games')
      .then(games => {
        if (games && games.length) {
          this.setState({games: games})
        } else {
          this.setState({games: []})
        }
      })
  }

  render() {
    let { games } = this.state
    return games
      ? <div>
          Home
          <ul>
            <Link to="/">Home</Link>
            <Link to="/rjs-game/round">New Game</Link>
            <a href="/game">Game Rails</a>
            <a href="/admin">Admin</a>
            <a href="/login">Login</a>
          </ul>
          { games && games.length
            ? <ul>
              { Object.keys(games).map((key) => {
                return <li key={games[key].id}>{games[key].seed}</li>
              })}
              </ul>
            : <p>no games</p>
          }
        </div>
      : <div>loading</div>
  }
}

export default Home
