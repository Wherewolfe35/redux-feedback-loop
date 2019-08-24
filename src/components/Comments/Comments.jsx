import React, { Component } from 'react';
import { connect } from "react-redux";

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
      <input placeholder='Comments' onChange={this.handleChange} value={this.props.reduxStore.comments}/>
      <button onClick={this.handleBack}>Back</button>
      <button onClick = {this.handleClick}>Next</button>
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