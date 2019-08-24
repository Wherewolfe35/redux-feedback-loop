import React, { Component } from 'react';

class Comments extends Component {
  state = {  }

  handleChange = () => {
    this.props.history.push('/review')
  }

  render() { 
    return ( 
      <>
      <h1>Any comments you would like to leave?</h1>
      <input placeholder='Comments'/>
      <button onClick = {this.handleChange}>Next</button>
      </>
     );
  }
}
 
export default Comments;