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
      const res = await axios.get("http://localhost:8080/monitors");
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
      <div className="container-fluid">
        <h1>Keyboards</h1>
        <div id="table">
        <table>
          <thead>
            <tr>
              <th>Model</th>
              <th>Manufacturer</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.info.map((keyboard) => {
              return (
                <tr>
                  <td>{keyboard.model}</td>
                  <td>{keyboard.manufacturer}</td>
                  <td>{keyboard.description}</td>
                  <td>{keyboard.price}</td>
                </tr>
              );
            })}
          </tbody>
          </table>
          </div>

      </div>
    );
  }
}

export default Keyboards;
