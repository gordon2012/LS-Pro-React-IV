import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Grid, Jumbotron, Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';

import About from './components/About';
import Hobbies from './components/Hobbies';
import Media from './components/Media';

export default class extends Component {
  render() {
    const H1 = styled.h1`
      text-align: center;
    `;
    const H2 = styled.h2`
      text-align: right;
    `;
    const Home = () => <Jumbotron>
      <H1>Hello!</H1>
      <h2>My name is Gordon.</h2>
      <H2>I am a Front End Web Developer.</H2>
    </Jumbotron>

    return (
      <Router>
        <Grid>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">Me</Link>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <LinkContainer to="/about"><NavItem eventKey={1}>About</NavItem></LinkContainer>
              <LinkContainer to="/hobbies"><NavItem eventKey={2}>Hobbies</NavItem></LinkContainer>
              <LinkContainer to="/media"><NavItem eventKey={3}>Media</NavItem></LinkContainer>
            </Nav>
          </Navbar>
          <Route exact path="/" component={Home} ></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/hobbies" component={Hobbies}></Route>
          <Route path="/media" component={Media}></Route>
        </Grid>
      </Router>
    );
  }
}
