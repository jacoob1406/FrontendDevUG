import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { ROUTES } from '../../utils/constants/routes';

const Header = styled.header`
  background: #42f4b3;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #000000;
  text-transform: uppercase;
`;

const AppTitle = styled.div`
  text-align: left;
  font-size: 1.15rem;
  padding-left: 20px;
  font-weight: bold;
  transform: skew(-2deg, -2deg);
`;

const NavItems = styled.div`
  padding-right: 30px;

  a {
    padding: 0 20px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

const Navbar = () => (
  <Header>
    <AppTitle>
      <StyledLink to={ROUTES.MAIN_PAGE}>Football games</StyledLink>
    </AppTitle>
    <NavItems>
      <StyledLink to={ROUTES.MAIN_PAGE}>Games</StyledLink>
      <StyledLink to={ROUTES.ADD_GAME}>Add game</StyledLink>
      <StyledLink to={ROUTES.ABOUT}>About</StyledLink>
    </NavItems>
  </Header>
);

export default withRouter(Navbar);
