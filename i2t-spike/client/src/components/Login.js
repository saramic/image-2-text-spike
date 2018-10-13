import React, { Component } from 'react'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import './Login.css'
import axios from 'axios'

export default class Login extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: "",
      password: ""
    }
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleSubmit = async event => {
    event.preventDefault()

    try {
      // TODO how to pass env vars in via webpack?
      // const url = `${API_BASE_URL}/users/sign_in`
      const url = 'http://localhost:3001/login'
      const formData = new FormData()
      formData.append('email', this.state.email)
      formData.append('password', this.state.password)
      const options = { headers: { 'Content-Type': 'multipart/form-data' } };

      await axios.get(url, formData, options)
      this.props.userHasAuthenticated(true);
    } catch (e) {
      alert(e.message)
    }
  }


  render() {
    return(
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              autoFocus
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    )
  }
}
