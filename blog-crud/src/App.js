import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    );
  }
}

export default App;
