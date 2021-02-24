import React from "react";
import { connect } from "react-redux";
import SearchField from "../components/Read/FilterField";
import CardsLayout from "../components/Read/CardsLayout";
import { addToFavorites } from "../store/actions/addToFavorites";
import { filterFavoritesRead } from "../store/actions/filterFavoritesRead";
import FilterField from "../components/Read/FilterField";

const Read = (props) => {
  const { filter, favorites, filterFavoritesRead } = props;
  console.log(props);

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
};

const mapStateToProps = (state) => ({
  a: console.log(state),
  filter: state.filterFavoritesReadReducer.filter,
  favorites: state.addToFavoritesReducer.favorites,
});

const mapDispatchToProps = (dispatch) => ({
  filterFavoritesRead: (input) => dispatch(filterFavoritesRead(input)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Read);
