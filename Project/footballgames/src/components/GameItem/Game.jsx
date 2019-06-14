import React from 'react';
import GameItemContainer from './styled/GameItemContainer';
import GameLink from './styled/GameLink';

const Game = ({ game }) => (
  <GameLink to={`/games/${game._id}`}>
    <GameItemContainer>
      {game._homeTeam}
      <span>{` ${game._scoreHome} : ${game._scoreAway} `}</span>
      {game._awayTeam}
    </GameItemContainer>
  </GameLink>
);

export default Game;
