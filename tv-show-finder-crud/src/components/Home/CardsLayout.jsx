import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  CardFooter,
} from "reactstrap";

const CardsLayout = (props) => {
  let row = [];
  const { shows, fetching, favorites, addToFavorites } = props;

  return (
    <Container>
      {fetching && shows.length > 1 ? (
        shows
          .reduce((acc, cur, colIndex) => {
            if (shows.indexOf(cur) % 4 !== 0 || shows.indexOf(cur) === 0) {
              row.push(cur);
            } else {
              acc.push(row);
              row = [cur];
            }
            return acc;
          }, [])
          .map((row) => (
            <Row key={Math.floor(Math.random() * 100000)} xs="1" sm="2" md="4">
              {row.map((show, rowIndex) => (
                <Col key={Math.floor(Math.random() * 100000)}>
                  <Card
                    key={Math.floor(Math.random() * 100000)}
                    style={{
                      margin: "10px",
                      boxShadow: "5px 5px 5px black",
                      backgroundColor: "#282c34",
                      borderColor: "#61dafb",
                    }}
                  >
                    {show.show.image !== null ? (
                      <CardImg
                        top
                        width="100%"
                        src={show.show.image.medium}
                        alt="Card image cap"
                      />
                    ) : (
                      <div>No images available</div>
                    )}
                    <CardBody>
                      <CardTitle tag="h5">{show.show.name}</CardTitle>
                      {show.show.genres.map((genre) => (
                        <CardSubtitle tag="h6" className="mb-2 text-muted">
                          {genre}
                        </CardSubtitle>
                      ))}
                      {show.show.status === "Ended" ? (
                        <CardText style={{ color: "red" }}>
                          {show.show.status}
                        </CardText>
                      ) : (
                        <CardText style={{ color: "green" }}>
                          {show.show.status}
                        </CardText>
                      )}
                      <CardText>{show.show.officialSite}</CardText>
                      {console.log(favorites)}
                      {console.log(
                        favorites.some((e) => e.score === show.score)
                      )}
                      <Button
                        onClick={() => addToFavorites(favorites, show)}
                        disabled={
                          favorites.some((e) => e.score === show.score)
                            ? true
                            : false
                        }
                      >
                        Add to Favorites
                      </Button>
                    </CardBody>
                    {favorites.some((e) => e.score === show.score) ? (
                      <CardFooter style={{ color: "#764abc" }}>
                        Favorite
                      </CardFooter>
                    ) : (
                      <div />
                    )}
                  </Card>
                </Col>
              ))}
            </Row>
          ))
      ) : (
        <div>Loading...</div>
      )}
    </Container>
  );
};

export default CardsLayout;
