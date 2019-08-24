import React, { Component } from 'react';
import Radio from "../Radio/Radio";
import { connect } from "react-redux";

class Understanding extends Component {
  handleClick = () => {
    if (this.props.understandingRating === 0) {
      alert('Please select a value for how well you feel you understand the material this week.');
      return false;
    }
    let action = {
      type: 'UNDERSTANDING',
      payload: this.props.understandingRating
    }
    this.props.dispatch(action);
    this.props.history.push('/comments');
  }

  render() { 
    return ( 
      <>
      <h1>How well are you understanding the content?</h1>
      <Radio />
      <button onClick={this.handleClick}>Next</button>
      </>
     );
  }
}
 
const store = (reduxStore) => {
  return {
    understandingRating: reduxStore.currentRadio
  }
}

export default connect(store)(Understanding);