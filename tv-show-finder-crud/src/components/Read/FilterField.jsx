import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { fetchShows } from "../../store/actions/fetchShows";
import { inputQuery } from "../../store/actions/inputQuery";
import { connect } from "react-redux";
import filterFavoritesRead from "../../store/reducers/filterFavoritesReadReducer";

const FilterField = (props) => {
  const { filter, favorites, filterFavoritesRead } = props;
  console.log(props);
  return (
    <Form inline>
      <FormGroup>
        <Label for="filterField">
          Just type for filtering
          <Input
            type="text"
            name="query"
            id="query"
            // value={filter}
            placeholder="Name, Genres, Running, etc"
            onChange={(e) => filterFavoritesRead(e.target.value)}
          />
        </Label>
      </FormGroup>
      {/* <Button onClick={() => fetchShows(query)}>Find</Button> */}
    </Form>
  );
};

// const mapStateToProps = (state) => ({
//   a: console.log(state),
//   filter: state.filterFavoritesReadReducer.filter,
// });

// const mapDispatchToProps = (dispatch) => ({
//   filterFavoritesRead: (input) => dispatch(filterFavoritesRead(input)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(FilterField);

export default FilterField;
