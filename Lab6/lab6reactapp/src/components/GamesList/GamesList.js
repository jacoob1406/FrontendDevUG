import React from 'react';
import './GamesList.css'

export const gamesMock = [
  {
    id: 123,
    game: 'Arka - Lech',
  },
  {
    id: 124,
    game: 'Arka - Cracovia',
  },
  {
    id: 777,
    game: 'Arka - KSZO',
  },
];

const GamesList = ({ gamesList }) => {
  return (
    <div className="mainContainer">
      <ul className="mainContainer__gamesList">
        {gamesList.map(game => (
          <li className="mainContainer__gamesList__item" key={game.id}>{game.game}</li>
        ))}
      </ul>
    </div>
  );
};

export default GamesList;
