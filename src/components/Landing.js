import "../styles/landing.css";
import axios from "axios";
import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

class Landing extends Component {
  render() {


    const postLaunchData = async () => {
      try {
        const monitor1 = await axios.post("https://gentle-harbor-36153.herokuapp.com/monitors", {
          url: "https://images-na.ssl-images-amazon.com/images/I/71BEgjrdUtL._AC_SL1500_.jpg",
          webUrl: "https://images-na.ssl-images-amazon.com/images/I/71IO-TdQMmL._AC_SL1500_.jpg",
          model: "Ultrawide 24\"",
          manufacturer: "Dell",
          description: "Awesome 1920X1200 res monitor!",
          price: "$239.95",
        });
        const monitor2 = await axios.post("https://gentle-harbor-36153.herokuapp.com/monitors", {
          url: "https://images-na.ssl-images-amazon.com/images/I/51HDRk5h3aL._AC_SL1500_.jpg",
          webUrl: "https://images-na.ssl-images-amazon.com/images/I/51oq%2BRFFPgL._AC_SL1500_.jpg",
          model: "34\" Superwide 4K",
          manufacturer: "LG",
          description: "Super awesome monitor!",
          price: "$349.95",
        });
        const monitor3 = await axios.post("https://gentle-harbor-36153.herokuapp.com/monitors", {
          url: "https://images-na.ssl-images-amazon.com/images/I/A1R-83fsyaL._AC_SL1500_.jpg",
          webUrl: "https://images-na.ssl-images-amazon.com/images/I/71TjWBCSJFL._AC_SL1500_.jpg",
          model: "28\" UHD 4K",
          manufacturer: "Samsung",
          description: "high quality curved monitor",
          price: "$139.95",
        });
        const monitor4 = await axios.post("https://gentle-harbor-36153.herokuapp.com/monitors", {
          url: "https://images-na.ssl-images-amazon.com/images/I/718ICn8vZTL._AC_SL1000_.jpg",
          webUrl: "https://images-na.ssl-images-amazon.com/images/I/516pIyq0XBL._AC_SL1000_.jpg",
          model: "27UK850-W 27\" 4K UHD",
          manufacturer: "LG",
          description: "IPS monitor with HDR10 and USB Type-C connectivity",
          price: "$449.99",
        });
        const monitor5 = await axios.post("https://gentle-harbor-36153.herokuapp.com/monitors", {
          url: "https://images-na.ssl-images-amazon.com/images/I/71MkzPdp%2BdL._AC_SL1500_.jpg",
          webUrl: "https://images-na.ssl-images-amazon.com/images/I/5170PeaNDuL._AC_SL1000_.jpg",
          model: "BenQ 24\" IPS monitor",
          manufacturer: "BenQ",
          description: "1080p with proprietary eye care tech",
          price: "$119.95",
        });
      } catch {
        console.log("error");
      }
      try {
        const keyboard1 = await axios.post("https://gentle-harbor-36153.herokuapp.com/keyboards", {
          url: "https://images-na.ssl-images-amazon.com/images/I/71lDpm1GOJL._AC_SL1500_.jpg",
          webUrl: "https://images-na.ssl-images-amazon.com/images/I/71XzX9wWZZL._AC_SL1500_.jpg",
          model: "K556",
          manufacturer: "RedDragon",
          description: "Backlit Wired Mechanical Gaming Keyboard, Aluminum Base, 104 Standard Keys",
          price: "$64.99",
        });
        const keyboard2 = await axios.post("https://gentle-harbor-36153.herokuapp.com/keyboards", {
          url: "https://images-na.ssl-images-amazon.com/images/I/51vDOyGtMGL._AC_SL1170_.jpg",
          webUrl: "https://images-na.ssl-images-amazon.com/images/I/71ikl3dq2gL._AC_SL1200_.jpg",
          model: "DK61E",
          manufacturer: "DIERYA",
          description: "The latest addition to our family of mechanical keyboards",
          price: "$54.99",
        });
        const keyboard3 = await axios.post("https://gentle-harbor-36153.herokuapp.com/keyboards", {
          url: "https://images-na.ssl-images-amazon.com/images/I/816YWjgTuJL._AC_SL1500_.jpg",
          webUrl: "https://images-na.ssl-images-amazon.com/images/I/71rPw-LSTaL._AC_SL1500_.jpg",
          model: "Huntsman Elite",
          manufacturer: "Razer",
          description:
            "The Razer Huntsman Elite introduces the new Razer Opto-Mechanical Switch, utilizing optical technology for unmatched speed",
          price: "$167.99",
        });
        const keyboard4 = await axios.post("https://gentle-harbor-36153.herokuapp.com/keyboards", {
          url: "https://images-na.ssl-images-amazon.com/images/I/7193Jl8PejL._AC_SL1500_.jpg",
          webUrl: "https://images-na.ssl-images-amazon.com/images/I/71Eq6gsnSZL._AC_SL1500_.jpg",
          model: "K95 RGB Platinum XT",
          manufacturer: "Corsair",
          description:
            "Backlit RGB LED, Cherry MX RGB Blue, Black",
          price: "$199.99",
        });
        const keyboard5 = await axios.post("https://gentle-harbor-36153.herokuapp.com/keyboards", {
          url: "https://images-na.ssl-images-amazon.com/images/I/71gadgb7ZNL._AC_SL1500_.jpg",
          webUrl: "https://images-na.ssl-images-amazon.com/images/I/71Te7uvJE8L._AC_SL1500_.jpg",
          model: "BOYI 61 Mini RGB",
          manufacturer: "BOYI",
          description:
            "Cherry MX Switch PBT Keycap 60% RGB Mechanical Gaming Keyboard (Joker Color, Cherry MX Red Switch)",
          price: "$109.99",
        });
      } catch {
        console.log("error");
      }
      try {
        const game1 = await axios.post("https://gentle-harbor-36153.herokuapp.com/games", {
          url: "https://images-na.ssl-images-amazon.com/images/I/71tLUO3ZrtL._AC_SL1000_.jpg",
          webUrl: "https://images-na.ssl-images-amazon.com/images/I/61lJBC3e5-L._AC_SL1000_.jpg",
          title: "Borderlands 3",
          developer: "2K Games",
          description: "The original shooter-looter returns, packing bazillions of guns and a mayhem-fueled adventure!",
          price: "$21.66",
        });
        const game2 = await axios.post("https://gentle-harbor-36153.herokuapp.com/games", {
          url: "https://images-na.ssl-images-amazon.com/images/I/719G5ws-qmL._SL1500_.jpg",
          webUrl: "https://images-na.ssl-images-amazon.com/images/I/81vAP2PwiKL._SL1431_.jpg",
          title: "Halo Infinite",
          developer: "343 Industries",
          description: "For the first time ever, The Master Chief's entire story is on one console.",
          price: "$29.58",
        });
        const game3 = await axios.post("https://gentle-harbor-36153.herokuapp.com/games", {
          url: "https://images-na.ssl-images-amazon.com/images/I/91AsNBcrRNL._SL1500_.jpg",
          webUrl: "https://images-na.ssl-images-amazon.com/images/I/91zynay%2B4TL._SL1500_.jpg",
          title: "Starcraft 2 Battle Chest",
          developer: "Blizzard Games",
          description:
            "With millions of players already in the fight, StarCraft II has made gaming history.",
          price: "$33.56",
        });
        const game4 = await axios.post("https://gentle-harbor-36153.herokuapp.com/games", {
          url: "https://images-na.ssl-images-amazon.com/images/I/81Jy-EnYnOL._AC_SL1500_.jpg",
          webUrl: "https://images-na.ssl-images-amazon.com/images/I/71pebSnJGEL._AC_SL1500_.jpg",
          title: "Doom Eternal",
          developer: "Id Software",
          description:
            "Hell’s armies have invaded Earth; Become the Slayer in an epic single player campaign to conquer demons across dimensions and stop the final destruction of humanity",
          price: "$48.50",
        });
        const game5 = await axios.post("https://gentle-harbor-36153.herokuapp.com/games", {
          url: "https://images-na.ssl-images-amazon.com/images/I/91MFxzqVtLL._SL1500_.jpg",
          webUrl: "https://images-na.ssl-images-amazon.com/images/I/91GcjRgG6QL._SL1500_.jpg",
          title: "Diablo 3 Battle Chest",
          developer: "Blizzard Games",
          description:
            "Challenge death itself as maltha-angel of death-attempts to harness the infernal powers of the black soul stone",
          price: "$38.00",
        });
      } catch {
        console.log("error");
      }
      try {
        const review1 = await axios.post("https://gentle-harbor-36153.herokuapp.com/reviews", {
          url: "",
          title: "Starcraft",
          developer: "Blizzard",
          description: "RTS",
          email: "leonard@gmail.com",
        });
        const review2 = await axios.post("https://gentle-harbor-36153.herokuapp.com/reviews", {
          url: "",
          title: "Warcraft",
          developer: "Blizzard",
          description: "Super awesome RTS game",
          email: "payton@yahoo.com",
        });
        const review3 = await axios.post("https://gentle-harbor-36153.herokuapp.com/reviews", {
          url: "",
          title: "League of Legends",
          developer: "Riot games",
          description: "fast paced MOBA where teams of 5 rush to destroy eachothers nexus",
          email: "sunshine@gmail.com",
        });
      } catch {
        console.log("error");
      }
    };

    return (
      <div className="container-fluid">
        <div className="hero">
          <img className="logo" src= {(require("../assets/challenger_white.png"))} />
        <div className="content">
          <h6 className="landing__h6">Welcome to the</h6>
          <h1 className="landing__h1">Future of gaming</h1>
          
          <button id="landing__btn" class="btn btn-primary" onClick={postLaunchData}>
          <Link to="/home">Get started</Link>
          </button>
        </div>
        <div className="icons">
          <img src={(require("../assets/gamepad.png"))} />
          <img src={(require("../assets/diamond.png"))} />
          <img src={(require("../assets/joystick.png"))} />
          <img src={(require("../assets/gamepad.png"))} />
          <img src={(require("../assets/spaceship.png"))}/>
          <img src={(require("../assets/heart.png"))} />
          <img src={(require("../assets/space-invaders.png"))} />
        </div>
        </div>
      </div>
    );
  }
}
//https://www.youtube.com/watch?v=CZTCciHE72I&t=1s Shout out to this youtuber for helping me style
// the cool animations on my landing page

export default Landing;
