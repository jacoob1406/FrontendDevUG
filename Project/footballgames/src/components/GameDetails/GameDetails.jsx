import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import EditModeForm from './EditModeForm';

const Container = styled.section`
  text-align: center;
  width: 50%;
  margin: 0 auto;
  font-size: 1.3rem;
  text-transform: uppercase;
  padding-bottom: 30px;

  div {
    padding: 10px 0;
  }
  input[type='checkbox'] {
    transform: scale(1.4);

    &:checked {
      color: green;
    }
  }
`;

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
      <Container>
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
      </Container>
    );
  }
}

export default withRouter(GameDetails);
