import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Game from '../GameItem/Game';

class GameList extends Component {
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

  fetchGames = async() => {
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

  render() {
    return (
      this.state.games &&
      this.state.games.map(game => <Game key={game._id} game={game} />)
    );
  }
}

export default withRouter(GameList);
