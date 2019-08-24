import React, { Component } from 'react';
import { connect } from "react-redux";

class Radio extends Component {

  handleRadioClick = (number) => {
    let action = {
      type: 'RADIO',
      payload: number
    }
    this.props.dispatch(action);
  }

  render() {
    return (
      <>
      Poor
      < input type = 'radio' name = 'group1' onClick={()=>this.handleRadioClick('1')} /> 1
      < input type = 'radio' name = 'group1' onClick={()=>this.handleRadioClick('2')} /> 2
      < input type = 'radio' name = 'group1' onClick={()=>this.handleRadioClick('3')} /> 3
      < input type = 'radio' name = 'group1' onClick={()=>this.handleRadioClick('4')} /> 4
      < input type = 'radio' name = 'group1' onClick={()=>this.handleRadioClick('5')} /> 5
      Well
      < br />
      </>
     );
  }
}

export default connect()(Radio);