import React from "react";
import { connect } from "react-redux";
import SearchField from "../components/SearchField";
import CardsLayout from "../components/Home/CardsLayout";
import { addToFavorites } from "../store/actions/addToFavorites";
import filterFavoritesRead from "../store/reducers/filterFavoritesRead";

class Read extends React.Component {
  // componentDidMount() {
  //   const { fetchShows, favorites } = this.props;
  //   // favorites.length > 0
  //   //   ? addToFavorites(JSON.parse(localStorage.getItem("favorites")))
  //   //   : localStorage.setItem("favorites", JSON.stringify(favorites));
  //   fetchShows();
  // }
  render() {
    const { filter, favorites, filterFavoritesRead } = this.props;
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
  filter: state.filterFavoritesReadReducer.query,
  favorites: state.addToFavoritesReducer.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  filterFavoritesRead: (input) => filterFavoritesRead(input),
});

export default connect(mapStateToProps, mapDispatchToProps)(Read);
