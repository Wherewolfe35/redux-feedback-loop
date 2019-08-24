import React, { Component } from 'react';
import { connect } from "react-redux";

class Comments extends Component {
  state = { 
    comments: '',
   }

   //keeps track of data in the input field in local state
   handleChange = (event) => {
     this.setState({
       comments: event.target.value
     })
   }

   //sends data in local state to redux to hold before final submission
  handleClick = () => {
    let action = {
      type: 'COMMENTS',
      payload: this.state.comments
    }
    this.props.dispatch(action);
    this.props.history.push('/review')
  }

  render() { 
    return ( 
      <>
      <h1>Any comments you would like to leave?</h1>
      <input placeholder='Comments' onChange={this.handleChange}/>
      <button onClick = {this.handleClick}>Next</button>
      </>
     );
  }
}
 
export default connect()(Comments);