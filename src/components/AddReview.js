import React, { Component } from "react";
import axios from "axios";
import "../styles/addreview.css";

class addReview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ``,
      developer: ``,
      description: ``,
      email: ``,
      formCompleted: false,
    }
  }

  getTitleData = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  getDeveloperData = (event) => {
    this.setState({
      developer: event.target.value,
    });
  };

  getDescriptionData = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  getEmailData = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleFormSubmission = (event) => {
   event.preventDefault();
    this.setState({
      formCompleted: true,
    });
  };

//   submitReview() {
//     document.getElementById(`game__title`).value="";
//     document.getElementById(`game__developer`).value="";
//     document.getElementById(`game__description`).value="";
//     document.getElementById(`user__email`).value="";
//   };

 postReviewData = async () => {
    try {
      await axios.post("http://localhost:8080/reviews", {
        title: this.state.title,
        developer: this.state.developer,
        description: this.state.description,
        email: this.state.email,
      })
      alert("Review added");
      document.getElementById(`game__title`).value="";
      document.getElementById(`game__developer`).value="";
      document.getElementById(`game__description`).value="";
      document.getElementById(`user__email`).value="";
    } catch {
      console.log("error");
    }
  };

  submitReview = async () => {
    try {
    this.postReviewData();
    alert("Review added.")
  } catch {
    console.log("error")
  }
};




  render() {

    return (
      <div className="container-fluid">
        <div className="main-container">
        <h1 className="top-header">Request a Review</h1>
        <form>
          <div className="form-group" id="review__form">
            <div className="row">
              <div className="col">
                <h5 id="game__title">Game title</h5>
                <input
                  type="text"
                  className="form-control"
                  placeholder="game title"
                  value={this.state.title}
                  onChange={this.getTitleData}
                />
              </div>
              <div className="col">
                <h5 id="game__developer">Developer</h5>
                <input
                  type="text"
                  className="form-control"
                  placeholder="developer"
                  value={this.state.developer}
                  onChange={this.getDeveloperData}
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h5 id="game__description">Description</h5>
                <input
                  type="text"
                  className="form-control"
                  placeholder="description"
                  value={this.state.description}
                  onChange={this.getDescriptionData}
                />
              </div>
              <div className="col">
                <h5 id="user__email">Email</h5>
                <input
                  type="text"
                  className="form-control"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.getEmailData}
                />
              </div>
            </div>
            <div className="form-group">
              <button type="submit" class="btn btn-primary" id="submit__btn" onClick={this.submitReview}>
                Submit Review
              </button>
            </div>
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default addReview;
