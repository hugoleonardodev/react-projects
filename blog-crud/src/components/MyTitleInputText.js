import React, { Component } from 'react';
// import M from 'materialize-css';

export default class MyTitleInputText extends Component {
  render() {
    const { title, handleChange } = this.props;
    return (
      <>
        <div className="input-field col s6">
          <i className="material-icons prefix">insert_photo</i>
          <input
            className="validate"
            onChange={handleChange}
            value={title}
            name="title"
            type="text"
            id="title"
          />
          <label className="active" htmlFor="title">
            Title
          </label>
        </div>
      </>
    );
  }
}
