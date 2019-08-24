import React, { Component } from 'react';
import Radio from "../Radio/Radio";
import { connect } from "react-redux";

class Feeling extends Component {
  handleNextClick = () => {
    if (this.props.feelingRating === 0){
      alert('Please select a value for how you are feeling.');
      return false;
    }
    let action = {
      type: 'FEELING',
      payload: this.props.feelingRating
    }
    this.props.dispatch(action);
    this.props.history.push('/support');
  }

  render() { 
    return ( 
      <>
      <h1>How are you feeling today?</h1>
      <Radio />
      <button onClick={this.handleNextClick}>Next</button>
      </>
     );
  }
}

const store = (reduxStore) => {
  return{
    feelingRating: reduxStore.currentRadio
  }
}
 
export default connect(store)(Feeling);