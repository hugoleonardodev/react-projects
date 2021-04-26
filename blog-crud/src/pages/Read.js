import React, { Component } from 'react';
import M from 'materialize-css';
import MyBackToHomeBtn from '../components/MyBackToHomeBtn';

import './Read.styles.css';
import MyReadFloatingActionButtons from '../components/MyReadFloatingActionButtons';

export default class Read extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  getLocalStorage() {
    const blog = JSON.parse(localStorage.getItem('blog'));
    this.setState({
      articles: blog.articles,
    });
  }
  componentDidMount() {
    this.getLocalStorage();
  }
  componentDidUpdate() {
    M.Parallax.init(this.Parallax1);
  }
  render() {
    const { history } = this.props;
    console.log(history.location.pathname);
    const { articles } = this.state;
    // console.log(parseInt(history.location.pathname.split('/')[2]));
    // const { title, image, words } = articles[
    //   parseInt(history.location.pathname.split('/')[2])
    // ];
    return (
      <div className="read-container">
        {articles.length > 0 ? (
          <>
            <div className="parallax-container">
              <div
                ref={(Parallax) => {
                  this.Parallax1 = Parallax;
                }}
                className="parallax"
              >
                <img
                  src={
                    articles[parseInt(history.location.pathname.split('/')[2])]
                      .image
                  }
                  alt="text"
                />
              </div>
            </div>
            <div className="section white">
              <div className="row container">
                <h2 className="header">
                  {
                    articles[parseInt(history.location.pathname.split('/')[2])]
                      .title
                  }
                </h2>
                <p className="grey-text text-darken-3 lighten-3">
                  {
                    articles[parseInt(history.location.pathname.split('/')[2])]
                      .words
                  }
                </p>
              </div>
              <MyBackToHomeBtn />
              <MyReadFloatingActionButtons
                position={parseInt(history.location.pathname.split('/')[2])}
              />
            </div>
          </>
        ) : (
          <div>Not Found</div>
        )}
      </div>
    );
  }
}
