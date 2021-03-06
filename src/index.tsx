import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import Crew from "./screens/Crew";
import Directors from "./screens/Directors";
import Home from "./screens/Home";
import Philanthropy from "./screens/Philanthropy";
import Synopsis from "./screens/Synopsis";
import Technology from "./screens/Technology";
import Treasure from "./screens/Treasure";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Crew" component={Crew} />
        <Route exact path="/Directors" component={Directors} />
        <Route exact path="/Philanthropy" component={Philanthropy} />
        <Route exact path="/Technology" component={Technology} />
        <Route exact path="/Synopsis" component={Synopsis} />
        <Route exact path="/Treasure" component={Treasure} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
