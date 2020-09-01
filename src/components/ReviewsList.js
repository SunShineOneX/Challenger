import React, { Component } from 'react'
import axios from "axios";
import "../styles/reviewlist.css";
 class ReviewList extends Component {
     constructor(props) {
         super(props)
         this.state = {
             info: []
         }
     };

     async getReviewList() {
         try {
             const res = await axios.get("http://localhost:8080/reviews")
             this.setState({ info: res.data });
         } catch {
             console.log("error");
         }
     }
     
     componentDidMount() {
         this.getReviewList();
     }

    render() {
        return (
            <div className="container-fluid">
                <div className="review__table">
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Developer</th>
                            <th>Description</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.info === 0 ?
                            <tr align="center">
                                <td colspan="6">No reviews available...</td>
                            </tr> :
                            this.state.info.map((review) => {
                                return (
                                    <tr>
                                        <td>{review.title}</td>
                                        <td>{review.developer}</td>
                                        <td>{review.description}</td>
                                        <td>{review.email}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default ReviewList;
