import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Update from './pages/Update';
import Create from './pages/Create';
import List from './pages/List';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/list" component={List} />
        <Route exact path="/update/:id" component={Update} />
      </Switch>
    );
  }
}

export default App;
