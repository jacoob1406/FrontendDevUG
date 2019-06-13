import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTES } from '../../utils/constants/routes';
import GameList from '../GamesList/GamesList';
import GameDetails from '../GameDetails/GameDetails';
import Navbar from '../Navbar/Navbar';
import AddGame from '../AddGame/AddGame';
import About from '../About/About';

const NotFound = () => <p>not found</p>; // TODO PROPER COMPONENT

const MainContainer = styled.div`
  background: #f3f3f3;
  min-height: 100%;
  min-width: 100%;
  margin: 0;
  padding: 0;
  padding-top: 50px;
`;

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
