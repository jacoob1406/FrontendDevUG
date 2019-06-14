import React from 'react';
import { withRouter } from 'react-router-dom';
import { ROUTES } from '../../utils/constants/routes';
import AppTitle from './styled/AppTitle';
import Header from './styled/Header';
import Link from './styled/Link';
import NavItems from './styled/NavItems';

const Navbar = () => (
  <Header>
    <AppTitle>
      <Link to={ROUTES.MAIN_PAGE}>Football games</Link>
    </AppTitle>
    <NavItems>
      <Link to={ROUTES.MAIN_PAGE}>Games</Link>
      <Link to={ROUTES.ADD_GAME}>Add game</Link>
      <Link to={ROUTES.ABOUT}>About</Link>
    </NavItems>
  </Header>
);

export default withRouter(Navbar);
