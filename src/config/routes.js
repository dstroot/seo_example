import React from "react";
import { Route } from "react-router-dom";
import Home from "../pages/home";
import About from "../pages/about";
import Random from "../pages/random";
import PageNotFound from "../pages/404";

export default () => (
  <Route>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/random" component={Random} />
    <Route path="/*" exact component={PageNotFound} />
  </Route>
);
