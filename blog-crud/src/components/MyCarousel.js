import React, { Component } from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import one from '../assets/1.jpg';
import two from '../assets/2.jpg';
import three from '../assets/3.jpg';
import four from '../assets/4.jpg';
import five from '../assets/5.jpg';

export default class MyCarousel extends Component {
  componentDidMount() {
    const options = {
      duration: 300,
      onCycleTo: () => {
        console.log('New Slide');
      },
    };
    M.Carousel.init(this.Carousel, options);

    //Instance Plugin
    // let instance = M.Carousel.getInstance(this.Carousel);
    // instance.next(2);
  }

  render() {
    return (
      <div>
        <div
          ref={(Carousel) => {
            this.Carousel = Carousel;
          }}
          className="carousel"
        >
          <a className="carousel-item" href="https://www.google.com">
            <img alt="1" src={one} />
          </a>
          <a className="carousel-item" href="https://www.google.com">
            <img alt="2" src={two} />
          </a>
          <a className="carousel-item" href="https://www.google.com">
            <img alt="3" src={three} />
          </a>
          <a className="carousel-item" href="https://www.google.com">
            <img alt="4" src={four} />
          </a>
          <a className="carousel-item" href="https://www.google.com">
            <img alt="5" src={five} />
          </a>
        </div>
      </div>
    );
  }
}
