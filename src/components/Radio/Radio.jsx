import React, { Component } from 'react';

class Radio extends Component {
  state = {}
  render() {
    return (
      <>
      <input type='radio' name='feelings' value='1' />1
      < input type = 'radio' name = 'feelings' value = '2' /> 2
      < input type = 'radio' name = 'feelings' value = '3' /> 3
      < input type = 'radio' name = 'feelings' value = '4' /> 4
      < input type = 'radio' name = 'feelings' value = '5' /> 5
      < br />
      </>
     );
  }
}

export default Radio;