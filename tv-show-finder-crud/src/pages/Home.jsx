import React from "react";
import parse from "html-react-parser";
import { fetchShows } from '../store/actionCreators';
import { connect } from 'react-redux';

class Home extends React.Component {
  componentDidMount() {
    const { fetchShows } = this.props;
    fetchShows(); 
    // enviando a action fetchMovies
  }
  render() {
    const { shows, fetching } = this.props;
    console.log(fetching)
    console.log(shows)
    return (
      <div className="App">
        <h1>TV Show Finder CRUD</h1>
        {fetching === false ? shows.map((show) => (
          <div>
            {console.log(show)}
            {show.show.name}
            {parse(show.show.summary)}
            {show.show.image !== null ? (
              <img src={show.show.image.medium} alt={show.show.name} />
            ) : (
              <div>No pictures available</div>
            )}
          </div>
        )) : <div />}
      </div>
    );
  }

} 

const mapStateToProps = (state) => ({
  query: state.query,
  shows: state.shows,
  favorites: state.favorites,
  fetching: state.fetching
});

const mapDispatchToProps = (dispatch) => ({
  fetchShows: () => dispatch(fetchShows())
}); // passar query aqui !

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// mapeia o state global e passa através de props
// const mapStateToProps = (state) => ({
//   signalColor: state.trafficSignalReducer.signal.color,
// });
// mapeia a função que altera o state global e qual propriedade alterar
// const mapDispatchToProps = (dispatch) => ({
//   changeSignal: (payload) => dispatch(changeSignal(payload)),
// });
// conecta map e dispatch
// export default connect(mapStateToProps, mapDispatchToProps)(TrafficSignal);
