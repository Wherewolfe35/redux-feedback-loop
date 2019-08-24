import React, { Component } from 'react';
import Radio from "../Radio/Radio";

class Understanding extends Component {
  state = { 

   }

  handleClick = () => {
    this.props.history.push('/comments');
  }

  render() { 
    return ( 
      <>
      <h1>How well are you understanding the content?</h1>
      <Radio />
      <button onClick={this.handleClick}>Next</button>
      </>
     );
  }
}
 
export default Understanding;