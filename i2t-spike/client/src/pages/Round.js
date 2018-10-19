import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Round extends Component {
  static propTypes = {
    round: PropTypes.object,
  };

  static defaultProps = {
    guess: '',
    correct: false,
    round: null,
    seed: null,
    term: null,
    images: [],
  };

  constructor(props) {
    super(props)
    // TODO how to do this in 1 line?
    const { guess, correct, round, images, term, seed } = props
    this.state = { guess, correct, round, images, term, seed }
    this.fetchRound()
  }

  fetch(endpoint) {
    // TODO a bit of a hack?
    const url = process.env.NODE_ENV === "development" ? 'http://localhost:3001' : ''
    return window.fetch(`${url}${endpoint}`)
      .then(response => response.json())
      .catch(error => console.log(error))
  }

  fetchRound() {
    this.fetch('/api/rounds/1')
      .then(({ round, seed, images, term }) => {
        this.setState(Object.assign(this.state, {round, seed, images, term}))
      })
  }

  handleGuess = event => {
    if (event.target.value.split(" ").find((word) => (word === this.state.term))) {
      this.setState({correct: true})
    }
    this.setState({
      guess: event.target.value
    })
  }

  render() {
    return(
      <div>
        { this.state.correct ?
          <h1 className="status">WINNER</h1> :
          <h1 className="status">Playing ...</h1>
        }
        Round <span className="round">{this.state.round}</span>
        {`Seed: ${this.state.seed}`}
        {`Term: ${this.state.term}`}
        <div className="images">
          {
            this.state.images.map((image) => (
              <img
                className="image"
                src={image.src}
                alt="query"
                key={image.id}
              />
            ))
          }
        </div>
        <div>
      <textarea
        name="guess"
        className="guess-box"
        value={this.state.guess}
        onChange={this.handleGuess}
        disabled={this.state.correct}
      />
        </div>
      </div>
    )
  }
}

