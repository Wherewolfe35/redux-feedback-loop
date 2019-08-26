import React, { Component } from 'react';
import Radio from "../Radio/Radio";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';

class Feeling extends Component {
  //verifies that a radio button has been selected and holds data in the feelingreducer
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
      {this.props.currentFeeling> 0 && <p>Last Rating: {this.props.currentFeeling}</p>}
      <Radio />
      <br />
        <Button variant="outlined" color="primary" 
        onClick={this.handleNextClick}>Next
        </Button>
      </>
     );
  }
}

const store = (reduxStore) => {
  return{
    currentFeeling: reduxStore.overallReducer.feeling,
    feelingRating: reduxStore.currentRadio
  }
}
 
export default connect(store)(Feeling);