import React, { Component } from 'react';
import MyCardArticles from '../components/MyCardArticles';
import M from 'materialize-css';

let position = 0;
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
  render() {
    const { articles, rows, cols } = this.state;
    // const card = (
    //   <MyCardArticles
    //   title={article.title}
    //   image={article.image}
    //   words={article.words}
    // />
    // )
    console.log(this.state);
    return (
      <div className="articles-list">
        <div className="row">
          <div className="col s12 m6 l3">
            <p>s12 m6 l3</p>
          </div>
          <div className="col s12 m6 l3">
            <p>s12 m6 l3</p>
          </div>
          <div className="col s12 m6 l3">
            <p>s12 m6 l3</p>
          </div>
          <div className="col s12 m6 l3">
            <p>s12 m6 l3</p>
          </div>
        </div>
        {/* {articles.map((article) => (
          <MyCardArticles
            title={article.title}
            image={article.image}
            words={article.words}
          />
        ))} */}
        {articles.length > 0 &&
          rows.map((r, i) => {
            // let row = 0;
            // let cols = row + 4;
            return (
              <div className="row" key={r}>
                {cols.map((col, j) => {
                  console.log(position);
                  if (position >= articles.length - 1) {
                    return <div />;
                  }
                  position += 1;
                  return (
                    <div className="col s12 m6 l3">
                      <MyCardArticles
                        title={articles[position].title}
                        image={articles[position].image}
                        words={articles[position].words}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        {/* {articles.forEach((article, index) => {
          const card = () => (
            <MyCardArticles
              title={article.title}
              image={article.image}
              words={article.words}
            />
          );
          console.log(typeof card);
          if (index % 4 === 0) {
            let row = document.createElement('div');
            row.className = 'row';
            let list = document.querySelector('.articles-list');
            list.appendChild(row);
          }
          let container = document.createElement('div');
          container.className = 'col s12 m6 l3';
          let node = card();
          container.appendChild(node);
          let allRows = document.querySelectorAll('.row');
          allRows[allRows.length - 1].appendChild(container);
        })} */}
      </div>
    );
  }
}
