import React, { Component } from 'react';
import Radio from "../Radio/Radio";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

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

  //sends user back one page
  handleBack = () => {
    this.props.history.push('/')
  }


  render() {
    return (
      <>
        <h1>How well are you being supported?</h1>
        {this.props.currentSupport > 0 && <p>Last Rating: {this.props.currentSupport}</p>}
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
    currentSupport: reduxStore.overallReducer.support,
    supportRating: reduxStore.currentRadio
  }
}

export default connect(store)(Support);