import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
// import { Switch, Route, Link } from 'react-router-dom';

import "./App.css";
import parse from "html-react-parser";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shows: [],
      query: "",
      favorite: [],
    };
  }

  componentDidMount() {
    this.fetchShows();
  }

  async fetchShows() {
    await fetch("http://api.tvmaze.com/search/shows?q=aliens")
      .then((response) => response.json())
      .then((result) => this.setState({ shows: result }));
  }

  render() {
    console.log(this.state.shows);
    const { shows } = this.state;
    return (
      <div className="App">
        <h1>TV Show Finder CRUD</h1>
        {shows.map((show) => (
          <div>
            {show.show.name}
            {parse(show.show.summary)}
            {console.log(show.show.image)}
            {show.show.image !== null ? (
              <img src={show.show.image.medium} alt={show.show.name} />
            ) : (
              <div>No pictures available</div>
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default App;

// mapeia o state global e passa através de props
const mapStateToProps = (state) => ({
  signalColor: state.trafficSignalReducer.signal.color,
});
// mapeia a função que altera o state global e qual propriedade alterar
const mapDispatchToProps = (dispatch) => ({
  changeSignal: (payload) => dispatch(changeSignal(payload)),
});
// conecta map e dispatch
export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal);
