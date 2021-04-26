import React, { Component } from 'react';
import M from 'materialize-css';
import { Link } from 'react-router-dom';

var instance; // a instance of ToolTips will be createad below

export default class MyCreateArticleBtn extends Component {
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
    const { createArticle } = this.props;
    return (
      <div className="fixed-action-btn">
        <Link
          className="btn tooltipped btn-floating btn-large green accent-3"
          onClick={createArticle}
          to="/created"
          // id="menu"
          data-tooltip="Create"
          style={{ right: '18px' }}
          // disabled
        >
          <i className="large material-icons">library_add</i>
        </Link>
      </div>
    );
  }
}
