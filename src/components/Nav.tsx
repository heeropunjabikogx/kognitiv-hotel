import React from "react";
import logo from "../static/img/kognitiv-logo-rev.svg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
`;
const Navigation = styled.nav`
  background-color: #101820;
  -webkit-box-shadow: 0 8px 6px -6px #999;
  -moz-box-shadow: 0 8px 6px -6px #999;
  box-shadow: 0 8px 6px -6px #999;
`;
const StyledList = styled.ul`
  list-style: none;
  padding: 2px;
  margin-top: 8px;
`;
const ListItem = styled.li`
  color: white;
  margin-left: 30px;
  font-weight: bold;
  &:hover {
    color: #ffda01;
    list-style: none;
    text-decoration: none;
  }
`;
const Nav = () => {
  return (
    <Navigation className="navbar navbar-light">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">
            <img style={{ width: "8rem" }} src={logo} alt="Home" />
          </Link>
        </div>
        <StyledList className="navbar nav-links navbar-right">
          <StyledLink to="/">
            <ListItem>Home</ListItem>
          </StyledLink>
          <StyledLink to="/about">
            <ListItem>About</ListItem>
          </StyledLink>
          <StyledLink to="/contact">
            <ListItem>Contact</ListItem>
          </StyledLink>
        </StyledList>
      </div>
    </Navigation>
  );
};

export default Nav;
