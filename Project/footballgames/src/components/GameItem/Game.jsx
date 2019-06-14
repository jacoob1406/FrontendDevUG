import React from 'react';
import GameItemContainer from './styled/GameItemContainer';
import GameLink from './styled/GameLink';

const getScore = game =>
  `${game._homeTeam} ${game._scoreHome} : ${game._scoreAway} ${game._awayTeam}`;

const Game = ({ game }) => (
  <GameLink to={`/games/${game._id}`}>
    <GameItemContainer>{getScore(game)}</GameItemContainer>
  </GameLink>
);

export default Game;
