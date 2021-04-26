import React, { Component } from 'react';
import MyCardArticles from '../components/MyCardArticles';
// import M from 'materialize-css';
import MyBackToHomeBtn from '../components/MyBackToHomeBtn';
import MyCreateArticleBtn from '../components/MyCreateArticleBtn';
import MyFilterInputText from '../components/MyFilterInputText';

import './List.styles.css';

let position = -1;
export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      rows: [0, 1, 2],
      cols: [0, 1, 2, 3],
    };
  }

  getLocalStorage() {
    const blog = JSON.parse(localStorage.getItem('blog'));
    this.setState({
      articles: blog.articles,
    });
  }

  componentDidMount() {
    // this.initMyCarousel();
    this.getLocalStorage();
  }

  componentWillUnmount() {
    position = -1;
  }
  render() {
    const { articles, rows, cols } = this.state;

    // console.log(this.state);
    return (
      <div className="articles-list">
        <MyFilterInputText />
        {articles.length > 0 &&
          rows.map((r, i) => {
            return (
              <div className="row" key={r}>
                {cols.map((col, j) => {
                  // console.log(position);
                  if (position >= articles.length - 1) {
                    return null;
                  }
                  position += 1;
                  return (
                    <div className="col s12 m6 l3">
                      <MyCardArticles
                        title={articles[position].title}
                        image={articles[position].image}
                        words={articles[position].words}
                        position={position}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        <MyBackToHomeBtn />
        <MyCreateArticleBtn />
      </div>
    );
  }
}
