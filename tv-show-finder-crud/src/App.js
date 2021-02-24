import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
