import React from 'react';
import './App.css';
import GamesList from './components/GamesList/GamesList';
import GameDetails from './components/GameDetails/GameDetails';
import db from './db/main';

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
