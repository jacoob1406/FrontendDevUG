import React from 'react';
import './GameDetails.css';

export const gameMock = [
  {
    game: 'Arka - Cracovia 2:1',
    scorersHome: ['Siemaszko 75min', 'Nalepa 88min'],
    scorersAway: ['Budziński 10min'],
    attendance: 12222,
  },
  {
    game: 'Arka - Lech 2:0',
    scorersHome: ['Siemaszko 75min', 'Da Silva 91min'],
    scorersAway: [],
    attendance: 24000,
  },
  {
    game: 'Arka - Zagłębie 1:0',
    scorersHome: ['Marciniak 1min'],
    scorersAway: [],
    attendance: 14055,
  },
];

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
      index: randNum,
    });
  };

  render() {
    const { games } = this.props;
    const { index } = this.state;
    console.log('games: ', games);
    console.log('index: ', index);
    return (
      <div className="detailsContainer">
        <div className="detaisContainer__heading">{games[index].game}</div>
        <div className="detailsContainer__gameDetails">
          <div>Scorers home team: {games[index].scorersHome.join(', ')}</div>
          <div>Scorers away team: {games[index].scorersAway.join(', ')}</div>
          <div>Arrendance: {games[index].attendance}</div>
        </div>
      </div>
    );
  }
}

export default GameDetails;
