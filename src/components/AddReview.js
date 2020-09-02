import React, { Component } from 'react'

 class addReview extends Component {
    render() {
        return (
            <div className="container-fluid">
                
                <h1>Request a Review</h1>
                <table>
                    <thead>
                        <td>Game title</td>
                        <td>Developer</td>
                        <td>Description</td>
                        <td>Email</td>
                    </thead>
                </table>

            </div>
        )
    }
}

export default addReview;
