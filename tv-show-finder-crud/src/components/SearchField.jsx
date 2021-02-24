import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { fetchShows } from '../store/actions/fetchShows';
import { inputQuery } from '../store/actions/inputQuery';
import { connect } from 'react-redux';

const SearchField = (props) => {
  const { fetchShows, query, inputQuery } = props;
  return (
    <Form inline>
      <FormGroup>
        <Label for="exampleEmail" hidden>
          Query
        </Label>
        <Input
          type="text"
          // value={query}
          name="query"
          id="query"
          placeholder="Find by query ex: aliens"
          onChange={(e) => inputQuery(e.target.value)}
        />
      </FormGroup>{" "}
      <Button onClick={() => fetchShows()}>Find</Button>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  query: state.query,
});

 // passar query aqui ! (query) => dispatch(fetchShows(query))
 // depois passar como props
const mapDispatchToProps = (dispatch) => ({
  fetchShows: () => dispatch(fetchShows()),
  inputQuery: (query) => dispatch(inputQuery(query))
}); 

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
