import React, { Component } from 'react';

export default class MyCardArticles extends Component {
  render() {
    const { title, image, words } = this.props;
    return (
      // <div>
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={image} alt={title} />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            {title}
            <i className="material-icons right">more_vert</i>
          </span>
          <span>
            <a
              className="waves-effect waves-light btn deep-purple darken-1"
              href="home"
            >
              <i className="material-icons left">remove_red_eye</i>read
            </a>
          </span>
          <span style={{ marginLeft: '20px' }}>
            <a
              className="waves-effect waves-light btn light-blue accent-3"
              href="home"
            >
              <i className="material-icons left">library_add</i>update
            </a>
          </span>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            {title}
            <i className="material-icons right">close</i>
          </span>
          <p>
            {words.substring(0, words.length / 8)} {'...'}
          </p>
        </div>
      </div>
      // </div>
    );
  }
}
