import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Grid, Jumbotron } from 'react-bootstrap';
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
          <header>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/hobbies">Hobbies</Link></li>
              <li><Link to="/media">Media</Link></li>
            </ul>
          </header>
          <Route exact path="/" component={Home} ></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/hobbies" component={Hobbies}></Route>
          <Route path="/media" component={Media}></Route>
        </Grid>
      </Router>
    );
  }
}
