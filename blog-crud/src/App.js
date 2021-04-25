import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import Home from './pages/Home';
import Update from './pages/Update';
import Create from './pages/Create';
import List from './pages/List';
import Read from './pages/Read';
import Favorites from './pages/Favorites';
import About from './pages/About';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/create" component={Create} />
        <Route exact path="/list" component={List} />
        <Route exact path="/read/:id" component={Read} />
        <Route exact path="/update/:id" component={Update} />
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path="/about" component={About} />
      </Switch>
    );
  }
}

export default App;
