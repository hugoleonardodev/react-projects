import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const boardNumbers = [
  ['7', '8', '9'],
  ['4', '5', '6'],
  ['1', '2', '3'],
];
const boardSpecials = [
  ['0', '+', '-'],
  ['C', '*', '/'],
  ['D', '.', '='],
];
const boardNumbersIds = [
  ['seven', 'eight', 'nine'],
  ['four', 'five', 'six'],
  ['one', 'two', 'three'],
];
const boardSpecialsIds = [
  ['zero', 'add', 'subtract'],
  ['clear', 'multiply', 'divide'],
  ['delete', 'decimal', 'equals'],
];
// const regex = /[+-/*]/;

const handleNumberInputs = (
  displayString,
  setDisplay,
  number,
  evalArray,
  setEval,
) => {
  const data = displayString;
  console.log('array display', data);
  console.log('array eval', evalArray);

  if (displayString === '0') {
    setEval(number);
    return number;
  }
  if (displayString.match(/[0-9]\w+/g) === null) {
    setEval([...evalArray, number]);
    return number;
  }
  setEval([...evalArray, number]);
  // setDisplay(data);
  // typeof display === 'string' && setEval([...evalArray, display]);
  return displayString + number;
};

function RenderNumbers(displayString, setDisplay, evalArray, setEval) {
  return (
    <ul>
      {boardNumbers.map((row, i) => (
        <ul key={i}>
          {row.map((number, j) => (
            <li key={number} id={boardNumbersIds[i][j]}>
              <button
                type="button"
                value={number}
                onClick={(e) =>
                  setDisplay(
                    handleNumberInputs(
                      displayString,
                      setDisplay,
                      e.target.value,
                      evalArray,
                      setEval,
                    ),
                  )
                }
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      ))}
    </ul>
  );
}

const handleInputSpecials = (displayString, special, evalArray, setEval) => {
  console.log(special);
  if (special === 'C') {
    setEval([]);
    return ['0'];
  }
  if (displayString !== 'string' && displayString !== special) {
    setEval([...evalArray, special]);
    return special;
  }
  // typeof displayString !== 'string' &&
  //   displayString !== special &&
  //   setEval([...evalArray, displayString]);
  // return special;
  // : [display + special];
};

function RenderSpecials(displayString, setDisplay, evalArray, setEval) {
  return (
    <ul>
      {boardSpecials.map((row, i) => (
        <ul key={i + 10}>
          {row.map((special, j) => (
            <li key={special} id={boardSpecialsIds[i][j]}>
              <button
                type="button"
                value={special}
                onClick={(e) =>
                  setDisplay(
                    handleInputSpecials(
                      displayString,
                      e.target.value,
                      evalArray,
                      setEval,
                    ),
                  )
                }
              >
                {special}
              </button>
            </li>
          ))}
        </ul>
      ))}
    </ul>
  );
}

function JavaScriptCalculator() {
  const [displayString, setDisplay] = useState('0');
  const [evalArray, setEval] = useState(['0']);
  // const [change, setChange] = useState(false);
  // useEffect(() => {
  //   setEval(...display)
  // }, [])
  // useEffect(() => {
  //   setEval([...evalArray, display]);
  //   console.log(evalArray);
  // }, [display]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>JavaScript Calculator</code>
        </p>
      </header>
      <p>EVAL</p>
      <p>{evalArray}</p>
      <p>DISPLAY</p>
      <p id="display">{displayString}</p>
      {RenderNumbers(displayString, setDisplay, evalArray, setEval)}
      {RenderSpecials(displayString, setDisplay, evalArray, setEval)}
    </div>
  );
}

export default JavaScriptCalculator;
