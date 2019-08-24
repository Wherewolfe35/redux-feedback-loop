import React, { Component } from 'react';
import Radio from "../Radio/Radio";
import { connect } from "react-redux";

class Understanding extends Component {
  //verifies that a radio button has been selected and holds data in the understandingreducer
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

  //sends user back one page
  handleBack = () => {
    this.props.history.push('/support')
  }
  

  render() { 
    return ( 
      <>
      <h1>How well are you understanding the content?</h1>
        {this.props.currentU > 0 && <p>Last Rating: {this.props.currentU}</p>}
      <Radio />
      <button onClick={this.handleBack}>Back</button>
      <button onClick={this.handleClick}>Next</button>
      </>
     );
  }
}
 
const store = (reduxStore) => {
  return {
    currentU: reduxStore.understanding,
    understandingRating: reduxStore.currentRadio
  }
}

export default connect(store)(Understanding);