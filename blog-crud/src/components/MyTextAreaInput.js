import React, { Component } from 'react';

export default class MyTextAreaInput extends Component {
  render() {
    const { words, handleChange } = this.props;
    return (
      <div>
        <div className="input-field col s12">
          <i className="material-icons prefix">article</i>
          <textarea
            className="materialize-textarea validate"
            onChange={handleChange}
            value={words}
            name="words"
            type="text"
            id="words"
          />
          <label className="active" htmlFor="words">
            Article
          </label>
        </div>
      </div>
    );
  }
}
