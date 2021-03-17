import React from "react";
import { fetchShows } from "../store/actions/fetchShows";
import { connect } from "react-redux";
import SearchField from "../components/Home/SearchField";
import CardsLayout from "../components/Home/CardsLayout";
import { addToFavorites } from "../store/actions/addToFavorites";

class Home extends React.Component {
  componentDidMount() {
    const { fetchShows } = this.props;
    fetchShows();
  }

  render() {
    const { shows, fetching, favorites, addToFavorites } = this.props;
    console.log(this.props);
    return (
      <div className="App">
        <SearchField />
        <CardsLayout
          shows={shows}
          fetching={fetching}
          favorites={favorites}
          addToFavorites={addToFavorites}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  query: state.inputQueryReducer.query,
  shows: state.fetchShowsReducer.shows,
  favorites: state.addToFavoritesReducer.favorites,
  fetching: state.fetchShowsReducer.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchShows: () => dispatch(fetchShows()),
  addToFavorites: (favorites, show) =>
    dispatch(addToFavorites(favorites, show)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
