import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { fetchShows } from "../../store/actions/fetchShows";
import { inputQuery } from "../../store/actions/inputQuery";
import { connect } from "react-redux";

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
//   query: state.inputQueryReducer.query,
// });

// const mapDispatchToProps = (dispatch) => ({
//   fetchShows: (query) => dispatch(fetchShows(query)),
//   inputQuery: (query) => dispatch(inputQuery(query)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(SearchField);

export default FilterField;
