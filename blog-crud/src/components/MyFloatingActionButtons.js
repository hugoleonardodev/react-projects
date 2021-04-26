import React, { Component } from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';

var instance; // a instance of ToolTips will be createad below

export default class MyFloatingActionButtons extends Component {
  componentDidMount() {
    // init action buttons
    let buttonsElems = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(buttonsElems, {
      direction: 'left',
      // hoverEnabled: false
    });

    // init tool tips
    const options = {
      position: 'top',
    };
    let toolTipElems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(toolTipElems, options);

    // instance of tool tips to be destroyed on unmount
    instance = M.Tooltip.getInstance(document.querySelector('.tooltipped'));
  }

  componentWillUnmount() {
    // instance must be stopped to prevent still rendering on route changes
    instance.destroy();
  }

  render() {
    return (
      <div className="fixed-action-btn">
        <a
          className="btn tooltipped btn-floating btn-large grey darken-4"
          href="#menu"
          id="menu"
          data-tooltip="Menu"
          data-testid="floating-menu"
        >
          <i className="large material-icons">menu</i>
        </a>
        <ul>
          <li>
            <Link
              className="btn tooltipped btn-floating green accent-3"
              data-testid="floating-create"
              data-tooltip="Create"
              to="/create"
            >
              <i className="material-icons">create</i>
            </Link>
          </li>
          <li>
            <Link
              className="btn tooltipped btn-floating blue-grey darken-1"
              data-testid="floating-list"
              data-tooltip="List"
              to="/list"
            >
              <i className="material-icons">search</i>
            </Link>
          </li>
          <li>
            <Link
              className="btn tooltipped btn-floating yellow darken-3"
              data-tooltip="Favorites"
              data-testid="floating-favorites"
              to="/favorites"
            >
              <i className="material-icons">star_border</i>
            </Link>
          </li>
          <li>
            <Link
              className="btn tooltipped btn-floating purple darken-1"
              data-tooltip="About"
              data-testid="floating-about"
              to="/about"
            >
              <i className="material-icons">info</i>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
