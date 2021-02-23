import React from "react";
import parse from "html-react-parser";
import { fetchShows } from '../store/actionCreators';
import { connect } from 'react-redux';

class Home extends React.Component {
  componentDidMount() {
    const { fetchShows, query } = this.props;
    fetchShows(); 
  }

  render() {
    const { shows, fetching } = this.props;
  
    return (
      <div className="App">
        <h1>TV Show Finder CRUD</h1>
        {!fetching ? shows.map((show) => (
          <div>
            {show.show.name}
            {parse(show.show.summary)}
            {show.show.image !== null ? (
              <img src={show.show.image.medium} alt={show.show.name} />
            ) : (
              <div>No pictures available</div>
            )}
          </div>
        )) : <div />}
      </div>
    );
  }
} 

const mapStateToProps = (state) => ({
  query: state.query,
  shows: state.shows,
  favorites: state.favorites,
  fetching: state.fetching
});

 // passar query aqui ! (query) => dispatch(fetchShows(query))
 // depois passar como props
const mapDispatchToProps = (dispatch) => ({
  fetchShows: () => dispatch(fetchShows())
}); 

export default connect(mapStateToProps, mapDispatchToProps)(Home);
