import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';

import './App.css';

import Home from './components/Home/Home';
import History from './components/History/History';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <section className='navbar'>
          <ul>
            <li><NavLink exact to="/" activeClassName="active"> Accueil </NavLink></li>
            <li><NavLink to="/notre-histoire"> Notre Histoire </NavLink></li>
          </ul>
        </section>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/notre-histoire" component={History} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
