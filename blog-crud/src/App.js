import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import MyCarousel from './components/MyCarousel';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={MyCarousel} />
      </Switch>
    );
  }
}

export default App;
