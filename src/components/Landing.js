import "../styles/landing.css";
import axios from "axios";
import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

class Landing extends Component {
  render() {


    const postLaunchData = async () => {
      try {
        const monitor1 = await axios.post("http://localhost:8080/monitors", {
          url: "https://images-na.ssl-images-amazon.com/images/I/71lDpm1GOJL._AC_SL1500_.jpg",
          model: "Ultrawide 24",
          manufacturer: "Dell",
          description: "Awesome 1920X1200 res monitor!",
          price: "$239.95",
        });
        const monitor2 = await axios.post("http://localhost:8080/monitors", {
          url: "https://images-na.ssl-images-amazon.com/images/I/71lDpm1GOJL._AC_SL1500_.jpg",
          model: "34 Superwide 4K",
          manufacturer: "LG",
          description: "Super awesome monitor!",
          price: "$349.95",
        });
        const monitor3 = await axios.post("http://localhost:8080/monitors", {
          url: "https://images-na.ssl-images-amazon.com/images/I/71lDpm1GOJL._AC_SL1500_.jpg",
          model: "24 curved 4K",
          manufacturer: "Samsung",
          description: "high quality curved monitor",
          price: "$139.95",
        });
      } catch {
        console.log("error");
      }
      try {
        const keyboard1 = await axios.post("http://localhost:8080/keyboards", {
          url: "https://images-na.ssl-images-amazon.com/images/I/71lDpm1GOJL._AC_SL1500_.jpg",
          model: "K556",
          manufacturer: "RedDragon",
          description: "Backlit Wired Mechanical Gaming Keyboard, Aluminum Base, 104 Standard Keys",
          price: "$64.99",
        });
        const keyboard2 = await axios.post("http://localhost:8080/keyboards", {
          url: "https://images-na.ssl-images-amazon.com/images/I/51vDOyGtMGL._AC_SL1170_.jpg",
          model: "DK61E",
          manufacturer: "DIERYA",
          description: "The latest addition to our family of mechanical keyboards",
          price: "$54.99",
        });
        const keyboard3 = await axios.post("http://localhost:8080/keyboards", {
          url: "https://images-na.ssl-images-amazon.com/images/I/816YWjgTuJL._AC_SL1500_.jpg",
          model: "Huntsman Elite",
          manufacturer: "Razer",
          description:
            "For gamers, streamers, and multi-taskers who need to h",
          price: "$167.99",
        });
      } catch {
        console.log("error");
      }
      try {
        const review1 = await axios.post("http://localhost:8080/reviews", {
          url: "",
          title: "Starcraft",
          developer: "Blizzard",
          description: "RTS",
          email: "leonard@gmail.com",
        });
        const review2 = await axios.post("http://localhost:8080/reviews", {
          url: "",
          title: "Warcraft",
          developer: "Blizzard",
          description: "Super awesome RTS game",
          email: "payton@yahoo.com",
        });
        const review3 = await axios.post("http://localhost:8080/reviews", {
          url: "",
          title: "League of Legends",
          developer: "Riot games",
          description: "fast paced MOBA cheeks mcClappington",
          email: "sunshine@gmail.com",
        });
      } catch {
        console.log("error");
      }
    };

    return (
      <div className="container-fluid">
        <header className="header-hero">
          <div>
            <div id="hero-bg">
              <h1 id="header-hero">Hello landing!!</h1>
            </div>
            <img src={require("../assets/CHALLENGER.png")} />
          </div>
        </header>
        <button id="landing__btn" class="btn btn-primary" onClick={postLaunchData}>
          <Link to="/home">Get started</Link>
        </button>
      </div>
    );
  }
}

export default Landing;
