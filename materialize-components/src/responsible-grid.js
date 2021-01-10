import {Row, Col, Card, CardTitle, Icon} from 'react-materialize';
import 'materialize-css';
import './Grid.css';

function ResponsibleGrid() {
  return (
  <div>
  <Row>
  <Col
    className="teal white-text"
    s={1}
  >
    <Row>
  <Col
    className="teal white-text"
    s={2}
  >
    <Card
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" reveal waves="light"/>}
      reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
      revealIcon={<Icon>more_vert</Icon>}
      title="Card Title"
      id="card2"
    >
      <p>
        <a href="#">
          This is a link
        </a>
      </p>
    </Card>
  </Col>
</Row>
  </Col>
  <Col
    className="teal white-text"
    s={1}
  >
    <Card
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image="https://materializecss.com/images/sample-1.jpg" reveal waves="light"/>}
      reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}
      revealIcon={<Icon>more_vert</Icon>}
      title="Card Title"
      id="card1"
    >
      <p>
        <a href="#">
          This is a link
        </a>
      </p>
    </Card>
  </Col>
  <Col
    className="teal white-text"
    s={1}
  >
    3
  </Col>
  </Row>
  <Row>
  <Col
    className="teal white-text"
    s={1}
  >
    4
  </Col>
  <Col
    className="teal white-text"
    s={1}
  >
    5
  </Col>
  <Col
    className="teal white-text"
    s={1}
  >
    6
  </Col>
  </Row>
  <Row>
  <Col
    className="teal white-text"
    s={1}
  >
    7
  </Col>
  <Col
    className="teal white-text"
    s={1}
  >
    8
  </Col>
  <Col
    className="teal white-text"
    s={1}
  >
    9
  </Col>
  </Row>
  <Row>
  <Col
    className="teal white-text"
    s={1}
  >
    10
  </Col>
  <Col
    className="teal white-text"
    s={1}
  >
    11
  </Col>
  <Col
    className="teal white-text"
    s={1}
  >
    12
  </Col>
  </Row>
  </div>
  );
}

export default ResponsibleGrid;