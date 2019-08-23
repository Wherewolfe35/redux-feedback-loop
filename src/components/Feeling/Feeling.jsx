import React, { Component } from 'react';
import Radio from "../Radio/Radio";

class Feeling extends Component {
  state = {  }

  handleClick = () => {
    this.props.history.push('/understanding');
  }

  render() { 
    return ( 
      <>
      <h1>How are you feeling today?</h1>
      <Radio />
      <button onClick={this.handleClick}>Next</button>
      </>
     );
  }
}
 
export default Feeling;