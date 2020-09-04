import React from "react";
import "./App.css";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Keyboards from "./components/Keyboards";
import Monitors from "./components/Monitors";
import AddReview from "./components/AddReview";
import ReviewList from "./components/ReviewsList";
import Games from "./components/Games";
import {BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
    <div>
      <Switch>
      <Route exact path="/">
      <Landing />
      </Route>
      <Route path="/home">
        <Navbar />
        <Home />
      </Route>
      <Route path="/keyboards">
        <Navbar />
        <Keyboards />
      </Route>
      <Route path="/monitors">
        <Navbar />
        <Monitors />
      </Route>
      <Route path="/games">
        <Navbar />
        <Games />
      </Route>
      <Route exact path="/reviews">
        <Navbar />
        <AddReview />
      </Route>
      <Route exact path="/reviews/list">
        <Navbar />
        <ReviewList />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
