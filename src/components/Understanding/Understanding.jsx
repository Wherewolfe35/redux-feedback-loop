import React, { Component } from 'react';
import Radio from "../Radio/Radio";

class Understanding extends Component {
  state = {  }
  render() { 
    return ( 
      <>
      <h1>How well are you understanding the content?</h1>
      <Radio />
      </>
     );
  }
}
 
export default Understanding;