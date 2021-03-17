import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home";
import Read from "./pages/Read";
import Create from "./pages/Create";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/create" component={Create} />
        <Route path="/read" component={Read} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
