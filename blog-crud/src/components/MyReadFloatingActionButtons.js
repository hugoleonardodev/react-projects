import React, { Component } from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';

var instance; // a instance of ToolTips will be createad below

export default class MyReadFloatingActionButtons extends Component {
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

    var modalElems = document.querySelectorAll('.modal');
    M.Modal.init(modalElems);
  }

  componentWillUnmount() {
    // instance must be stopped to prevent still rendering on route changes
    instance.destroy();
  }

  render() {
    // const { history } = this.props;
    // console.log(history.location.pathname);
    const { position } = this.props;
    return (
      <div className="fixed-action-btn">
        <a
          className="btn tooltipped btn-floating btn-large grey darken-4"
          href="#menu"
          id="menu"
          data-tooltip="Menu"
        >
          <i className="large material-icons">menu</i>
        </a>
        <ul>
          <li>
            <Link
              className="btn tooltipped btn-floating green accent-3"
              data-tooltip="Create"
              to="/create"
            >
              <i className="material-icons">create</i>
            </Link>
          </li>
          <li>
            <Link
              className="btn tooltipped btn-floating light-blue accent-3"
              to={`/update/${position}`}
              data-tooltip="Update"
            >
              <i className="material-icons">library_add</i>
            </Link>
          </li>
          <li>
            <button
              className="btn tooltipped btn-floating yellow darken-3"
              // to="/favorites"
              data-tooltip="Bookmark"
              onClick={() =>
                M.toast({
                  html: 'Successfuly added to favorites!',
                  classes: 'round',
                })
              }
              data-testid="read-bookmark"
            >
              <i className="material-icons">bookmark_border</i>
            </button>
          </li>
          <li>
            <a
              className="btn tooltipped btn-floating modal-trigger deep-orange accent-3"
              href="#delete"
              data-tooltip="Delete"
            >
              <i className="material-icons">delete_forever</i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
