import React, { Component } from 'react';
// import { Switch, Route, Link } from 'react-router-dom';

import './App.css';
import parse from 'html-react-parser';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      shows: [],
      query: '',
      favorite: []
    };
  }

  componentDidMount() {
    this.fetchShows();
  }

  async fetchShows() {
    await fetch('http://api.tvmaze.com/search/shows?q=aliens')
      .then((response) => response.json())
      .then((result) => this.setState({ shows: result }))
  }

  render() {
    console.log(this.state.shows)
    const { shows } = this.state;
    return (
      <div className="App">
        <h1>TV Show Finder CRUD</h1>
        {shows.map(show => (
          <div>
            {show.show.name}
            {parse(show.show.summary)}
            {console.log(show.show.image)}
            {show.show.image !== null ? <img src={show.show.image.medium} alt={show.show.name} /> : <div>No pictures available</div>}
            {/* <img src={show.show.image.medium} alt={show.show.name} /> */}
          </div>
        ))}
      </div>
    );
  }
}

export default App;
