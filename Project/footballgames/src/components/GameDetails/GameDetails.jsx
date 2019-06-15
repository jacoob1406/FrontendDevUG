import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import EditModeForm from './EditModeForm';
import GameDetailsContainer from './styled/GameDetailsContainer';
import DeleteButton from './styled/DeleteButton';
import DeletedInfoContainer from './styled/DeletedInfoContainer';
import Button from '../Button/Button';

class GameDetails extends Component {
  state = {
    game: {},
    editMode: false,
    successDeleted: false
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

  deleteGame = async id => {
    await axios
      .delete(`http://localhost:4000/api/matches/delete/${id}`)
      .then(() => {
        this.setState({ successDeleted: true });
      })
      .catch(error => {
        console.log(error.response);
      });
  };

  render() {
    const { game, editMode, successDeleted } = this.state;
    return successDeleted ? (
      <DeletedInfoContainer>
        <p>Game deleted!</p>
        <Button width="200px" onClick={() => this.props.history.push('/')}>
          Back to all games
        </Button>
      </DeletedInfoContainer>
    ) : (
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
        <div>
          <label htmlFor="editMode">Edit score mode:</label>
          <input
            name="editMode"
            type="checkbox"
            value={editMode}
            onChange={this.toggleEditMode}
          />
        </div>
        <DeleteButton onClick={this.deleteGame.bind(null, game._id)}>
          Remove game
          <i className="fa fa-trash" />
        </DeleteButton>
      </GameDetailsContainer>
    );
  }
}

export default withRouter(GameDetails);
