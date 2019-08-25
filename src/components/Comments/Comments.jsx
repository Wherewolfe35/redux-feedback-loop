import React, { Component } from 'react';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';

class Comments extends Component {
  state = { 
    comments: '',
   }

   //keeps track of data in the input field in local state
   handleChange = (event) => {
     let action = {
       type: 'COMMENTS',
       payload: event.target.value
     }
     this.props.dispatch(action);
     this.setState({
       comments: event.target.value
     })
   }

   //sends data in local state to redux to hold before final submission
  handleClick = () => {
    this.props.history.push('/review')
  }

  //sends user back one page
  handleBack = () => {
    this.props.history.push('/understanding')
  }
  
  render() { 
    return ( 
      <>
      <h1>Any comments you would like to leave?</h1>
      <br />
        <TextField
          id="outlined-multiline-static"
          label="Comments"
          multiline
          rows="4"
          placeholder="Is there anything else you would like us to know?"
          margin="normal"
          variant="outlined"
          onChange={this.handleChange} 
          value={this.props.reduxStore.comments}
        />
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
    reduxStore
  }
}
 
export default connect(store)(Comments);