import axios from "axios";
import React, { Component } from "react";
import "../styles/monitors.css";

class Monitors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      isListEmpty: false,
    };
  }

  async getMonitorInfo() {
    try {
      const res = await axios.get("http://localhost:8080/monitors");
      this.setState({ info: res.data }); // remove json if issue
      if (this.state.info != null) {
        this.setState({ isListEmpty: true });
      }
      console.log(this.state.info);
    } catch {
      console.log("error from get");
    }
  }

  componentDidMount() {
    this.getMonitorInfo();
  }

  // deleteMonitorInfo(id) {
  //   axios.delete("http://localhost:8080/monitors/" + id).then((response) => {
  //     if (response.data != null) {
  //       alert("Monitor deleted.");
  //       this.setState({
  //         info: this.state.info.filter((monitor) => monitor.id !== id),
  //       });
  //       this.getMonitorInfo();
  //     }
  //   });
  // }

  render() {
    return (
      <div className="container-fluid" id="card__grid">
        <h1>Monitors</h1>
       <div className="row">
        {this.state.info.map((monitor) => {
          return (
            <div class="card col-lg-3 col-md-4">
              <img class="card-img-top" src={monitor.url}  onMouseOver={e => (e.currentTarget.src =`${monitor.webUrl}`)} onMouseOut={e => (e.currentTarget.src =`${monitor.url}`)} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">{monitor.model}</h5>
                <h6 class="card-subtitle">{monitor.manufacturer}</h6>
                <p class="card-text">{monitor.description}</p>
                <p class="card-text"><b>{monitor.price}</b></p>
                <a href="#" class="btn btn-primary">Add to cart</a>
                </div>
            </div>
          )
        })}
       </div>
      </div>
    );
  }
}

export default Monitors;
