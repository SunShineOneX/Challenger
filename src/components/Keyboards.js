import React, { Component } from "react";
import axios from "axios";
import "../styles/keyboards.css";

class Keyboards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
    };
  }

  async getKeyboardInfo() {
    try {
      const res = await axios.get("http://localhost:8080/keyboards");
      this.setState({ info: res.data }); // remove json if issue
      console.log(this.state.info);
    } catch {
      console.log("error");
    }
  }

  componentDidMount() {
    this.getKeyboardInfo();
  }

  render() {
    return (
      <div className="container-fluid" id="card__grid">
        
        <h1>Mechanical Keyboards</h1>
          <div class="row">
          {this.state.info.map((keyboard) => {
          return (
            <div class="card col-lg-3 col-md-4">
  <img class="card-img-top" src={keyboard.url}  onMouseOver={e => (e.currentTarget.src =`${keyboard.webUrl}`)} onMouseOut={e => (e.currentTarget.src =`${keyboard.url}`)}alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">{keyboard.model}</h5>
    <h6 class="card-subtitle">{keyboard.manufacturer}</h6>
    <p class="card-text">{keyboard.description}</p>
    <p class="card-text"><b>{keyboard.price}</b></p>
    <a href="#" class="btn btn-primary">Add to cart</a>
  </div>
  </div>    
        );
        })}
      </div>
      
      </div>
    
     
    )}
    }

export default Keyboards;
