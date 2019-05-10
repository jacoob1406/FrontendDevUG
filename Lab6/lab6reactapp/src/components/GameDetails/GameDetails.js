import React from 'react';
import './GameDetails.css';

class GameDetails extends React.Component {
  state = { index: 0 };

  componentDidMount() {
    this.timerID = setInterval(() => this.randomNum(), 3000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  randomNum = () => {
    const randNum = Math.floor(Math.random() * this.props.games.length);
    this.setState({
      index: randNum
    });
  };

  render() {
    const { games } = this.props;
    const { index } = this.state;
    return (
      <div className="detailsContainer">
        <div className="detaisContainer__heading">{`${games[index]._homeTeam} ${
          games[index]._scoreHome
        } : ${games[index]._scoreAway} ${games[index]._awayTeam}`}</div>
        <div className="detailsContainer__gameDetails">
          <div>
            {games[index]._isFriendly ? 'Friendly game' : 'Not friendly'}
          </div>
          <div>
            {games[index]._nameOfDerby
              ? `Derby game: ${games[index]._nameOfDerby}`
              : 'Not a derby game'}
          </div>
        </div>
      </div>
    );
  }
}

export default GameDetails;
