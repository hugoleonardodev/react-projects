import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Update from './pages/Update';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/update/:id" component={Update} />
      </Switch>
    );
  }
}

export default App;
