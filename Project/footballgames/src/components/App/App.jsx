import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ROUTES } from '../../utils/constants/routes';
import GameList from '../GamesList/GamesList';
import GameDetails from '../GameDetails/GameDetails';
import Navbar from '../Navbar/Navbar';
import AddGame from '../AddGame/AddGame';
import About from '../About/About';
import MainContainer from './styled/MainContainer';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <MainContainer>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path={ROUTES.MAIN_PAGE} component={GameList} />
          <Route exact path={ROUTES.GAME_DETAILS} component={GameDetails} />
          <Route exact path={ROUTES.ADD_GAME} component={AddGame} />
          <Route exact path={ROUTES.ABOUT} component={About} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </MainContainer>
  );
}

export default App;
