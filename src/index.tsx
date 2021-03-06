import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div className="spinner" />}>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={React.lazy(() => import("./screens/Home"))}
          />
          <Route
            exact
            path="/Crew"
            component={React.lazy(() => import("./screens/Crew"))}
          />
          <Route
            exact
            path="/Directors"
            component={React.lazy(() => import("./screens/Directors"))}
          />
          <Route
            exact
            path="/Philanthropy"
            component={React.lazy(() => import("./screens/Philanthropy"))}
          />
          <Route
            exact
            path="/Technology"
            component={React.lazy(() => import("./screens/Technology"))}
          />
          <Route
            exact
            path="/Synopsis"
            component={React.lazy(() => import("./screens/Synopsis"))}
          />
          <Route
            exact
            path="/Treasure"
            component={React.lazy(() => import("./screens/Treasure"))}
          />
        </Switch>
      </Router>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);
