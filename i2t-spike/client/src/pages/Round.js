import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Round.scss';

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
    seconds: '10',
  };

  constructor(props) {
    super(props)
    // TODO how to do this in 1 line?
    const { guess, correct, images, term, seed, seconds } = props
    const round = parseInt(props.match.params.round)
    this.state = { guess, correct, round, images, term, seed, seconds }
    this.secondsRemaining = 10
    this.fetchRound()
    this.startCountDown = this.startCountDown.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentWillReceiveProps(props) {
    const round = parseInt(props.match.params.round)
    this.setState(Object.assign(this.state, { round }))
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
    this.fetch(`/api/rounds/${this.state.round}`)
      .then(({ seed, images, term }) => {
        this.setState(Object.assign(this.state, { seed, images, term}))
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

  tick() {
    if (this.state.isTimeout) {
      return
    }
    const sec = this.secondsRemaining;
    this.setState({
      seconds: (sec < 10) ? ("0" + sec) : sec
    })
    this.secondsRemaining--
    console.log(this.state)
    if (this.secondsRemaining < 0) {
      this.setState({isTimeout: true})
    }
  }

  startCountDown() {
    this.secondsRemaining = 10
    this.setState({isTimeout: false})
    this.intervalHandle = setInterval(this.tick, 1000);
  }

  render() {
    const width = 3;
    return(
      <div>
        { this.state.correct ?
          <h1 className="status">WINNER</h1> :
          <h1 className="status">Playing ...</h1>
        }
        Round <span className="round">{this.state.round}</span>
        {`Seed: ${this.state.seed}`}
        {`Term: ${this.state.term}`}
        <div className="timer">time remaining: {this.state.seconds}</div>
        <button onClick={this.startCountDown}>start round</button>
        <div className="game-area">
          <div className="clue-grid images">
            {
              [0,1,2].map((index) => (
                <div className="clue-grid__row">
                  {
                    this.state.images.slice(index*width, ((index*width)+width)).map((image) => (
                      <div className="clue-grid__item">
                        <img
                          className="image"
                          src={image.src}
                          alt="query"
                          key={image.id}
                        />
                      </div>
                    ))
                  }
                </div>
              ))
            }
          </div>
          <div>
            <textarea
              name="guess"
              placeholder="guess the phrase for the images"
              className="guess-box"
              value={this.state.guess}
              onChange={this.handleGuess}
              disabled={this.state.correct}
            />
            <Link to={`/rjs-game/round/${this.state.round + 1}`}>next</Link>
          </div>
        </div>
      </div>
    )
  }
}

