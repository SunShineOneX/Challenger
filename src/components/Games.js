import React, { Component } from 'react'
import axios from "axios";
import "../styles/games.css";

 class Games extends Component {
    constructor(props) {
        super(props);
        this.state = {
          info: [],
        };
      }
    
      async getGameInfo() {
        try {
          const res = await axios.get("http://localhost:8080/games");
          this.setState({ info: res.data }); // remove json if issue
          console.log(this.state.info);
        } catch {
          console.log("error");
        }
      }
    
      componentDidMount() {
        this.getGameInfo();
      }
    
      render() {
        return (
          <div className="container-fluid" id="card__grid">
            
              <h1>Games</h1>
              <div class="row">
              {this.state.info.map((game) => {
              return (
                <div class="card col-lg-3 col-md-4">
      <img class="card-img-top" src={game.url} onMouseOver={e => (e.currentTarget.src =`${game.webUrl}`)} onMouseOut={e => (e.currentTarget.src =`${game.url}`)}  alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">{game.title}</h5>
        <h6 class="card-subtitle">{game.developer}</h6>
        <p class="card-text">{game.description}</p>
        <p class="card-text"><b>{game.price}</b></p>
        <a href="#" class="btn btn-primary">Add to cart</a>
      </div>
      </div>    
            );
            })}
          </div>
          
          </div>
        
         
        )}
        }

export default Games;
