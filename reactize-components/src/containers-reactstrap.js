import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import DualLinkCards from './cards-reactstrap';

const GridContainer = (props) => {
  return (
    <Container>
      <Row xs="2">
        <Col><DualLinkCards /></Col>
        <Col><DualLinkCards /></Col>
        <Col><DualLinkCards /></Col>
        <Col><DualLinkCards /></Col>
      </Row>
    </Container>
  );
}

export default GridContainer;