import React, { Component } from 'react';
import M from 'materialize-css';
import MyImageInputText from '../components/MyImageInputText';
import MyTitleInputText from '../components/MyTitleInputText';
import MyTextAreaInput from '../components/MyTextAreaInput';
import MyBackToHomeBtn from '../components/MyBackToHomeBtn';

import './Update.styles.css';
import MyUpdateArticleBtn from '../components/MyUpdateArticleBtn';

export default class Update extends Component {
  constructor(props) {
    super(props);

    const blog = JSON.parse(localStorage.getItem('blog'));
    const { history } = this.props;
    const { title, route, image, words } = blog.articles[
      parseInt(history.location.pathname.split('/')[2] - 1)
    ];

    this.state = {
      title,
      route,
      image,
      words,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // console.log(event);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  componentDidMount() {
    // resizing text area accordly with words size
    M.textareaAutoResize(document.querySelector('.materialize-textarea'));
  }
  render() {
    // const history = this.props;
    // console.log(history.location.pathname.split('/')[2]);
    // const blog = JSON.parse(localStorage.getItem('blog'));
    // console.log(blog);
    const { title, image, words } = this.state;

    return (
      <div>
        <h1>{title}</h1>
        <div className="row">
          <form className="col s12">
            <div className="row">
              <MyTitleInputText
                title={title}
                handleChange={this.handleChange}
              />
              <MyImageInputText
                image={image}
                handleChange={this.handleChange}
              />
            </div>
            <div className="row">
              <MyTextAreaInput words={words} handleChange={this.handleChange} />
            </div>
            <div className="row">
              <MyBackToHomeBtn />
              <MyUpdateArticleBtn />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
