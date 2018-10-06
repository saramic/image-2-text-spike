import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  componentDidMount() {
    // TODO a bit of a hack?
    const url = process.env.NODE_ENV === "development" ? 'http://localhost:3001' : ''
    window.fetch(`${url}/api/games`)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        Home
        <ul>
          <Link to="/">Home</Link>
          <Link to="/rjs-game">Game</Link>
          <a href="/game">Game Rails</a>
          <a href="/admin">Admin</a>
        </ul>
      </div>
    )
  }
}

export default Home
