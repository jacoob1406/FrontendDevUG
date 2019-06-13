import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const getScore = game =>
  `${game._homeTeam} ${game._scoreHome} : ${game._scoreAway} ${game._awayTeam}`;

const Container = styled.div`
  background: #ffffff;
  margin: 0 auto 15px;
  padding: 10px 0;
  text-align: center;
  color: #000000;
  width: 80%;

  &:hover {
    opacity: 0.7;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Game = ({ game }) => (
  <StyledLink to={`/games/${game._id}`}>
    <Container>{getScore(game)}</Container>
  </StyledLink>
);

export default Game;
