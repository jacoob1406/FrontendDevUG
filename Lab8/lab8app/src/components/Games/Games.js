import React, { Component } from 'react';
import axios from 'axios';
import AddNewGameForm from '../AddNewGameForm/AddNewGameForm';
import Button from '../ButtonComponent/Button';
import './Games.css';

class Game extends Component {
  state = {
    games: [],
    teamFilter: ''
  };

  componentDidMount() {
    this.fetchGames();
  }

  componentDidUpdate(prevProps) {
    if (this.props.games !== prevProps.games) {
      this.fetchGames();
    }
  }

  getScore = game =>
    `${game._homeTeam} ${game._scoreHome} : ${game._scoreAway} ${
      game._awayTeam
    }`;

  fetchGames = async () => {
    const values = await axios
      .get('http://localhost:4000/api/matches')
      .then(resp => resp.data);
    this.setState({ games: values._games });
  };

  handleTeamFilter = event => {
    this.setState({ teamFilter: event.target.value });
  };

  filterByTeam = async event => {
    event.preventDefault();
    if (this.state.teamFilter === '') {
      this.fetchGames();
    } else {
      const singleGame = await axios
        .get(`http://localhost:4000/api/matches/team/${this.state.teamFilter}`)
        .then(resp => resp.data)
        .catch(error => {
          console.log(error);
        });
      this.setState({ games: singleGame });
    }
  };

  deleteGame = async id => {
    await axios.delete(`http://localhost:4000/api/matches/delete/${id}`);
    this.fetchGames();
  };

  render() {
    return (
      <div className="mainContainer">
        <div className="filterByTeam">
          <form onSubmit={this.filterByTeam}>
            <label>Enter team: </label>
            <input
              value={this.state.teamFilter}
              onChange={this.handleTeamFilter}
            />
            <Button text="Filter" disabled={!this.state.teamFilter} />
          </form>
          <Button onClick={this.fetchGames} text="Reset filters" />
        </div>
        {this.state.games &&
          this.state.games.map(game => (
            <div className="gamesListItem" key={game._id}>
              <i
                role="button"
                onClick={this.deleteGame.bind(null, game._id)}
                className="fa fa-trash deleteIcon"
              />
              {`${this.getScore(game)} ${game._isFriendly ? '(friendly)' : ''}`}
            </div>
          ))}
        <AddNewGameForm fetchGames={this.fetchGames} />
      </div>
    );
  }
}

export default Game;
