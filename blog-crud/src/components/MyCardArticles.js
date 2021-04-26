import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MyCardArticles extends Component {
  render() {
    const { title, image, words, position } = this.props;
    return (
      <div>
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
              <Link
                className="waves-effect waves-light btn deep-purple darken-1"
                to={`/read/${position + 1}`}
              >
                <i className="material-icons left">remove_red_eye</i>read
              </Link>
            </span>
            <span>
              <Link
                className="waves-effect waves-light btn light-blue accent-3"
                to={`/update/${position + 1}`}
              >
                <i className="material-icons left">library_add</i>update
              </Link>
            </span>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              {title}
              <i className="material-icons right">close</i>
            </span>
            <p>{words.substring(0, words.length / 14)}...</p>
          </div>
        </div>
      </div>
    );
  }
}
