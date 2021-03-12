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

function renderNumbers() {
  return (
    <ul>
      {boardNumbers.map((row, i) => (
        <ul key={i}>
          {row.map((number, j) => (
            <li key={number} id={boardNumbersIds[i][j]}>
              <button type="button" value={number}>
                {number}
              </button>
            </li>
          ))}
        </ul>
      ))}
    </ul>
  );
}

function renderSpecials() {
  return (
    <ul>
      {boardSpecials.map((row, i) => (
        <ul key={i + 10}>
          {row.map((special, j) => (
            <li key={special} id={boardSpecialsIds[i][j]}>
              <button type="button" value={special}>
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
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>JavaScript Calculator</code>
        </p>
      </header>
      {renderNumbers()}
      {renderSpecials()}
    </div>
  );
}

export default JavaScriptCalculator;
