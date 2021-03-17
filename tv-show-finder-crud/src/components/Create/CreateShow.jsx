import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const CreateShow = (props) => {
  return (
    <Form>
      <Label for="name">Create one new card for a show:</Label>
      <hr />
      <FormGroup style={{ border: "1px lightgrey solid", margin: "20px" }}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Show name ex. X-Files"
          />
        </FormGroup>
        <hr />
        <Label for="name">Genres</Label>
        <FormGroup>
          <FormGroup style={{ border: "1px lightgrey solid" }}>
            <FormGroup check inline>
              <Label check>
                <Input type="checkbox" /> Comedy
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type="checkbox" /> Drama
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type="checkbox" /> Science-Fiction
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type="checkbox" /> Crime
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type="checkbox" /> Romance
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type="checkbox" /> Anime
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type="checkbox" /> Action
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type="checkbox" /> War
              </Label>
            </FormGroup>
            <FormGroup check inline>
              <Label check>
                <Input type="checkbox" /> Thriller
              </Label>
            </FormGroup>
          </FormGroup>
        </FormGroup>
        <hr />
        <Label for="examplePassword">Status</Label>
        <FormGroup style={{ border: "1px lightgrey solid", display: "flex" }}>
          <FormGroup style={{ margin: "10px" }} check>
            <Label check>
              <Input type="radio" /> Running
            </Label>
          </FormGroup>
          <FormGroup style={{ margin: "10px" }} check>
            <Label check>
              <Input type="radio" /> Ended
            </Label>
          </FormGroup>
        </FormGroup>
        <hr />
        <FormGroup>
          <Label for="site">Web Site</Label>
          <Input
            type="text"
            name="site"
            id="examplePassword"
            placeholder="https://..."
          />
        </FormGroup>
        <hr />
        <Button>Submit</Button>
      </FormGroup>
    </Form>
  );
};

export default CreateShow;
