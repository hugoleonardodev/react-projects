import React from "react";
import parse from "html-react-parser";
import { fetchShows } from '../store/actions/fetchShows';
import { connect } from 'react-redux';
import SearchField from '../components/SearchField'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { fetchShows, query } = this.props;
    fetchShows(); 
  }

  render() {
    const { shows, fetching } = this.props;
    console.log(this.props)
    return (
      <div className="App">
        <SearchField />
        {fetching ? shows.map((show) => (
          <div>
            {show.show.name}
            {parse(show.show.summary)}
            {show.show.image !== null ? (
              <img src={show.show.image.medium} alt={show.show.name} />
            ) : (
              <div>No pictures available</div>
            )}
          </div>
        )) : <div>Loading...</div>}
      </div>
    );
  }
} 

const mapStateToProps = (state) => ({
  query: state.fetchShowsReducer.query,
  shows: state.fetchShowsReducer.shows,
  favorites: state.fetchShowsReducer.favorites,
  fetching: state.fetchShowsReducer.fetching
});

 // passar query aqui ! (query) => dispatch(fetchShows(query))
 // depois passar como props
const mapDispatchToProps = (dispatch) => ({
  fetchShows: () => dispatch(fetchShows())
}); 

export default connect(mapStateToProps, mapDispatchToProps)(Home);
