import React from 'react';
import './App.css';
import GamesList, { gamesMock } from './components/GamesList/GamesList';
import GameDetails, { gameMock } from './components/GameDetails/GameDetails';

function App() {
  return (
    <div className="appContainer">
      <h1 className="appHeading">Football games</h1>
      <GamesList gamesList={gamesMock} />
      <GameDetails games={gameMock} />
    </div>
  );
}

export default App;
