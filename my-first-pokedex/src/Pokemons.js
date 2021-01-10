import React from 'react'
import pokemons from './data'

const arrayPokemonsWithRequiredDatas = pokemons.reduce((acc, cur) => {
  const a = { 
    image: cur.image, name: cur.name, type: cur.type,
    "average weight": cur.averageWeight.value + ' ' + cur.averageWeight.measurementUnit
  };

  const array = [];
  array.push(a.name);
  array.push(a.type);
  array.push(a["average weight"]);
  array.push(a.image);

  acc.push(array);

  return acc;
}, []);

class Pokemons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value:  arrayPokemonsWithRequiredDatas
    }
  }

  createListElement() {
    return arrayPokemonsWithRequiredDatas.map(e =>
      <li>
        <img src={e[3]} alt={e[0]}/>
        <h6>Name: {e[0]}</h6>
        <h6>Type: {e[1]}</h6>
        <h6>Average Weight: {e[2]}</h6>
      </li>)
  }

  render() { 
    return (
      <ol>
        {this.createListElement()}
      </ol>
    );
  }
}
 
export default Pokemons;