import React from 'react';
import NavbarContainer from './NavbarContainer';
import SearchInput from './SearchInput';
import SearchContainer from './SearchContainer';
import HeaderLink from './HeaderLink';
import { FaSearch } from 'react-icons/fa';
import LoginLink from './LoginLink';
import RegisterLink from './RegisterLink';

/* eslint-disable react/prefer-stateless-function */
class Navbar extends React.Component {
  render() {
    return (
      <NavbarContainer>
        <HeaderLink to="/">Home</HeaderLink>
        <HeaderLink to="/">Categories</HeaderLink>
        <SearchContainer>
          <SearchInput placeholder="Search courses..." />
          <span style={{ position: 'absolute', right: 10, top: 5 }}>
            <FaSearch color="rgb(220,0,0)" size="25px" />
          </span>
        </SearchContainer>
        <HeaderLink to="/features">Features</HeaderLink>
        <HeaderLink to="/">Teach</HeaderLink>
        <div>
          <LoginLink to="/">Login</LoginLink>
          <RegisterLink to="/">Signup</RegisterLink>
        </div>
      </NavbarContainer>
    );
  }
}

export default Navbar;
