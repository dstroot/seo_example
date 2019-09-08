import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

// pages
import Home from "./pages/home";
import About from "./pages/about";
import Random from "./pages/random";
import PageNotFound from "./pages/404";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <Link to="/">Home</Link>
          {" • "}
          <Link to="/about">About</Link>
          {" • "}
          <Link to="/random">Random</Link>
          {" • "}
        </nav>
        {/* A <Switch> renders the first child <Route> that matches. A <Route> with no path always matches. */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/random" component={Random} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
