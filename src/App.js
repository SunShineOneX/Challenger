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
import Footer from "./components/Footer";
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
        <Footer />
      </Route>
      <Route path="/keyboards">
        <Navbar />
        <Keyboards />
        <Footer />
      </Route>
      <Route path="/monitors">
        <Navbar />
        <Monitors />
        <Footer />
      </Route>
      <Route path="/games">
        <Navbar />
        <Games />
        <Footer />
      </Route>
      <Route exact path="/reviews">
        <Navbar />
        <AddReview />
        <Footer />
      </Route>
      <Route exact path="/reviews?">
        <Navbar />
        <AddReview />
        <Footer />
      </Route>
      <Route exact path="/reviews/list">
        <Navbar />
        <ReviewList />
        <Footer />
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
