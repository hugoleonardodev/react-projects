import React, { Component } from 'react';
// import M from 'materialize-css';

export default class MyImageInputText extends Component {
  render() {
    const { image, handleChange } = this.props;
    return (
      <>
        <div className="input-field col s6">
          <i className="material-icons prefix">insert_photo</i>
          <input
            className="validate"
            onChange={handleChange}
            value={image}
            name="image"
            type="text"
            id="image"
          />
          <label className="active" htmlFor="image">
            Image URL
          </label>
        </div>
      </>
    );
  }
}
