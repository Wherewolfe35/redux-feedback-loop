import React, { Component } from 'react';
import { connect } from "react-redux";

class Comments extends Component {
  state = { 
    comments: '',
   }

   handleChange = (event) => {
     this.setState({
       comments: event.target.value
     })
   }

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