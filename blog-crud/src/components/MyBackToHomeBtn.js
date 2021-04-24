import React, { Component } from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';

var instance; // a instance of ToolTips will be createad below

export default class MyBackToHomeBtn extends Component {
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
      <div className="fixed-action-btn" style={{ left: '24px' }}>
        <Link
          className="btn tooltipped btn-floating btn-large  grey darken-4"
          to="/"
          // id="menu"
          data-tooltip="Home"
          // style={{ left: '24px', right: 'none' }}
        >
          <i className="large material-icons">home</i>
        </Link>
      </div>
    );
  }
}
