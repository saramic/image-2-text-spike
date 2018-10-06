import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
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

export default Home
