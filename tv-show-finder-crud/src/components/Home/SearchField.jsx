import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { fetchShows } from "../../store/actions/fetchShows";
import { inputQuery } from "../../store/actions/inputQuery";
import { connect } from "react-redux";
import Logo from "../NavBar/Logo";

const SearchField = (props) => {
  const { fetchShows, query, inputQuery } = props;
  console.log(query);
  return (
    <Form inline>
      <FormGroup>
        <Label for="exampleEmail" style={{ marginRight: "20px" }}>
          Type query and click Find
        </Label>
        <Input
          type="text"
          name="query"
          id="query"
          placeholder="aliens, cars, politics, etc"
          onChange={(e) => inputQuery(e.target.value)}
        />
        <Button onClick={() => fetchShows(query)}>Find</Button>
      </FormGroup>{" "}
    </Form>
  );
};

const mapStateToProps = (state) => ({
  // a: console.log(state),
  query: state.inputQueryReducer.query,
});

const mapDispatchToProps = (dispatch) => ({
  fetchShows: (query) => dispatch(fetchShows(query)),
  inputQuery: (query) => dispatch(inputQuery(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);
