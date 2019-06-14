import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import EditModeForm from './EditModeForm';
import GameDetailsContainer from './styled/GameDetailsContainer';

class GameDetails extends Component {
  state = {
    game: {},
    editMode: false
  };

  componentDidMount() {
    this.fetchGame();
  }

  fetchGame = async() => {
    const game = await axios
      .get(`http://localhost:4000/api/matches/${this.props.match.params.id}`)
      .then(resp => resp.data);
    this.setState({ game: game });
  };

  toggleEditMode = () => {
    this.setState(prevState => ({
      editMode: !prevState.editMode
    }));
  };

  changeScore = () => {
    this.fetchGame();
    this.setState({ editMode: false });
  };

  render() {
    const { game, editMode } = this.state;
    return (
      <GameDetailsContainer>
        <div>
          {game._homeTeam} - {game._awayTeam}
        </div>
        <div>{game._isFriendly ? 'friendly game' : 'league game'}</div>
        <div>
          {editMode ? (
            <EditModeForm game={game} handleSubmit={this.changeScore} />
          ) : (
            `${game._scoreHome} : ${game._scoreAway}`
          )}
        </div>
        <label htmlFor="editMode">Edit score mode: </label>
        <input
          name="editMode"
          type="checkbox"
          value={editMode}
          onChange={this.toggleEditMode}
        />
      </GameDetailsContainer>
    );
  }
}

export default withRouter(GameDetails);
