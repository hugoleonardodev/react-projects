import React, { Component } from 'react';
import MyCarousel from '../components/MyCarousel';
import MyFloatingActionButtons from '../components/MyFloatingActionButtons';

export default class Home extends Component {
  render() {
    return (
      <div>
        <MyCarousel />
        <MyFloatingActionButtons />
      </div>
    );
  }
}
