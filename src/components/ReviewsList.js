import React, { Component } from "react";
import axios from "axios";
import "../styles/reviewlist.css";

class ReviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      isListEmpty: false,
      id: ``,
      title: ``,
      developer: ``,
      description: ``,
      email: ``,
    };
  }

  async getReviewList() {
    try {
      const res = await axios.get("https://gentle-harbor-36153.herokuapp.com/reviews");
      this.setState({ info: res.data });
      if (this.state.info != null) {
          this.setState({ isListEmpty: true});
      }
    } catch {
      console.log("error");
    }
  }

  componentDidMount() {
    this.getReviewList();
  }

 deleteReviewInfo(id) {
    axios.delete("https://gentle-harbor-36153.herokuapp.com/reviews" + id).then((response) => {
      if (response.data != null) {
        alert("Review deleted.");
        this.setState({
          info: this.state.info.filter((review) => review.id != id),
        });
        this.getReviewList();
      }
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="main-container">
          <h1 className="top-header">Reviews</h1>
          <p className="review-p">Post a review request for the Challenger team to work on next! <br /><b>(Please be considerate of deleting other peoples reviews)</b></p>
        <div className="review__table">
          <table className="table table-hover table-light">
            <thead className="thead thead-hover table-dark">
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Developer</th>
                <th>Description</th>
                <th>Email</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {this.state.info.length === 0 ? (
                <tr align="center">
                  <td colspan="6">No reviews available...</td>
                </tr>
              ) : (
                this.state.info.map((review) => {
                  return (
                    <tr>
                      <td>{review.id}</td>
                      <td>{review.title}</td>
                      <td>{review.developer}</td>
                      <td>{review.description}</td>
                      <td>{review.email}</td>
                      <td>
                        <button class="btn btn-primary"
                          id={review.id}
                          onClick={(e) => this.deleteReviewInfo(e.target.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
        </div>
      </div>
    );
  }
}

export default ReviewList;
