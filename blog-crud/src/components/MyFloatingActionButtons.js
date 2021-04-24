import React, { Component } from 'react';
import M from 'materialize-css';
// import 'materialize-css/dist/css/materialize.min.css';
// var buttonsElems;
// var toolTipElems;
var instance;
export default class MyFloatingActionButtons extends Component {
  componentDidMount() {
    // M.AutoInit();
    let buttonsElems = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(buttonsElems, {
      direction: 'left',
      // hoverEnabled: false
    });
    // document.addEventListener('DOMContentLoaded', function () {
    const options = {
      position: 'top',
    };
    //   let toolTipElems = document.querySelectorAll('.tooltipped');
    //   M.Tooltip.init(toolTipElems);
    // });
    let toolTipElems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(toolTipElems, options);
    instance = M.Tooltip.getInstance(document.querySelector('.tooltipped'));
  }

  componentWillUnmount() {
    // var elem = document.querySelectorAll('.tooltipped');
    // var instance = M.Tooltip.instance.destroy();
    instance.destroy();
  }
  render() {
    return (
      <div className="fixed-action-btn">
        <a
          className="btn tooltipped btn-floating btn-large red"
          href="#menu"
          id="menu"
          data-tooltip="Menu"
        >
          <i className="large material-icons">menu</i>
        </a>
        <ul>
          <li>
            <a
              className="btn tooltipped btn-floating red"
              // data-position="top"
              data-tooltip="Inicio"
              href="https://www.google.com"
            >
              <i className="material-icons">create</i>
            </a>
          </li>
          <li>
            <a
              className="btn tooltipped btn-floating yellow darken-1"
              href="https://www.google.com"
              data-tooltip="Buscar"
            >
              <i className="material-icons">search</i>
            </a>
          </li>
          <li>
            <a
              className="btn tooltipped btn-floating green"
              href="https://www.google.com"
              data-tooltip="Editar"
            >
              <i className="material-icons">send</i>
            </a>
          </li>
          <li>
            <a
              className="btn tooltipped btn-floating blue"
              href="https://www.google.com"
              data-tooltip="Favoritos"
            >
              <i className="material-icons">star_border</i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
