import "../styles/landing.css";
import axios from "axios";
import React, { Component } from "react";

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
                 model: "34 Superwide 4K",
                 manufacturer: "LG",
                 description: "Super awesome monitor!",
                 price: "$349.95"
            }); 
        } catch {
            console.log("error");
        }
        try {
            const keyboard1 = await axios.post("http://localhost:8080/keyboards",
            {
                 model: "Ultrawide 24",
                 manufacturer: "Dell",
                 description: "Awesome 1920X1200 res monitor!",
                 price: "$239.95"
            }); 
            const keyboard2 = await axios.post("http://localhost:8080/keyboards",
            {
                 model: "34 Superwide 4K",
                 manufacturer: "LG",
                 description: "Super awesome monitor!",
                 price: "$349.95"
            }); 
            const keyboard3 = await axios.post("http://localhost:8080/keyboards",
            {
                 model: "34 Superwide 4K",
                 manufacturer: "LG",
                 description: "Super awesome monitor!",
                 price: "$349.95"
            }); 
        } catch {
            console.log("error");
        }
        try {
            const review1 = await axios.post("http://localhost:8080/reviews",
            {
                 model: "Ultrawide 24",
                 manufacturer: "Dell",
                 description: "Awesome 1920X1200 res monitor!",
                 price: "$239.95"
            }); 
            const review2 = await axios.post("http://localhost:8080/reviews",
            {
                 model: "34 Superwide 4K",
                 manufacturer: "LG",
                 description: "Super awesome monitor!",
                 price: "$349.95"
            }); 
            const review3 = await axios.post("http://localhost:8080/reviews",
            {
                 model: "34 Superwide 4K",
                 manufacturer: "LG",
                 description: "Super awesome monitor!",
                 price: "$349.95"
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
        <button onClick={postLaunchData}>Get started</button>
      </div>
    );
  }
}

export default Landing;
