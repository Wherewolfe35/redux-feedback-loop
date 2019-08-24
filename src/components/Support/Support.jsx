import React, { Component } from 'react';
import Radio from "../Radio/Radio";
import { connect } from "react-redux";

class Support extends Component {
  //verifies that a radio button has been selected and holds data in the supportreducer
  handleClick = () => {
    if (this.props.supportRating === 0) {
      alert('Please select a value for how you feel supported.');
      return false;
    }
    let action = {
      type: 'SUPPORT',
      payload: this.props.supportRating
    }
    this.props.dispatch(action);
    this.props.history.push('/understanding');
  }

  render() { 
    return ( 
      <>
      <h1>How well are you being supported?</h1>
      <Radio />
      <button onClick={this.handleClick}>Next</button>
      </>
     );
  }
}

const store = (reduxStore) => {
  return {
    supportRating: reduxStore.currentRadio
  }
}
 
export default connect(store)(Support);