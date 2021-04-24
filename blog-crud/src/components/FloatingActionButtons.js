import React, { Component } from 'react';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

export default class FloatingActionButtons extends Component {
  componentDidMount() {
    // M.AutoInit();
    var elems = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(elems, {
      direction: 'left',
      // hoverEnabled: false
    });
  }
  render() {
    return (
      <div className="fixed-action-btn">
        <a className="btn-floating btn-large red" href="#menu" id="menu">
          <i className="large material-icons">menu</i>
        </a>
        <ul>
          <li>
            <a className="btn-floating red" href="https://www.google.com">
              <i className="material-icons">create</i>
            </a>
          </li>
          <li>
            <a
              className="btn-floating yellow darken-1"
              href="https://www.google.com"
            >
              <i className="material-icons">search</i>
            </a>
          </li>
          <li>
            <a className="btn-floating green" href="https://www.google.com">
              <i className="material-icons">send</i>
            </a>
          </li>
          <li>
            <a className="btn-floating blue" href="https://www.google.com">
              <i className="material-icons">star_border</i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
