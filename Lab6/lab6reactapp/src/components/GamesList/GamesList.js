import React from 'react';
import './GamesList.css';

const GamesList = ({ gamesList }) => {
  return (
    <div className="mainContainer">
      <ul className="mainContainer__gamesList">
        {gamesList.map(game => (
          <li className="mainContainer__gamesList__item" key={game.id}>{`${
            game._homeTeam
          } ${game._scoreHome} : ${game._scoreAway} ${game._awayTeam}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default GamesList;
