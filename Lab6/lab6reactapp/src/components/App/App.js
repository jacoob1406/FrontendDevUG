import React from 'react';
import './App.css';
import GamesList from '../GamesList/GamesList';
import GameDetails from '../GameDetails/GameDetails';
import db from '../../db/gamesDatabase';

function App() {
  return (
    <div className="appContainer">
      <h1 className="appHeading">Football games</h1>
      <GamesList gamesList={db.getAllGames()} />
      <GameDetails games={db.getAllGames()} />
    </div>
  );
}

export default App;
