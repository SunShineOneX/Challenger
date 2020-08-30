import "../styles/landing.css";
import axios from "axios";
import React, { Component } from "react";
import {BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

class Landing extends Component {



  render() {

    const postLaunchData = async () => {
        try {
            const monitor1 = await axios.post("http://localhost:8080/monitors",
            {
                 model: "Ultrawide 24",
                 manufacturer: "Dell",
                 description: "Awesome 1920X1200 res monitor!",
                 price: "$239.95"
            }); 
            const monitor2 = await axios.post("http://localhost:8080/monitors",
            {
                 model: "34 Superwide 4K",
                 manufacturer: "LG",
                 description: "Super awesome monitor!",
                 price: "$349.95"
            }); 
            const monitor3 = await axios.post("http://localhost:8080/monitors",
            {
                 model: "24 curved 4K",
                 manufacturer: "Samsung",
                 description: "high quality curved monitor",
                 price: "$139.95"
            }); 
        } catch {
            console.log("error");
        }
        try {
            const keyboard1 = await axios.post("http://localhost:8080/keyboards",
            {
                 model: "K552",
                 manufacturer: "RedDragon",
                 description: "RBG awesomeness",
                 price: "$64.95"
            }); 
            const keyboard2 = await axios.post("http://localhost:8080/keyboards",
            {
                 model: "Drop Shift",
                 manufacturer: "Drop",
                 description: "full size mechanical with RGB!",
                 price: "$250"
            }); 
            const keyboard3 = await axios.post("http://localhost:8080/keyboards",
            {
                 model: "Alloy Elite 2",
                 manufacturer: "HyperX",
                 description: "full size mechanical keyboard with lustrous pudding key caps and gorgeous RHB",
                 price: "$129.95"
            }); 
        } catch {
            console.log("error");
        }
        try {
            const review1 = await axios.post("http://localhost:8080/reviews",
            {
                 title: "Starcraft",
                 developer: "Blizzard",
                 description: "RTS",
                 email: "leonard@gmail.com"
            }); 
            const review2 = await axios.post("http://localhost:8080/reviews",
            {
                 title: "Warcraft",
                 developer: "Blizzard",
                 description: "Super awesome RTS game",
                 email: "payton@yahoo.com"
            }); 
            const review3 = await axios.post("http://localhost:8080/reviews",
            {
                 title: "League of Legends",
                 developer: "Riot games",
                 description: "fast paced MOBA cheeks mcClappington",
                 email: "sunshine@gmail.com"
            }); 
        } catch {
            console.log("error");
        }
    }
    return (
      <div className="container">
        <div className="landing">
          <h1>Hello landing!!</h1>
          <img src={require("../assets/CHALLENGER.png")} />
        </div>
        <button onClick={postLaunchData}><Link to ="/home">Get started</Link></button>
      </div>
    );
  }
}

export default Landing;
