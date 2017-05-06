import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import About from './components/About';
import Hobbies from './components/Hobbies';
import Media from './components/Media';

export default class extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/hobbies">Hobbies</Link></li>
              <li><Link to="/media">Media</Link></li>
            </ul>
          </header>
          <Route exact path="/" component={() => <h1>Home!</h1>} ></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/hobbies" component={Hobbies}></Route>
          <Route path="/media" component={Media}></Route>
        </div>
      </Router>
    );
  }
}
