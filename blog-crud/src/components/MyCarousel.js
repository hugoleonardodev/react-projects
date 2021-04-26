import React, { Component } from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';
import carouselInitialState from '../data/carouselInitialState';

var instanceCarousel;
export default class MyCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
    };

    this.getLocalStorage = this.getLocalStorage.bind(this);
  }

  getLocalStorage() {
    const blog = JSON.parse(localStorage.getItem('blog'));

    this.setState({
      articles: blog.articles,
    });
  }

  setLocalStorage() {
    const blog = JSON.parse(localStorage.getItem('blog'));

    if (blog === null) {
      localStorage.setItem('blog', JSON.stringify(carouselInitialState));
    }
    // console.log(blog);
    this.getLocalStorage();
  }

  initMyCarousel() {
    const options = {
      duration: 500,
      // fullWidth: true, // another version for the carousel
      // numVisible: 10, // max five
      onCycleTo: () => {
        console.log('New Slide'); // callback when click on new slide
      },
    };

    M.Carousel.init(this.Carousel, options);
  }

  componentDidMount() {
    this.initMyCarousel();
    this.setLocalStorage();
  }

  componentWillUnmount() {
    const allToolTipsElements = document.querySelectorAll('.tooltipped');
    // console.log(allToolTipsElements);
    allToolTipsElements.forEach((element) => {
      instanceCarousel = M.Tooltip.getInstance(element);
      // console.log(instanceCarousel);
      instanceCarousel.destroy();
    });
  }

  render() {
    const { articles } = this.state;
    return (
      <div>
        <div
          ref={(Carousel) => {
            this.Carousel = Carousel;
          }}
          className="carousel"
        >
          {articles.length > 0 ? (
            articles.slice(0, 5).map((article, index) => (
              <Link
                className="tooltipped carousel-item"
                data-tooltip={article.title}
                data-testid={`update-${index}`}
                to={article.route}
                // key={index} not rendering when key is enabled
              >
                <img alt={article.title} src={article.image} />
              </Link>
            ))
          ) : (
            <>
              <Link
                className="tooltipped carousel-item"
                data-tooltip="1"
                to="/update/1"
              >
                <img
                  alt="1"
                  src="https://eskipaper.com/images/landscape-photos-21.jpg"
                />
              </Link>
              <Link
                className="tooltipped carousel-item"
                data-tooltip="2"
                to="/update/2"
              >
                <img
                  alt="2"
                  src="https://www.wallpapertip.com/wmimgs/6-62055_nature-pictures-of-oil-paintings-landscape.jpg"
                />
              </Link>
              <Link
                className="tooltipped carousel-item"
                data-tooltip="3"
                to="/update/3"
              >
                <img
                  alt="3"
                  src="https://www.teahub.io/photos/full/54-547365_beautiful-landscape-wallpaper.jpg"
                />
              </Link>
              <Link
                className="tooltipped carousel-item"
                data-tooltip="4"
                to="/update/4"
              >
                <img
                  alt="4"
                  src="https://images.hdqwalls.com/download/pixel-landscape-dt-1600x1200.jpg"
                />
              </Link>
              <Link
                className="tooltipped carousel-item"
                href="https://www.google.com"
                data-tooltip="5"
                to="/update/5"
              >
                <img
                  alt="5"
                  src="https://eskipaper.com/images/beautiful-winter-landscape-8.jpg"
                />
              </Link>
            </>
          )}
        </div>
      </div>
    );
  }
}
