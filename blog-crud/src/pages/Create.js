import React, { Component } from 'react';
import M from 'materialize-css';
import MyImageInputText from '../components/MyImageInputText';
import MyTitleInputText from '../components/MyTitleInputText';
import MyTextAreaInput from '../components/MyTextAreaInput';
import MyBackToHomeBtn from '../components/MyBackToHomeBtn';
import MyCreateArticleBtn from '../components/MyCreateArticleBtn';

import './Create.styles.css';

export default class Create extends Component {
  constructor(props) {
    super(props);

    // const blog = JSON.parse(localStorage.getItem('blog'));
    // const history = this.props;
    // const { title, route, image, words } = blog.articles[
    //   parseInt(history.location.pathname.split('/')[2] - 1)
    // ];

    this.state = {
      title: '',
      route: '',
      image: '',
      words: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.createArticle = this.createArticle.bind(this);
  }

  handleChange(event) {
    // console.log(event);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  createArticle(event) {
    event.preventDefault();
    console.log(this.state.title);
    const { articles, favorites } = JSON.parse(localStorage.getItem('blog'));
    const { title, image, words } = this.state;
    const newArticle = { title, image, words };
    // articles.push({ title, image, words });
    localStorage.setItem(
      'blog',
      JSON.stringify({
        articles: [...articles, newArticle],
        favorites,
      }),
    );
  }

  componentDidMount() {
    // resizing text area accordly with words size
    console.log(this.state);
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
        <h1 className="title">Create a new article</h1>
        <h3 className="description">{title}</h3>
        {/* <h1>{title}</h1> */}
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
              <MyCreateArticleBtn createArticle={this.createArticle} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
