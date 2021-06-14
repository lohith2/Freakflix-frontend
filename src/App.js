import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./core/home";
import comedy from "./core/comedy";
import drama from "./core/drama";
import animation from "./core/animation";
import action from "./core/action";
import adventure from "./core/adventure";
import biography from "./core/biography";
import details from "./core/details";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Comedy" exact component={comedy} />
        <Route path="/animation" exact component={animation} />
        <Route path="/drama" exact component={drama} />
        <Route path="/Action" exact component={action} />
        <Route path="/adventure" exact component={adventure} />
        <Route path="/biography" exact component={biography} />
        <Route path="/details" exact component={details} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
