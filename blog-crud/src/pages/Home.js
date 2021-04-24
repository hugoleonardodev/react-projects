import React, { Component } from 'react';
import MyCarousel from '../components/MyCarousel';
import MyFloatingActionButtons from '../components/MyFloatingActionButtons';

import './Home.styles.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="title"> My Beatiful Blog</h1>
        <h3 className="description">A beatiful landscapes blob</h3>
        <MyCarousel />
        <MyFloatingActionButtons />
      </div>
    );
  }
}
