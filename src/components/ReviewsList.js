import React, { Component } from "react";
import axios from "axios";
import "../styles/reviewlist.css";

class ReviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      isListEmpty: false,
    };
  }

  async getReviewList() {
    try {
      const res = await axios.get("http://localhost:8080/reviews");
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
    axios.delete("http://localhost:8080/reviews/" + id).then((response) => {
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
          <h1>Reviews</h1>
        <div className="review__table">
          <table>
            <thead>
              <tr>
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
                      <td>{review.title}</td>
                      <td>{review.developer}</td>
                      <td>{review.description}</td>
                      <td>{review.email}</td>
                      <td>
                        <button
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
    );
  }
}

export default ReviewList;
