import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

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
function handleNumberInputs(
  displayString,
  setDisplay,
  number,
  evalString,
  setEval,
) {
  if (displayString === '0') {
    console.log(number);
    setEval(number);
    return number;
  }
  if (displayString.match(/[+-/*]/g) !== null) {
    console.log('inputNumber entrou no match');
    console.log(displayString);
    setEval(evalString + number);
    return number;
  }
  console.log(displayString + number);
  console.log('saiu do inputNumber');
  setEval(evalString + number);
  return displayString + number;
}

function RenderNumbers(displayString, setDisplay, evalString, setEval) {
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
                      evalString,
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

function handleInputSpecials(displayString, special, evalString, setEval) {
  console.log(special);
  if (special === 'C') {
    setEval('0');
    return '0';
  }
  if (special === '0') {
    setEval(evalString + special);
    return displayString + special;
  }
  if (evalString[evalString.length - 1].match(/[+-/*]/) === null) {
    console.log('inputSpecial entrou no match');
    setEval(evalString + special);
    return special;
  }
  console.log('inputSpecial saiu');
  return special;
}

function RenderSpecials(displayString, setDisplay, evalString, setEval) {
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
                      evalString,
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
  const [evalString, setEval] = useState('0');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>JavaScript Calculator</code>
        </p>
      </header>
      {/* <p>EVAL</p> */}
      <p id="display">{evalString}</p>
      {/* <p>DISPLAY</p> */}
      <p>{displayString}</p>
      {RenderNumbers(displayString, setDisplay, evalString, setEval)}
      {RenderSpecials(displayString, setDisplay, evalString, setEval)}
    </div>
  );
}

export default JavaScriptCalculator;
