import React, { Component } from 'react';
import Radio from "../Radio/Radio";

class Support extends Component {
  state = {  }

  handleClick = () => {
    this.props.history.push('/understanding');
  }

  render() { 
    return ( 
      <>
      <h1>How well are you being supported?</h1>
      <Radio />
      <button onClick={this.handleClick}>Next</button>
      </>
     );
  }
}
 
export default Support;