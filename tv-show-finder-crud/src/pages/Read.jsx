import React from "react";
import { connect } from "react-redux";
import SearchField from "../components/Read/FilterField";
import CardsLayout from "../components/Read/CardsLayout";
import { addToFavorites } from "../store/actions/addToFavorites";
import filterFavoritesRead from "../store/reducers/filterFavoritesRead";
import FilterField from "../components/Read/FilterField";

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
        <FilterField
          filter={filter}
          favorites={favorites}
          filterFavoritesRead={filterFavoritesRead}
        />
        <CardsLayout
          shows={favorites}
          fetching={true}
          favorites={favorites}
          // addToFavorites={addToFavorites}
          filter={filter}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  a: console.log(state),
  filter: state.filterFavoritesReadReducer.filter,
  favorites: state.addToFavoritesReducer.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  filterFavoritesRead: (input) => dispatch(filterFavoritesRead(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Read);
