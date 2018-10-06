import React, { Component } from 'react';
import './App.css';
import Routes from './Routes'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Home</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;
