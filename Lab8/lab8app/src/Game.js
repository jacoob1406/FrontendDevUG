import React, { Component } from 'react';
import axios from 'axios';

class Game extends Component {
  state = {
    game: '',
    games: [],
  };

  componentDidMount() {
    this.fetchGames();
  }

  renderNumbers() {
    return this.state.games._games.map(game => game._homeTeam).join(', ');
  }

  async fetchGames() {
    const values = await axios
      .get('http://localhost:4000/api/matches')
      .then(resp => resp.data);
    this.setState({ games: values });
  }

  handleSubmit = async event => {
    event.preventDefault();
    const singleGame = await axios
      .get(`http://localhost:4000/api/matches/team/${this.state.game}`)
      .then(resp => resp.data);
    console.log(singleGame);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter home team:</label>
          <input
            value={this.state.game}
            onChange={event => this.setState({ game: event.target.value })}
          />
          <button>Submit</button>
        </form>

        {this.state.games._games && this.renderNumbers()}
      </div>
    );
  }
}

export default Game;
