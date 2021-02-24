import React from "react";
import { fetchShows } from "../store/actions/fetchShows";
import { connect } from "react-redux";
import SearchField from "../components/SearchField";
import CardsLayout from "../components/CardsLayout";
import { addToFavorites } from "../store/actions/addToFavorites";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { fetchShows, favorites } = this.props;
    favorites.length > 0
      ? addToFavorites(localStorage.getItem("favorites"))
      : localStorage.setItem("favorites", favorites);
    fetchShows();
  }
  componentDidUpdate() {
    const { favorites } = this.props;
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
  componentWillUnmount() {
    const { favorites } = this.props;
    localStorage.setItem("favorites", JSON.stringify(favorites));
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

// passar query aqui ! (query) => dispatch(fetchShows(query))
// depois passar como props
const mapDispatchToProps = (dispatch) => ({
  fetchShows: () => dispatch(fetchShows()),
  addToFavorites: (favorites, show) =>
    dispatch(addToFavorites(favorites, show)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
