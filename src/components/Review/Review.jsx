import React, { Component } from 'react';
import { connect } from "react-redux";

class Review extends Component {
  state = { 

   }
  render() { 
    return ( 
      <>
      <h1>Review of your Feedback</h1>
      <ul>
        <li>How you are feeling overall: {this.props.feeling}</li>
        <li>Your understanding of this week: {this.props.understanding}</li>
        <li>How well you feel supported: {this.props.support}</li>
        <li>Comments: {this.props.comments}</li>
      </ul>
      <button>Submit</button>
      </>
     );
  }
}

const storeToProps = (reduxStore) => {
  return {
    feeling: reduxStore.feeling,
    understanding: reduxStore.understanding,
    support: reduxStore.support,
    comments: reduxStore.comments
  }
}
 
export default connect(storeToProps)(Review);