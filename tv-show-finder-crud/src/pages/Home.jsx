import React from "react";
import parse from "html-react-parser";
import { fetchShows } from '../store/actions/fetchShows';
import { connect } from 'react-redux';
import SearchField from '../components/SearchField'
import CardsLayout from "../components/CardsLayout";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { fetchShows, query } = this.props;
    if(query === "") {
      fetchShows("aliens")
    }
  }

  render() {
    const { shows, fetching, favorites } = this.props;
    console.log(this.props)
    return (
      <div className="App">
        <SearchField />
        {/* {fetching ? shows.map((show) => (
          <div>
            {show.show.name}
            {parse(show.show.summary)}
            {show.show.image !== null ? (
              <img src={show.show.image.medium} alt={show.show.name} />
            ) : (
              <div>No pictures available</div>
            )}
          </div>
        )) : <div>Loading...</div>} */}
        <CardsLayout shows={shows} fetching={fetching} favorites={favorites}/>
      </div>
    );
  }
} 

const mapStateToProps = (state) => ({
  query: state.inputQueryReducer.query,
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
