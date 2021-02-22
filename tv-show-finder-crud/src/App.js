import React, { Component } from 'react';
// import { Switch, Route, Link } from 'react-router-dom';

import './App.css';

class App extends Component {
  // static aleinsShows = async () => {
  //   var req = new Request('http://api.tvmaze.com/search/shows?q=aliens');
  //   let data;
  //   await fetch(req)
  //     .then((response) => response.json())
  //     .then((result) =>  data = result);
  //   return data;
  // };

  constructor(props) {
    super(props);
    this.state = { 
      value: []
    };
  }

  componentDidMount() {
    this.fetchShows();
  }

  async fetchShows() {
    fetch('http://api.tvmaze.com/search/shows?q=aliens')
      .then((response) => response.json())
      .then((result) =>  this.setState({ value: result }))
  }
  render() {
    console.log(this.state.value)
    return (
      <div className="App">
        <h1>TV Show Finder CRUD</h1>
      </div>
    );
  }
}

export default App;
