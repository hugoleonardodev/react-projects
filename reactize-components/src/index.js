import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navigator from './navigator-reactstrap';
import SliderCarousel from './carousel-reacstrap';
import GridContainer from "./containers-reactstrap";
import TabsContent from './tabs-reactstrap';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Navigator />
    <SliderCarousel />
    <GridContainer />
    <TabsContent />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
