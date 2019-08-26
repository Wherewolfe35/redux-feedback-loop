import React, { Component } from 'react';
import Radio from "../Radio/Radio";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

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
        <br />
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button onClick={this.handleBack}>Back</Button>
          <Button onClick={this.handleClick}>Next</Button>
        </ButtonGroup>
      </>
     );
  }
}
 
const store = (reduxStore) => {
  return {
    currentU: reduxStore.overallReducer.understanding,
    understandingRating: reduxStore.currentRadio
  }
}

export default connect(store)(Understanding);